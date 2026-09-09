import Link from "next/link";
import { MapPin, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { FadeIn } from "@/components/motion";
import { courses, findFeaturedBranches } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <FadeIn preset="fade-up" delay={0.1}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" aria-hidden />
              Chennai&apos;s most trusted IT training institute
            </span>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.2}>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build a career IT companies{" "}
              <span className="text-primary">actually hire</span>
            </h1>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.35}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              120+ industry-aligned courses in classroom &amp; live online
              modes — with real projects, expert trainers and 10,000+ students
              placed since 1999.
            </p>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.5}>
            <div className="mt-7">
              <CourseSearch courses={courses} />
            </div>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.6}>
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-success" aria-hidden /> 100%
                placement assistance
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" aria-hidden />{" "}
                {findFeaturedBranches().length}+ branches
              </li>
              <li className="flex items-center gap-1.5">
                <Users className="size-4 text-primary" aria-hidden /> 10,000+
                students trained
              </li>
              <li className="flex items-center gap-1.5">
                <Star className="size-4 fill-current text-primary" aria-hidden />{" "}
                4.8/5 rated on Google
              </li>
            </ul>
          </FadeIn>

          <FadeIn preset="fade-up" delay={0.7}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/demo">Book a Free Demo</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn preset="scale-in" delay={0.3} className="hidden lg:block">
          <div
            className="relative rounded-3xl border border-border bg-gradient-to-br from-accent via-background to-background p-8 sm:p-10"
            aria-hidden
          >
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <MapPin className="size-4" /> {findFeaturedBranches().length}{" "}
              cities, one standard
            </div>
            <p className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
              From non-IT backgrounds to full-stack developers, data analysts and
              cloud engineers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="font-heading text-3xl font-bold text-primary">
                  10k+
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Students placed
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="font-heading text-3xl font-bold text-primary">
                  100+
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Hiring partners
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="font-heading text-3xl font-bold text-primary">
                  120+
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Career courses
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="font-heading text-3xl font-bold text-primary">
                  25+
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  Years of trust
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}