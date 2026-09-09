import { NextResponse } from "next/server";

import { requireRole } from "@/lib/auth";
import { getStore, publicUser } from "@/lib/store";

export async function GET() {
  const auth = await requireRole("trainer", "admin");
  if (!auth) {
    return NextResponse.json({ error: "Trainer or admin only." }, { status: 403 });
  }
  const store = await getStore();
  return NextResponse.json({
    batches: store.batches,
    students: store.users.filter((u) => u.role === "student").map(publicUser),
  });
}