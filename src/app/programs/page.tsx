import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        ghost="PROGRAMS"
        eyebrow="Master Programs"
        title={
          <>
            Career transformation, <span className="gradient-text">not just courses</span>
          </>
        }
        sub="Our Master Programs combine multiple courses into structured career tracks — with placement support, real projects and mentor guidance."
        stats={[
          { value: `${masterPrograms.length}`, label: "Career tracks" },
          { value: "1:1", label: "Mentor guidance" },
          { value: "100%", label: "Placement support" },
          { value: "120+", label: "Courses included" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {masterPrograms.map((prog, i) => (
                <article
                  key={prog.slug}
                  className={`surface group flex flex-col p-6 ${
                    i === 0 ? "border-gradient ring-1 ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    {prog.badge ? (
                      <span className="rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-primary">
                        {prog.badge}
                      </span>
                    ) : (
                      <span className="eyebrow">Program</span>
                    )}
                    <span className="flex items-center gap-1.5 text-[0.72rem] font-medium text-muted-foreground">
                      <Clock className="size-3.5 text-primary" aria-hidden /> {prog.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold leading-snug tracking-tight text-foreground">
                    {prog.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {prog.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border pt-4">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Includes
                    </p>
                    {prog.courses.map((c) => (
                      <span
                        key={c}
                        className="flex items-center gap-2 text-[0.8125rem] text-foreground/85"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-success" aria-hidden />
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-heading text-lg font-black tracking-tight text-foreground">
                      {prog.fees}
                    </span>
                    <Button asChild size="sm" className="btn-press h-9 gap-1.5 px-4">
                      <Link href={`/enquire?course=${encodeURIComponent(prog.title)}`}>
                        Enquire <ArrowRight aria-hidden className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Custom track"
              title="Want a personalised learning path?"
              sub="Talk to our counsellors — they'll design a learning plan around your career goals and schedule."
            />
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/enquire?subject=Custom Learning Path">
                  Talk to a Counsellor <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}