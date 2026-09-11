import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { FadeIn } from "@/components/motion";
import { SocialProof } from "@/components/shared/social-proof";
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
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn preset="fade-up" delay={0.05}>
            <div className="flex justify-center">
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
            <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Industry-led training with real production projects, expert
              trainers from top product teams, and placement support across
              10+ cities. Since 1999.
            </p>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.4}>
            <div className="mt-8 flex justify-center">
              <CourseSearch courses={courses} />
            </div>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.5}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {heroStats.map((s) => (
                <div key={s.label} className="text-center">
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
      </div>

      {/* Hiring partner rail */}
      <HiringMarquee />
    </section>
  );
}
