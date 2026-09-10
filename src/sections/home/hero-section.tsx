import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-background">
      {/* Gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <FadeIn preset="fade-up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            IT Training &amp; Placement Institute
          </div>
        </FadeIn>

        <FadeIn preset="fade-up" delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            Learn. Build.{" "}
            <span className="text-primary">Get Hired.</span>
          </h1>
        </FadeIn>

        <FadeIn preset="fade-up" delay={0.3}>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Industry-focused IT training with real projects, expert trainers and
            placement support across 10+ cities in India.
          </p>
        </FadeIn>

        <FadeIn preset="fade-up" delay={0.4}>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.03] transition-all"
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:border-primary text-white hover:text-primary bg-secondary/50 hover:bg-secondary/80 rounded-full font-bold transition-all"
            >
              <Link href="/enquire">
                Talk to a Counsellor <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn preset="fade-up" delay={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-black text-primary">
                <AnimatedCounter target={10000} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground">Students placed</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-black text-primary">
                <AnimatedCounter target={3000} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground">Hiring partners</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-black text-primary">
                <AnimatedCounter target={120} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground">Career courses</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
