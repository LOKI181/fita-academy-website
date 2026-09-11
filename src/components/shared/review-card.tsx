import { Quote } from "lucide-react";

import { StarRating } from "@/components/shared/star-rating";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <figure className="surface flex h-full flex-col p-6">
      <div className="flex items-center justify-between">
        <StarRating rating={review.rating} />
        <Quote className="size-6 text-primary/25" aria-hidden />
      </div>

      <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-foreground/85">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--azure), var(--azure-deep))" }}
          aria-hidden
        >
          {initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[0.875rem] font-semibold text-foreground">
            {review.name}
          </span>
          <span className="block truncate text-[0.75rem] text-muted-foreground">
            {review.role} · {review.branch}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}