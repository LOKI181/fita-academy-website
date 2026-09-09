import { NextResponse } from "next/server";
import { z } from "zod";

import { setSessionCookie, signSession, verifyPassword } from "@/lib/auth";
import { getStore, publicUser } from "@/lib/store";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
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

  const store = await getStore();
  const user = store.users.find((u) => u.email === parsed.data.email);
  if (!user || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = await signSession(user);
  await setSessionCookie(token);

  return NextResponse.json({ user: publicUser(user) });
}