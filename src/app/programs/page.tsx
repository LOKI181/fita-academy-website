import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { masterPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Master Programs",
  description:
    "FITA Academy Master Programs — comprehensive career transformation packages combining multiple courses with placement support. AI, Full Stack, Cloud, Marketing & more.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero with giant background text */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>PROGRAMS</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Master Programs"
              title="Career transformation, not just courses"
              sub="Our Master Programs combine multiple courses into structured career tracks — with placement support, real projects and mentor guidance."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {masterPrograms.map((prog, i) => (
              <Card
                key={prog.slug}
                className={`card-premium flex flex-col ${
                  i === 0 ? "ring-2 ring-primary" : ""
                }`}
              >
                <CardContent className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-2">
                    {prog.badge ? <Badge>{prog.badge}</Badge> : <span />}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden /> {prog.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {prog.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {prog.description}
                  </p>
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-foreground">Includes:</p>
                    {prog.courses.map((c) => (
                      <span key={c} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="size-3 text-success" aria-hidden /> {c}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="font-heading text-lg font-bold text-foreground">{prog.fees}</span>
                    <Button asChild size="sm" className="btn-press">
                      <Link href={`/enquire?course=${encodeURIComponent(prog.title)}`}>
                        Enquire <ArrowRight aria-hidden />
                      </Link>
                    </Button>
                  </div>
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
              eyebrow="Custom track"
              title="Want a personalised learning path?"
              sub="Talk to our counsellors — they'll design a learning plan around your career goals and schedule."
            />
            <div className="mt-8">
              <Button asChild size="lg" className="btn-press glow-primary-hover">
                <Link href="/enquire?subject=Custom Learning Path">
                  Talk to a Counsellor <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
