import { NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { z } from "zod";

import { requireUser } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const createSchema = z.object({
  amount: z.number().positive(),
  courseSlug: z.string().min(1),
  courseTitle: z.string().min(1),
});

export async function POST(req: Request) {
  const auth = await requireUser();
  if (!auth) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  // Demo mode: no real keys, return a synthetic order the UI can "complete".
  if (!keyId || !keySecret) {
    return NextResponse.json({
      mode: "demo",
      demo: true,
      order: {
        id: "order_demo_" + Date.now(),
        amount: parsed.data.amount,
        currency: "INR",
      },
    });
  }

  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parsed.data.amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: { course: parsed.data.courseTitle, user: auth.user.id },
      }),
    });
    const order = await res.json();
    return NextResponse.json({ mode: "live", order });
  } catch {
    return NextResponse.json({ error: "Could not create payment order." }, { status: 502 });
  }
}

const verifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export async function PUT(req: Request) {
  const auth = await requireUser();
  if (!auth) {
    return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = verifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payment payload." }, { status: 400 });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  // Demo verification
  if (!keySecret || parsed.data.razorpay_order_id.startsWith("order_demo_")) {
    const { error } = await supabase
      .from("enrollments")
      .update({ payment_status: "paid" })
      .eq("user_id", auth.user.id)
      .neq("payment_status", "paid");

    if (error) {
      console.error('[payment:demo]', error);
    }
    return NextResponse.json({ ok: true, mode: "demo" });
  }

  const expected = createHmac("sha256", keySecret)
    .update(`${parsed.data.razorpay_order_id}|${parsed.data.razorpay_payment_id}`)
    .digest("hex");

  if (expected !== parsed.data.razorpay_signature) {
    return NextResponse.json({ error: "Payment signature mismatch." }, { status: 400 });
  }

  const { error } = await supabase
    .from("enrollments")
    .update({ payment_status: "paid" })
    .eq("user_id", auth.user.id);

  if (error) {
    console.error('[payment:live]', error);
    return NextResponse.json({ error: "Failed to update enrollment" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, mode: "live" });
}