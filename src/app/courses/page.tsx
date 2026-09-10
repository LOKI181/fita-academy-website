import type { Metadata } from "next";

import { CoursesExplorer } from "@/components/site/courses-explorer";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { courses, categories } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse all 120+ FITA Academy courses — Java Full Stack, Python, Data Science, Cloud & DevOps, Testing, UI/UX, Digital Marketing and more.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero with giant background text */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>COURSES</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow={`${courses.length}+ expert-led courses`}
              title="Find the course that gets you hired"
              sub="Search by course or topic, filter by career track and sort by what matters to you."
            />
          </ScrollReveal>

          {/* Quick stats */}
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-primary">
                  <AnimatedCounter target={courses.length} suffix="+" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Courses</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-primary">
                  <AnimatedCounter target={categories.length} suffix="+" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Categories</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-primary">
                  <AnimatedCounter target={10000} suffix="+" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Students trained</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CoursesExplorer courses={courses} />
      </section>
    </>
  );
}
