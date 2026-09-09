import { NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { requireRole } from "@/lib/auth";
import { getStore, setStore } from "@/lib/store";
import type { Certificate } from "@/lib/types";

const schema = z.object({
  userId: z.string().min(1),
  courseSlug: z.string().min(1),
  trainerName: z.string().min(1),
});

export async function POST(req: Request) {
  const auth = await requireRole("admin");
  if (!auth) {
    return NextResponse.json({ error: "Admin only." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const store = await getStore();
  const user = store.users.find((u) => u.id === parsed.data.userId);
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const enrollment = store.enrollments.find(
    (e) => e.userId === user.id && e.courseSlug === parsed.data.courseSlug
  );
  if (!enrollment) {
    return NextResponse.json({ error: "User is not enrolled in this course." }, { status: 400 });
  }

  const certId = `FITA-${parsed.data.courseSlug
    .split("-")
    .map((s) => s[0])
    .join("")
    .toUpperCase()}-${new Date().getFullYear()}-${randomUUID().slice(0, 6).toUpperCase()}`;

  const certificate: Certificate = {
    id: `cert_${randomUUID()}`,
    certId,
    userId: user.id,
    userName: user.name,
    courseTitle: enrollment.courseTitle,
    courseSlug: parsed.data.courseSlug,
    issuedAt: new Date().toISOString(),
    trainerName: parsed.data.trainerName,
    hours: 120,
  };

  await setStore((draft) => {
    draft.certificates.push(certificate);
    const en = draft.enrollments.find((e) => e.id === enrollment.id);
    if (en) {
      en.status = "completed";
      en.progressPct = 100;
    }
  });

  return NextResponse.json({ certificate }, { status: 201 });
}