import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ReviewCard } from "@/components/shared/review-card";
import { reviews } from "@/lib/content";

export function ReviewsPreview() {
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Student reviews"
          title="10,000+ careers started with a review like yours"
          sub="Real reviews from students, verified through our placement records."
        />
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
            <span className="flex items-center gap-1 font-heading text-lg font-bold text-foreground">
              {avg.toFixed(1)}
              <Star className="size-4 fill-current text-primary" aria-hidden />
            </span>
            <span className="text-muted-foreground">average · 500+ Google reviews</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/reviews">
              Read all reviews <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}