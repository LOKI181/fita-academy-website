import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Users2, TrendingUp, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
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
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="About FITA"
            title="Focus'd IT Academy — and you are the focus"
            sub="FITA Academy started in 1999 with one belief: IT careers should be accessible to anyone willing to learn. 25 years, 120+ courses and 10,000+ placements later, that hasn't changed."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              We are an <strong className="text-foreground">offline-first, outcome-obsessed</strong>{" "}
              training institute. Most of our students arrive with no coding background, a full-
              time job or studies, and a lot of doubt. They leave with a project portfolio, an
              interview-ready resume and an offer.
            </p>
            <p>
              That&apos;s why our courses are structured in modules you can actually follow —
              taught by engineers who use these exact skills every day, in classroom and live
              online formats.
            </p>
            <p>
              We don&apos;t claim magic or guarantees. We run a system — fundamentals, projects,
              mock interviews, referrals — and the system works when you show up.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-background p-6 text-center">
                <p className="font-heading text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we stand for" title="Four pillars of FITA" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-background p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          align="left"
          eyebrow="Next step"
          title={`Ready to find your path? Meet us at one of ${branches.length} branches.`}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/demo">
              Book a free demo <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/enquire">Talk to a counsellor</Link>
          </Button>
        </div>
      </section>
    </>
  );
}