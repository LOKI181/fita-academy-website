import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        ghost="STORIES"
        eyebrow="Success Stories"
        title={
          <>
            From learning to <span className="gradient-text">landing their dream jobs</span>
          </>
        }
        sub="Every story here is a real student who started with us and ended up in a career they're proud of."
        stats={[
          { value: "10K+", label: "Students placed" },
          { value: "3000+", label: "Hiring partners" },
          { value: "94%", label: "Placement rate" },
          { value: "40%", label: "Avg. salary hike" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {successStories.map((s) => (
                <figure key={s.name} className="surface flex h-full flex-col p-6">
                  <Quote className="size-7 text-primary/25" aria-hidden />

                  <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed italic text-foreground/85">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-heading text-base font-bold tracking-tight text-foreground">
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-[0.78rem] text-muted-foreground">
                      <span className="font-medium text-foreground/70">{s.previousRole}</span>
                      {" → "}
                      <span className="font-semibold text-success">{s.placedRole}</span>
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[0.75rem] text-muted-foreground">
                      <Building2 className="size-3.5 text-primary" aria-hidden /> {s.company}
                    </p>
                    <p className="text-[0.75rem] text-muted-foreground">{s.branch}</p>
                  </figcaption>

                  <span className="chip mt-4 w-fit">{s.course}</span>
                </figure>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Your turn"
              title="Ready to write your success story?"
              sub="10,000+ students placed. Your career transformation starts with one step."
            />
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/courses">
                  Explore Courses <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-press h-11 bg-card px-6"
              >
                <Link href="/enquire?subject=Career Counselling">Talk to a Counsellor</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}