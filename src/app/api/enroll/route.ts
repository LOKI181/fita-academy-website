import { NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { requireUser } from "@/lib/auth";
import { addEnrollment, getStore } from "@/lib/store";
import type { Enrollment } from "@/lib/types";

const schema = z.object({
  courseSlug: z.string().min(1),
  batchId: z.string().min(1),
});

export async function POST(req: Request) {
  const auth = await requireUser();
  if (!auth) {
    return NextResponse.json({ error: "Please sign in to enroll." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid course or batch." }, { status: 400 });
  }

  // Get batch info for course title
  const store = await getStore();
  const batch = store.batches.find((b) => b.id === parsed.data.batchId);
  if (!batch) {
    return NextResponse.json({ error: "Batch not found." }, { status: 404 });
  }

  const enrollment: Enrollment = {
    id: `en_${randomUUID()}`,
    userId: auth.user.id,
    courseSlug: parsed.data.courseSlug,
    courseTitle: batch.courseName,
    batchId: parsed.data.batchId,
    status: "active",
    progressPct: 0,
    enrolledAt: new Date().toISOString(),
    paymentStatus: "pending",
  };

  try {
    await addEnrollment(enrollment);
  } catch (err) {
    console.error('[enroll:store]', err);
    return NextResponse.json({ error: "Failed to create enrollment" }, { status: 500 });
  }

  return NextResponse.json({ enrollment }, { status: 201 });
}