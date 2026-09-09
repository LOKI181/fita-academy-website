import { NextResponse } from "next/server";
import { z } from "zod";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

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

  return NextResponse.json({ ok: true });
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