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
    <section className="section-editorial mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* Left: Story */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            Success Story
          </span>
          <div className="mt-6">
            <Quote className="size-10 text-primary/20" aria-hidden />
            <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-4 flex items-center gap-4 lg:mt-8">
            <div>
              <p className="font-heading text-lg font-bold text-foreground">{story.name}</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{story.previousRole}</span>
                <ArrowRight className="size-3" aria-hidden />
                <span className="font-medium text-success">{story.placedRole}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building2 className="size-3.5" aria-hidden /> {story.company}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
              {story.course}
            </span>
          </div>
        </div>

        {/* Right: Navigation */}
        <div className="flex flex-col items-center gap-8">
          {/* Step visualization */}
          <div className="relative flex flex-col items-center gap-3">
            {successStories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  i === current
                    ? "text-primary font-bold"
                    : "text-muted-foreground/40 hover:text-muted-foreground"
                }`}
                aria-label={`View story ${i + 1}`}
              >
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    i === current
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="hidden text-sm sm:inline">{successStories[i].name}</span>
              </button>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="btn-press"
              aria-label="Previous story"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="btn-press"
              aria-label="Next story"
            >
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
