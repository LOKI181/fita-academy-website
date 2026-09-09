import { NextResponse } from "next/server";
import { z } from "zod";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

import { setStore } from "@/lib/store";
import { sendEmail } from "@/lib/mail";
import { brand } from "@/lib/content";

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
    receivedAt: new Date().toISOString(),
    ip,
  };

  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "enquiries.jsonl");
    await appendFile(file, JSON.stringify(record) + "\n", "utf8");
  } catch {
    // Transient persistence is best-effort; never fail the user on storage.
  }

  await setStore((draft) => {
    draft.enquiries.push(record);
  });

  // Email notification + CRM webhook (best-effort, never blocks the user).
  if (record.email) {
    await sendEmail({
      to: record.email,
      subject: `We received your ${intentLabel(record.intent)} — ${brand.name}`,
      html: `<p>Hi ${record.name},</p><p>Thanks for reaching out to ${brand.name}. A counsellor will call you shortly about your enquiry${record.course ? ` on <strong>${record.course}</strong>` : ""}.</p><p>Need it faster? Call ${brand.phone} or WhatsApp us anytime.</p>`,
    });
  }
  void notifyCrm(record).catch(() => {});

  return NextResponse.json({ ok: true });
}

function intentLabel(v: string) {
  if (v === "demo") return "demo class request";
  if (v === "contact") return "message";
  return "enquiry";
}

async function notifyCrm(record: Record<string, unknown>) {
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (!webhook) return;
  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "enquiry.created", data: record }),
  });
}

export async function GET() {
  try {
    const file = path.join(process.cwd(), ".data", "enquiries.jsonl");
    const raw = await readFile(file, "utf8");
    const rows = raw
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .sort(
        (a, b) =>
          new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()
      );
    return NextResponse.json({ total: rows.length, enquiries: rows });
  } catch {
    return NextResponse.json({ total: 0, enquiries: [] });
  }
}