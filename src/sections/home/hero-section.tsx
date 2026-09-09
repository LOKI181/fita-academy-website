import Link from "next/link";
import { BadgeCheck, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseSearch } from "@/components/site/course-search";
import { courses, findFeaturedBranches, partnerLogos } from "@/lib/content";

export function HeroSection() {
  const featuredCount = partnerLogos.length;
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" aria-hidden />
            Chennai&apos;s most trusted IT training institute
          </span>
          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build a career IT companies <span className="text-primary">actually hire</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            120+ industry-aligned courses in classroom & live online modes — with
            real projects, expert trainers and 10,000+ students placed since 1999.
          </p>

          <div className="mt-7">
            <CourseSearch courses={courses} />
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-success" aria-hidden /> 25+ years
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-success" aria-hidden /> 10k+ students placed
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-success" aria-hidden /> {featuredCount}+ hiring partners
            </li>
            <li className="flex items-center gap-1.5">
              <Star className="size-4 fill-current text-primary" aria-hidden /> 4.8/5 rated on Google
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demo">Book a Free Demo</Link>
            </Button>
          </div>
        </div>

        <div
          className="relative rounded-3xl border border-border bg-gradient-to-br from-accent via-background to-background p-8 sm:p-10"
          aria-hidden
        >
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="size-4" /> {findFeaturedBranches().length} cities, one standard
          </div>
          <p className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
            From non-IT backgrounds to full-stack developers, data analysts and
            cloud engineers.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-heading text-3xl font-bold text-primary">10k+</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Students placed</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-heading text-3xl font-bold text-primary">100+</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Hiring partners</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-heading text-3xl font-bold text-primary">4.8/5</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Google rating</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="font-heading text-3xl font-bold text-primary">120+</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Expert-led courses</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-background/70 p-4 ring-1 ring-border">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <ShieldCheck className="size-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Placement support</span> — resume,
              mock interviews, and direct references — included with every course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}