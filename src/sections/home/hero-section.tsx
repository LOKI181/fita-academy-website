import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { FadeIn } from "@/components/motion";
import { SocialProof } from "@/components/shared/social-proof";
import { VisualFrame } from "@/components/shared/visual-frame";
import { HiringMarquee } from "@/components/shared/hiring-marquee";
import { courses } from "@/lib/content";

const heroStats = [
  { value: "120+", label: "Career courses" },
  { value: "10K+", label: "Students placed" },
  { value: "3000+", label: "Hiring partners" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient lighting */}
      <div className="aurora" aria-hidden />
      <div className="grid-lines" aria-hidden />
      <div className="hero-bg-text" aria-hidden>
        FITA
      </div>

      <div className="container-x relative z-10 pt-16 pb-14 sm:pt-20 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Copy column ─────────────────────────────── */}
          <div className="text-center lg:text-left">
            <FadeIn preset="fade-up" delay={0.05}>
              <div className="flex justify-center lg:justify-start">
                <SocialProof />
              </div>
            </FadeIn>

            <FadeIn preset="fade-up" delay={0.12}>
              <p className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Welcome to FITA Academy
              </p>
            </FadeIn>

            <FadeIn preset="fade-up" delay={0.2}>
              <h1 className="mt-4 font-heading text-[2.5rem] font-black leading-[0.95] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                We build
                <br />
                <span className="gradient-text">careers</span> in tech,
                <br />
                <span className="organic-underline">not just skills.</span>
              </h1>
            </FadeIn>

            <FadeIn preset="fade-up" delay={0.3}>
              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground lg:mx-0">
                Industry-led training with real production projects, expert
                trainers from top product teams, and placement support across
                10+ cities. Since 1999.
              </p>
            </FadeIn>

            <FadeIn preset="fade-up" delay={0.4}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <CourseSearch courses={courses} />
              </div>
            </FadeIn>

            <FadeIn preset="fade-up" delay={0.5}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="btn-press h-11 gap-2 px-6 text-[0.9rem] shadow-[0_14px_34px_-14px_rgba(29,99,237,0.85)]"
                >
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="btn-press h-11 gap-2 bg-card/70 px-6 text-[0.9rem] backdrop-blur"
                >
                  <Link href="/demo">
                    <PlayCircle aria-hidden className="size-4" />
                    Book a Free Demo
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Inline stat rail */}
            <FadeIn preset="fade-up" delay={0.6}>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 lg:max-w-lg">
                {heroStats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="stat-counter block font-heading text-2xl font-black tracking-tight text-foreground sm:text-[1.75rem]">
                        {s.value}
                      </span>
                      <span className="mt-0.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          {/* ── Visual column ───────────────────────────── */}
          <FadeIn preset="fade-up" delay={0.35}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <VisualFrame
                variant="hero"
                className="aspect-[4/5] w-full sm:aspect-[5/5]"
                label="FITA Academy classroom and project work"
              >
                <div className="space-y-3">
                  <span className="chip bg-white/12 text-white backdrop-blur">
                    <span className="inline-flex size-1.5 rounded-full bg-emerald-400" aria-hidden />
                    Live batches running
                  </span>
                  <p className="font-heading text-xl font-bold leading-snug text-white">
                    Real projects.
                    <br />
                    Real interviews.
                    <br />
                    Real offers.
                  </p>
                </div>
              </VisualFrame>

              {/* Floating credential card */}
              <div className="glass-card absolute -bottom-6 -left-4 w-[15rem] rounded-2xl p-4 sm:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--azure),var(--azure-deep))] font-heading text-sm font-black text-white">
                    4.8
                  </span>
                  <div>
                    <p className="text-[0.8rem] font-semibold leading-tight text-foreground">
                      Highest rated IT institute
                    </p>
                    <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
                      500+ Google reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating placement card */}
              <div className="glass-card absolute -right-3 top-8 hidden w-[13.5rem] rounded-2xl p-4 sm:block lg:-right-6">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Placement rate
                </p>
                <p className="mt-1 font-heading text-3xl font-black tracking-tight text-primary">
                  94%
                </p>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[94%] rounded-full bg-[linear-gradient(90deg,var(--azure),#6f9dff)]" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Hiring partner rail */}
      <HiringMarquee />
    </section>
  );
}