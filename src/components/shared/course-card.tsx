import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getCategory } from "@/lib/content";
import type { Course } from "@/lib/types";

export function CourseCard({ course, tabIndex }: { course: Course; tabIndex?: number }) {
  const category = getCategory(course.category);
  return (
    <Card className="card-premium flex h-full flex-col overflow-hidden border-border/60">
      <CardContent className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-medium text-primary">
            {category?.short ?? "Course"}
          </span>
          {course.badge ? <Badge variant="secondary">{course.badge}</Badge> : null}
        </div>
        <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {course.topics.slice(0, 3).join(" • ")}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{course.duration}</span>
          <span className="text-border">|</span>
          <span>{course.mode.join(" / ")}</span>
          <span className="text-border">|</span>
          <span>{course.level}</span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
          <span className="font-heading text-lg font-bold text-foreground">{course.fees}</span>
          <Link
            href={`/course/${course.slug}`}
            tabIndex={tabIndex}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View Course <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
