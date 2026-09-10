import { NextResponse } from "next/server";
import { z } from "zod";

import { addEnquiry } from "@/lib/store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit mobile number"),
  subject: z.string().max(200).default("Career application"),
  message: z.string().max(2000).default(""),
  position: z.string().max(200).default(""),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!rateLimit(ip, "careers", 5, 60_000)) {
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
    branch: "",
    course: "",
    mode: "" as const,
    pagePath: "/careers",
    ip_hash: ip,
    created_at: new Date().toISOString(),
  };

  try {
    await addEnquiry(record);
  } catch (err) {
    console.error("[careers:store]", err);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
