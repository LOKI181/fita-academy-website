import { NextResponse } from "next/server";
import { z } from "zod";

import { addEnquiry } from "@/lib/store";
import { sendEnquiryNotification, sendBookingConfirmation } from "@/lib/mail";

const schema = z.object({
  intent: z.enum(["enquiry", "demo", "contact"]).default("enquiry"),
  name: z.string().trim().min(2, "Name is required").max(120),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Invalid mobile number"),
  email: z.union([z.literal(""), z.string().trim().email("Invalid email")]),
  branch: z.string().max(120).default(""),
  course: z.string().max(160).default(""),
  mode: z.enum(["classroom", "live-online", "not-sure", ""]).default(""),
  message: z.string().max(2000).default(""),
  pagePath: z.string().max(500).default(""),
});

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;
const hits = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length <= RATE_MAX;
}

function intentLabel(v: string) {
  if (v === "demo") return "demo class request";
  if (v === "contact") return "message";
  return "enquiry";
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "local";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests — please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Invalid input";
    return NextResponse.json({ error: first }, { status: 400 });
  }

  const record = {
    ...parsed.data,
    ip_hash: ip,
    created_at: new Date().toISOString(),
  };

  try {
    await addEnquiry(record);
  } catch (err) {
    console.error('[enquiries:store]', err);
    return NextResponse.json({ error: "Failed to save enquiry" }, { status: 500 });
  }

  // Send emails (best-effort, never blocks the user)
  try {
    if (record.email) {
      await sendBookingConfirmation({
        name: record.name,
        email: record.email,
        phone: record.phone,
        course: record.course || undefined,
        branch: record.branch || undefined,
      });
    }
    await sendEnquiryNotification({
      name: record.name,
      email: record.email,
      phone: record.phone,
      course: record.course || undefined,
      branch: record.branch || undefined,
      message: record.message || undefined,
      pagePath: record.pagePath || undefined,
    });
  } catch (err) {
    console.error('[enquiries:email]', err);
  }

  return NextResponse.json({ ok: true });
}