import { NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { requireUser } from "@/lib/auth";
import { getStore, setStore } from "@/lib/store";
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
    return NextResponse.json({ error: "Invalid course or StoreBatch." }, { status: 400 });
  }

  const store = await getStore();
  const StoreBatch = store.batches.find((b) => b.id === parsed.data.batchId);
  if (!StoreBatch) {
    return NextResponse.json({ error: "StoreBatch not found." }, { status: 404 });
  }
  if (StoreBatch.seatsLeft <= 0) {
    return NextResponse.json({ error: "This StoreBatch is full." }, { status: 409 });
  }

  const existing = store.enrollments.find(
    (e) => e.userId === auth.user.id && e.courseSlug === parsed.data.courseSlug
  );
  if (existing && existing.status !== "completed") {
    return NextResponse.json(
      { error: "You're already enrolled in this course." },
      { status: 409 }
    );
  }

  const course = null;
  void course;

  const enrollment: Enrollment = {
    id: `en_${randomUUID()}`,
    userId: auth.user.id,
    courseSlug: parsed.data.courseSlug,
    courseTitle: StoreBatch.courseName,
    batchId: StoreBatch.id,
    status: "active",
    progressPct: 0,
    enrolledAt: new Date().toISOString(),
    paymentStatus: "pending",
  };

  await setStore((draft) => {
    const b = draft.batches.find((x) => x.id === StoreBatch.id);
    if (b) b.seatsLeft = Math.max(0, b.seatsLeft - 1);
    draft.enrollments.push(enrollment);
  });

  return NextResponse.json({ enrollment }, { status: 201 });
}