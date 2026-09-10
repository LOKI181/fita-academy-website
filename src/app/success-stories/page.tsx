import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { successStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from FITA Academy students who transformed their careers — from freshers to placed professionals across India's top IT companies.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero with giant background text */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>STORIES</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Success Stories"
              title="From learning to landing their dream jobs"
              sub="Every story here is a real student who started with us and ended up in a career they're proud of."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((s) => (
              <Card key={s.name} className="card-premium flex flex-col">
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
        </ScrollReveal>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Your turn"
              title="Ready to write your success story?"
              sub="10,000+ students placed. Your career transformation starts with one step."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="btn-press glow-primary-hover">
                <Link href="/courses">
                  Explore Courses <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-press">
                <Link href="/enquire?subject=Career Counselling">
                  Talk to a Counsellor
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
