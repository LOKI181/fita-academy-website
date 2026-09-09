import { NextResponse } from "next/server";

import { clearSessionCookie, getSession } from "@/lib/auth";

export async function POST() {
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const auth = await getSession();
  if (!auth) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  return NextResponse.json({ user: auth.user });
}