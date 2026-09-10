import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { successStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from FITA Academy students who transformed their careers — from freshers to placed professionals across India's top IT companies.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Success Stories"
            title="From learning to landing their dream jobs"
            sub="Every story here is a real student who started with us and ended up in a career they're proud of."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((s) => (
            <Card key={s.name} className="flex flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-1 flex-col gap-4 p-6">
                <Quote className="size-8 text-primary/30" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-4">
                  <p className="font-heading text-base font-bold text-foreground">{s.name}</p>
                  <div className="mt-1 space-y-0.5 text-xs text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">{s.previousRole}</span>
                      {" → "}
                      <span className="font-medium text-success">{s.placedRole}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Building2 className="size-3" aria-hidden /> {s.company}
                    </p>
                    <p>{s.branch}</p>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                  {s.course}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Your turn"
            title="Ready to write your success story?"
            sub="10,000+ students placed. Your career transformation starts with one step."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/courses">
                Explore Courses <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/enquire?subject=Career Counselling">
                Talk to a Counsellor
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
