import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, TrendingUp, Users2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VisualFrame } from "@/components/shared/visual-frame";
import { branches, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About FITA Academy",
  description:
    "FITA Academy (Focus'd IT Academy) — 25+ years, 120+ courses, 10,000+ students placed across 8+ cities. Learn how we train differently.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Landmark,
    title: "Since 1999",
    text: "25+ years of continuous training — we've seen every technology wave and stayed ahead of it.",
  },
  {
    icon: Users2,
    title: "Students, not batches",
    text: "Small batches, individual doubt-clearing and career counselling — every learner gets attention.",
  },
  {
    icon: TrendingUp,
    title: "Outcomes over certificates",
    text: "We measure success by interviews cleared and offers received, not classes attended.",
  },
  {
    icon: ShieldCheck,
    title: "One standard, every branch",
    text: "Same trainers, curriculum and placement team across all 8+ branch cities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        ghost="ABOUT"
        eyebrow="About FITA"
        title={
          <>
            Focus&apos;d IT Academy — and <span className="gradient-text">you</span> are the
            focus
          </>
        }
        sub="FITA Academy started in 1999 with one belief: IT careers should be accessible to anyone willing to learn."
      />

      {/* Story + stats */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                <p>
                  We are an{" "}
                  <strong className="font-semibold text-foreground">
                    offline-first, outcome-obsessed
                  </strong>{" "}
                  training institute. Most of our students arrive with no coding background, a
                  full-time job or studies, and a lot of doubt. They leave with a project
                  portfolio, an interview-ready resume and an offer.
                </p>
                <p>
                  That&apos;s why our courses are structured in modules you can actually follow —
                  taught by engineers who use these exact skills every day, in classroom and live
                  online formats.
                </p>
                <p>
                  We don&apos;t claim magic or guarantees. We run a system — fundamentals,
                  projects, mock interviews, referrals — and the system works when you show up.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <VisualFrame
                variant="orbit"
                className="aspect-[4/3] w-full"
                label="FITA Academy training centre"
              >
                <p className="max-w-[16rem] font-heading text-lg font-bold leading-snug text-white">
                  Classroom + live online. Same trainers, same outcome.
                </p>
              </VisualFrame>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card p-7 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="stat-counter block font-heading text-3xl font-black tracking-[-0.03em] text-primary sm:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad border-y border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What we stand for"
              title="Four pillars of FITA"
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => (
                <article key={p.title} className="surface flex h-full flex-col p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Next step"
              title={`Ready to find your path? Meet us at one of ${branches.length} branches.`}
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/demo">
                  Book a free demo
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-press h-11 bg-card px-6"
              >
                <Link href="/enquire">Talk to a counsellor</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}