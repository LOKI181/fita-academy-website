import Link from "next/link";
import { ArrowRight, Clock, GraduationCap, MapPin, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StarRating } from "@/components/shared/star-rating";
import { getCategory } from "@/lib/content";
import type { Course } from "@/lib/types";

export function CourseCard({ course, tabIndex }: { course: Course; tabIndex?: number }) {
  const category = getCategory(course.category);
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-2 border-b border-border/60 p-5 pb-4">
        <div>
          <span className="text-xs font-medium text-muted-foreground">
            {category?.title ?? "Course"}
          </span>
          <h3 className="mt-0.5 font-heading text-lg font-bold leading-snug text-foreground">
            {course.title}
          </h3>
        </div>
        {course.badge ? <Badge>{(course.badge as string) ?? ""}</Badge> : null}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 p-5 pt-4">
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.blurb}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="size-3.5" aria-hidden /> {course.level}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" aria-hidden /> {course.mode.join(" · ")}
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-1.5">
            <StarRating rating={course.rating} size="size-3.5" />
            <span className="text-xs font-semibold text-foreground">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({course.reviews})</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="size-3.5" aria-hidden /> {course.students.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-border/60 pt-3">
          <div>
            <span className="text-[11px] uppercase tracking-wide text-muted-foreground">Course fee</span>
            <p className="font-heading text-lg font-bold text-foreground">{course.fees}</p>
          </div>
          <Button asChild size="sm">
            <Link href={`/course/${course.slug}`} tabIndex={tabIndex}>
              View Course <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-0" aria-hidden />
    </Card>
  );
}