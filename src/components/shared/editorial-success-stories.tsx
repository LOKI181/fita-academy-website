"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Building2, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { successStories } from "@/lib/content";

export function EditorialSuccessStories() {
  const [current, setCurrent] = useState(0);
  const story = successStories[current];

  const next = () => setCurrent((c) => (c + 1) % successStories.length);
  const prev = () => setCurrent((c) => (c - 1 + successStories.length) % successStories.length);

  return (
    <section className="section-editorial mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: Story */}
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            Success Story
          </span>
          <div className="mt-4">
            <Quote className="size-8 text-primary/20 sm:size-10" aria-hidden />
            <blockquote className="mt-3 font-heading text-lg font-bold leading-snug text-foreground sm:text-2xl lg:mt-4 lg:text-3xl">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-3 flex items-center gap-3 lg:mt-6">
            <div>
              <p className="font-heading text-base font-bold text-foreground sm:text-lg">{story.name}</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm sm:gap-2 text-muted-foreground">
                <span className="font-medium text-foreground">{story.previousRole}</span>
                <ArrowRight className="size-3" aria-hidden />
                <span className="font-medium text-success">{story.placedRole}</span>
              </div>
              <p className="mt-1 flex items-center gap-1 text-xs sm:text-sm sm:gap-1.5 text-muted-foreground">
                <Building2 className="size-3" aria-hidden /> {story.company}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <span className="inline-flex rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground sm:px-2.5 sm:text-[11px]">
              {story.course}
            </span>
          </div>
        </div>

        {/* Right: Navigation — compact on mobile */}
        <div className="flex shrink-0 flex-row items-center gap-4 lg:flex-col lg:items-center lg:gap-8">
          {/* Names list — horizontal on mobile, vertical on desktop */}
          <div className="flex flex-row flex-wrap items-center gap-2 lg:flex-col lg:items-center lg:gap-3">
            {successStories.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  i === current
                    ? "text-primary font-bold"
                    : "text-muted-foreground/40 hover:text-muted-foreground"
                }`}
                aria-label={`View story ${i + 1}`}
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-full text-[10px] font-bold transition-colors sm:size-8 sm:text-xs ${
                    i === current
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm">{s.name}</span>
              </button>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="flex gap-2 lg:gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="btn-press size-8 sm:size-9"
              aria-label="Previous story"
            >
              <ArrowLeft className="size-3.5 sm:size-4" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="btn-press size-8 sm:size-9"
              aria-label="Next story"
            >
              <ArrowRight className="size-3.5 sm:size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
