import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { CourseCard } from "@/components/shared/course-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { courses } from "@/lib/content";

export function PopularCourses() {
  return (
    <section className="section-editorial border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              eyebrow="Most popular"
              title="Courses driving the most placements"
              sub="Chosen by 10,000+ students and refreshed every batch with the latest industry skills."
            />
            <Button asChild variant="outline" className="shrink-0 self-start md:self-auto btn-press">
              <Link href="/courses">
                View all 120+ courses <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:mt-8 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
