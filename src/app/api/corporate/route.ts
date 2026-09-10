import { NextResponse } from "next/server";
import { z } from "zod";

import { addEnquiry } from "@/lib/store";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit mobile number"),
  company: z.string().max(200).default(""),
  teamSize: z.string().max(100).default(""),
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
      { error: "Too many requests — please wait a minute." },
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
    intent: "contact" as const,
    subject: `Corporate Training Enquiry from ${parsed.data.company || parsed.data.name}`,
    branch: "",
    course: "",
    mode: "" as const,
    pagePath: "/business/corporate-training",
    ip_hash: ip,
    created_at: new Date().toISOString(),
  };

  try {
    await addEnquiry(record);
  } catch (err) {
    console.error("[corporate:store]", err);
    return NextResponse.json({ error: "Failed to save enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
