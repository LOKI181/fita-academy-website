import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth";
import { getStore } from "@/lib/store";

export async function GET() {
  const auth = await requireUser();
  if (!auth) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  const store = await getStore();
  const enrollments = store.enrollments.filter((e) => e.userId === auth.user.id);
  const batches = store.batches;
  const certificates = store.certificates.filter((c) => c.userId === auth.user.id);

  return NextResponse.json({
    enrollments,
    batches,
    certificates,
    user: auth.user,
  });
}