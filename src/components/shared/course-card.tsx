import Link from "next/link";
import { ArrowUpRight, Clock, Layers, Signal } from "lucide-react";

import { getCategory } from "@/lib/content";
import type { Course } from "@/lib/types";

export function CourseCard({ course, tabIndex }: { course: Course; tabIndex?: number }) {
  const category = getCategory(course.category);

  return (
    <article className="surface group relative flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="eyebrow">{category?.short ?? "Course"}</span>
        {course.badge ? (
          <span className="rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-primary">
            {course.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 font-heading text-lg font-bold leading-snug tracking-tight text-foreground">
        <Link
          href={`/course/${course.slug}`}
          tabIndex={tabIndex}
          className="transition-colors hover:text-primary"
        >
          {course.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
        {course.topics.slice(0, 4).join(" · ")}
      </p>

      <dl className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-medium text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Duration</dt>
          <Clock className="size-3.5 text-primary" aria-hidden />
          <dd>{course.duration}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Mode</dt>
          <Layers className="size-3.5 text-primary" aria-hidden />
          <dd>{course.mode.join(" / ")}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Level</dt>
          <Signal className="size-3.5 text-primary" aria-hidden />
          <dd>{course.level}</dd>
        </div>
      </dl>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-heading text-lg font-black tracking-tight text-foreground">
          {course.fees}
        </span>
        <Link
          href={`/course/${course.slug}`}
          tabIndex={tabIndex}
          className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-primary"
        >
          View course
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}