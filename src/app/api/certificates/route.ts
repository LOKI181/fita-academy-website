import { NextResponse } from "next/server";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { requireRole } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { addCertificate } from "@/lib/store";
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

  // Check user exists
  const { data: user, error: userErr } = await supabase
    .from("users")
    .select("id, name")
    .eq("id", parsed.data.userId)
    .single();

  if (userErr || !user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  // Check enrollment
  const { data: enrollment, error: enrErr } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_slug", parsed.data.courseSlug)
    .single();

  if (enrErr || !enrollment) {
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
    courseTitle: enrollment.course_title || enrollment.courseTitle,
    courseSlug: parsed.data.courseSlug,
    issuedAt: new Date().toISOString(),
    trainerName: parsed.data.trainerName,
    hours: 120,
  };

  try {
    await addCertificate(certificate);
  } catch (err) {
    console.error('[certificates:store]', err);
    return NextResponse.json({ error: "Failed to create certificate" }, { status: 500 });
  }

  // Update enrollment status
  await supabase
    .from("enrollments")
    .update({ status: "completed", progress_pct: 100 })
    .eq("id", enrollment.id);

  return NextResponse.json({ certificate }, { status: 201 });
}