"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CourseSearch({
  courses,
}: {
  courses: { slug: string; title: string; category: string }[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const q = query.trim().toLowerCase();
  const results = q
    ? courses
        .filter((c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
        .slice(0, 6)
    : [];

  const submit = (slug?: string) => {
    if (slug) {
      router.push(`/course/${slug}`);
    } else if (q) {
      router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      <form
        className="flex items-center gap-2 rounded-2xl border border-border bg-background p-2 shadow-lg shadow-black/5"
        onSubmit={(e) => {
          e.preventDefault();
          submit(results[0]?.slug);
        }}
        role="search"
        aria-label="Search courses"
      >
        <Search className="ml-2 size-5 text-muted-foreground" aria-hidden />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search 120+ courses — Java, Python, Data Science…"
          className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          aria-label="Search courses"
        />
        <Button type="submit" size="sm" className="shrink-0">
          Search <ArrowRight aria-hidden />
        </Button>
      </form>

      {q && focused && results.length > 0 ? (
        <ul className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-xl">
          {results.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onMouseDown={() => {
                  setQuery("");
                  submit(c.slug);
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm hover:bg-muted focus:bg-muted"
              >
                <span>
                  {c.title}
                  <span className="ml-2 text-xs capitalize text-muted-foreground">
                    {c.category.replace("-", " ")}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {q && focused && results.length === 0 ? (
        <div className="absolute inset-x-0 top-full z-20 mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground shadow-xl">
          No matches — try &ldquo;Java&rdquo; or &ldquo;Data Science&rdquo;.
        </div>
      ) : null}
    </div>
  );
}