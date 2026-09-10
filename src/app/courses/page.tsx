import type { Metadata } from "next";

import { CoursesExplorer } from "@/components/site/courses-explorer";
import { SectionHeader } from "@/components/shared/section-header";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse all 120+ FITA Academy courses — Java Full Stack, Python, Data Science, Cloud & DevOps, Testing, UI/UX, Digital Marketing and more.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow={`${courses.length}+ expert-led courses`}
            title="Find the course that gets you hired"
            sub="Search by course or topic, filter by career track and sort by what matters to you."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CoursesExplorer courses={courses} />
      </section>
    </>
  );
}