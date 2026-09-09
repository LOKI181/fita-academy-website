import { NextResponse } from "next/server";

import { requireRole } from "@/lib/auth";
import { getStore, publicUser } from "@/lib/store";

export async function GET() {
  const auth = await requireRole("admin");
  if (!auth) {
    return NextResponse.json({ error: "Admin only." }, { status: 403 });
  }
  const store = await getStore();
  return NextResponse.json({
    users: store.users.map(publicUser),
    enrollments: store.enrollments,
    batches: store.batches,
    certificates: store.certificates,
    enquiries: store.enquiries,
  });
}