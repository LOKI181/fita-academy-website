import type { Metadata } from "next";

import { CoursesExplorer } from "@/components/site/courses-explorer";
import { PageHero } from "@/components/shared/page-hero";
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
      <PageHero
        ghost="COURSES"
        eyebrow={`${courses.length}+ expert-led courses`}
        title="Find the course that gets you hired"
        sub="Search by course or topic, filter by career track and sort by what matters to you — duration, fees or level."
        stats={[
          {
            value: <AnimatedCounter target={courses.length} suffix="+" />,
            label: "Courses",
          },
          {
            value: <AnimatedCounter target={categories.length} suffix="+" />,
            label: "Categories",
          },
          {
            value: <AnimatedCounter target={10000} suffix="+" />,
            label: "Students trained",
          },
          { value: "8+", label: "Branches" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <CoursesExplorer courses={courses} />
        </div>
      </section>
    </>
  );
}