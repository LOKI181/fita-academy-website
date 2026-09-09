"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "@/components/shared/course-card";
import { categories } from "@/lib/content";
import type { Course } from "@/lib/types";

type SortKey = "popular" | "rating" | "duration";

export function CoursesExplorer({
  courses,
  initialQuery = "",
  initialCategory = "",
}: {
  courses: Course[];
  initialQuery?: string;
  initialCategory?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("popular");
  const [appliedQuery, setAppliedQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = appliedQuery.trim().toLowerCase();
    let list = courses.filter((c) => {
      const matchesQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.topics.some((t) => t.toLowerCase().includes(q));
      const matchesCat = !category || c.category === category;
      return matchesQ && matchesCat;
    });
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "duration")
      list = [...list].sort((a, b) => a.hours - b.hours);
    return list;
  }, [courses, appliedQuery, category, sort]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedQuery(query);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm lg:flex-row lg:items-end">
        <form onSubmit={submitSearch} className="flex flex-1 items-center gap-2">
          <Search className="size-4 text-muted-foreground" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by course or topic…"
            className="border-0 bg-transparent shadow-none focus-visible:ring-0"
            aria-label="Search courses"
          />
        </form>
        <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:items-center">
          <Select value={category || "all"} onValueChange={(v) => setCategory(v === "all" ? "" : v)}>
            <SelectTrigger className="w-full lg:w-[220px]" aria-label="Filter by category">
              <SlidersHorizontal className="size-4 text-muted-foreground" aria-hidden />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger className="w-full lg:w-[180px]" aria-label="Sort courses">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most popular</SelectItem>
              <SelectItem value="rating">Top rated</SelectItem>
              <SelectItem value="duration">Short to long</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" role="status">
        Showing <span className="font-semibold text-foreground">{results.length}</span> of{" "}
        {courses.length} courses
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setAppliedQuery("");
            setCategory("");
            router.replace("/courses");
          }}
          className="ml-3 font-medium text-primary hover:underline"
        >
          Clear filters
        </button>
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-muted/40 p-12 text-center">
          <p className="font-heading text-lg font-semibold text-foreground">
            No courses match your search
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a broader keyword or clear the filters. 120+ courses are one call away.
          </p>
        </div>
      )}
    </div>
  );
}