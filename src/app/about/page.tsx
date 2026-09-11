import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, TrendingUp, Users2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { branches, stats, reviews } from "@/lib/content";

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
    stat: "25+",
    statLabel: "Years",
    color: "text-blue-500",
  },
  {
    icon: Users2,
    title: "Students, not batches",
    text: "Small batches, individual doubt-clearing and career counselling — every learner gets attention.",
    stat: "10K+",
    statLabel: "Placed",
    color: "text-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Outcomes over certificates",
    text: "We measure success by interviews cleared and offers received, not classes attended.",
    stat: "94%",
    statLabel: "Rate",
    color: "text-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "One standard, every branch",
    text: "Same trainers, curriculum and placement team across all 8+ branch cities.",
    stat: "8+",
    statLabel: "Cities",
    color: "text-amber-500",
  },
];

const timeline = [
  { year: "1999", title: "Founded in Chennai", text: "Started with one centre, 12 students and a belief that IT careers should be accessible." },
  { year: "2010", title: "Expanded to 5 cities", text: "Coimbatore, Madurai, Trichy, Salem — same curriculum, same quality." },
  { year: "2018", title: "10,000th student placed", text: "Crossed the 10K placement milestone across all branches." },
  { year: "2024", title: "120+ courses, 8+ cities", text: "Full-stack, cloud, data science, AI/ML, digital marketing — and growing." },
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

      {/* Stats bar */}
      <ScrollReveal>
        <section className="border-y border-border bg-mist">
          <div className="container-x py-12">
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="stat-counter block font-heading text-4xl font-black tracking-[-0.03em] text-primary sm:text-5xl">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </ScrollReveal>

      {/* Four pillars — bento grid */}
      <section className="section-pad">
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
                <article key={p.title} className="card-premium surface group relative overflow-hidden p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                  <div className="mt-4 border-t border-border pt-4">
                    <span className={`font-heading text-2xl font-black ${p.color}`}>{p.stat}</span>
                    <span className="ml-1.5 text-xs text-muted-foreground">{p.statLabel}</span>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad border-y border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our journey"
              title="25 years of building careers"
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-12 space-y-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[1.25rem] top-10 h-full w-px bg-border" />
                  )}
                  {/* Year dot */}
                  <div className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-primary/20 bg-background font-heading text-xs font-bold text-primary">
                    {t.year.slice(2)}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading text-base font-bold text-foreground">
                      <span className="text-primary">{t.year}</span> — {t.title}
                    </h3>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured reviews */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What students say"
              title="Reviews from real placements"
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.slice(0, 3).map((r) => (
                <article key={r.name} className="card-premium surface p-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`size-4 ${i < r.rating ? "text-amber-400" : "text-muted-foreground/30"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground line-clamp-3">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role} · {r.course}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="hero-bg-text" aria-hidden style={{ color: "rgba(255,255,255,0.04)" }}>FITA</div>
        <div className="relative z-10 container-x py-16 text-center sm:py-20">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
              Ready to find your path?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/80">
              Meet us at one of {branches.length}+ branches across India. Free demo, free counselling, zero obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="btn-press h-11 gap-2 bg-white px-6 text-primary hover:bg-white/90">
                <Link href="/demo">
                  Book a free demo
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-press h-11 border-white/30 bg-white/10 px-6 text-white hover:bg-white/20">
                <Link href="/enquire">Talk to a counsellor</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
