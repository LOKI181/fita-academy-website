import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { FadeIn } from "@/components/motion";
import { FloatingTech } from "@/components/shared/floating-tech";
import { SocialProof } from "@/components/shared/social-proof";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { courses } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Giant Background Text */}
      <div className="hero-bg-text" aria-hidden>
        FITA
      </div>

      {/* Floating Tech Objects */}
      <FloatingTech />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-32 lg:px-8">
        <div>
          <FadeIn preset="fade-up" delay={0.1}>
            <SocialProof />
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.2}>
            <h1 className="mt-7 font-heading text-[2.75rem] font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Build your
              <br />
              next <span className="organic-underline text-primary">career</span>
            </h1>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.35}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Industry-focused training with real projects, expert trainers and
              placement support across 10+ cities.
            </p>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.5}>
            <div className="mt-7">
              <CourseSearch courses={courses} />
            </div>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.6}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="btn-press glow-primary-hover">
                <Link href="/courses">
                  Explore Courses <ArrowRight aria-hidden className="ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-press">
                <Link href="/demo">Book a Free Demo</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn preset="scale-in" delay={0.3} className="hidden lg:block">
          <div className="relative">
            {/* Glass Card with Stats */}
            <div className="liquid-glass clay rounded-3xl p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" aria-hidden />
                Chennai&apos;s most trusted IT institute
              </div>
              <p className="font-heading text-2xl font-bold leading-snug text-foreground">
                From non-IT backgrounds to{" "}
                <span className="text-primary">full-stack developers</span>,
                data analysts and cloud engineers.
              </p>

              {/* Animated Stat Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="clay rounded-2xl bg-background/80 p-5 text-center">
                  <p className="font-heading text-3xl font-black text-primary">
                    <AnimatedCounter target={10000} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Students placed
                  </p>
                </div>
                <div className="clay rounded-2xl bg-background/80 p-5 text-center">
                  <p className="font-heading text-3xl font-black text-primary">
                    <AnimatedCounter target={3000} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Hiring partners
                  </p>
                </div>
                <div className="clay rounded-2xl bg-background/80 p-5 text-center">
                  <p className="font-heading text-3xl font-black text-primary">
                    <AnimatedCounter target={120} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Career courses
                  </p>
                </div>
                <div className="clay rounded-2xl bg-background/80 p-5 text-center">
                  <p className="font-heading text-3xl font-black text-primary">
                    <AnimatedCounter target={25} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Years of trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
