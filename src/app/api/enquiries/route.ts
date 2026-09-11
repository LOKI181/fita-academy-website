import { NextResponse } from "next/server";
import { z } from "zod";

import { addEnquiry } from "@/lib/store";
import { sendEnquiryNotification, sendBookingConfirmation } from "@/lib/mail";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

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

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!rateLimit(ip, "enquiries", 3, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests — please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch (err) {
    console.error('[enquiries] JSON parse error:', err);
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
    return NextResponse.json({ error: "Failed to save enquiry. Please ensure the Supabase 'enquiries' table exists." }, { status: 500 });
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