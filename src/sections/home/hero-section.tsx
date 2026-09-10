import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { FadeIn } from "@/components/motion";
import { FloatingTech } from "@/components/shared/floating-tech";
import { SocialProof } from "@/components/shared/social-proof";
import { courses } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Giant Background Text */}
      <div className="hero-bg-text" aria-hidden>
        FITA
      </div>

      {/* Floating Tech Objects */}
      <FloatingTech />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32 lg:px-8">
        {/* Centered content */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn preset="fade-up" delay={0.1}>
            <div className="flex justify-center">
              <SocialProof />
            </div>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.2}>
            <h1 className="mt-7 font-heading text-[2.75rem] font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Build your
              <br />
              next <span className="organic-underline text-primary">career</span>
            </h1>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.35}>
            <p className="mt-5 max-w-xl mx-auto text-lg leading-relaxed text-muted-foreground">
              Industry-focused training with real projects, expert trainers and
              placement support across 10+ cities.
            </p>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.5}>
            <div className="mt-7 flex justify-center">
              <CourseSearch courses={courses} />
            </div>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.6}>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
}
