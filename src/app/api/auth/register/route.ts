import { NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { hashPassword, signSession, setSessionCookie } from "@/lib/auth";
import { getStore, addUser, publicUser } from "@/lib/store";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import type { User } from "@/lib/types";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => /^[6-9]\d{9}$/.test(v), "Enter a valid 10-digit mobile number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(200)
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number"),
  role: z.enum(["student", "trainer", "admin"]).default("student"),
  adminKey: z.string().optional(),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!rateLimit(ip, "register", 3, 60_000)) {
    return NextResponse.json({ error: "Too many attempts — please wait a minute." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const { name, email, phone, password, role, adminKey } = parsed.data;

  // Only allow staff roles with the reserved setup key (for demos/local setup).
  const targetRole = role;
  if (targetRole !== "student") {
    const validKey = process.env.FITA_ADMIN_SETUP_KEY || "fita-admin-demo";
    if (adminKey !== validKey) {
      return NextResponse.json(
        { error: "Invalid staff setup key for this role." },
        { status: 403 }
      );
    }
  }

  const store = await getStore();
  if (store.users.some((u) => u.email === email)) {
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  const user: User = {
    id: `u_${randomUUID()}`,
    name,
    email,
    phone,
    role: targetRole,
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString(),
  };

  await addUser(user);

  const token = await signSession(user);
  await setSessionCookie(token);

  return NextResponse.json({ user: publicUser(user) }, { status: 201 });
}