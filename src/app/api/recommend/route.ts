import { NextResponse } from "next/server";
import { z } from "zod";

import { recommend } from "@/lib/recommend";

const schema = z.object({
  background: z.enum(["fresher", "working", "career-change"]),
  goal: z.enum(["job", "promotion", "startup", "upskill"]),
  interest: z.string().trim().min(2),
  months: z.string().min(1),
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

  const results = recommend(parsed.data);
  return NextResponse.json({
    results: results.map((c) => ({
      slug: c.slug,
      title: c.title,
      category: c.category,
      blurb: c.blurb,
      level: c.level,
      rating: c.rating,
      topics: c.topics.slice(0, 4),
    })),
  });
}