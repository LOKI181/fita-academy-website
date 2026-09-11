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
        .filter(
          (c) =>
            c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
        )
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
        role="search"
        aria-label="Search courses"
        onSubmit={(e) => {
          e.preventDefault();
          submit(results[0]?.slug);
        }}
        className="group flex items-center gap-1.5 rounded-2xl border border-border bg-card/90 p-1.5 shadow-[var(--e3)] backdrop-blur-xl transition-shadow focus-within:border-primary/40 focus-within:shadow-[var(--glow-ring)]"
      >
        <Search
          className="ml-2.5 size-4.5 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search 120+ courses — Java, Python, Data Science…"
          aria-label="Search courses"
          className="h-10 border-0 bg-transparent text-[0.9rem] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" size="sm" className="btn-press h-9 shrink-0 gap-1.5 px-4">
          Search <ArrowRight aria-hidden className="size-3.5" />
        </Button>
      </form>

      {q && focused && results.length > 0 ? (
        <ul className="glass-card absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl p-1.5">
          {results.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onMouseDown={() => {
                  setQuery("");
                  submit(c.slug);
                }}
                className="flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-muted focus:bg-muted"
              >
                <span className="font-medium">
                  {c.title}
                  <span className="ml-2 text-xs font-normal capitalize text-muted-foreground">
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
        <div className="glass-card absolute inset-x-0 top-full z-20 mt-2 rounded-2xl px-4 py-3 text-sm text-muted-foreground">
          No matches — try &ldquo;Java&rdquo; or &ldquo;Data Science&rdquo;.
        </div>
      ) : null}
    </div>
  );
}