import type { Metadata } from "next";
import { Star } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { ReviewCard } from "@/components/shared/review-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { reviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Reviews",
  description:
    "Real reviews from FITA Academy students and alumni — 4.8/5 average from 500+ Google reviews across 8 branches.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const breakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return { star, count, pct: Math.round((count / reviews.length) * 100) };
  });

  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Verified student reviews"
            title="What 10,000+ placed students say"
          />
          <div className="mt-8 inline-flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-background p-6">
            <div className="text-center">
              <p className="font-heading text-5xl font-bold text-foreground">{avg.toFixed(1)}</p>
              <div className="mt-2 flex items-center justify-center gap-1">
                <Star className="size-5 fill-current text-primary" aria-hidden />
                <Star className="size-5 fill-current text-primary" aria-hidden />
                <Star className="size-5 fill-current text-primary" aria-hidden />
                <Star className="size-5 fill-current text-primary" aria-hidden />
                <Star className="size-5 fill-current text-primary/60" aria-hidden />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">500+ Google reviews</p>
            </div>
            <div className="min-w-[220px] flex-1 space-y-1.5">
              {breakdown.map((b) => (
                <div key={b.star} className="flex items-center gap-3 text-xs">
                  <span className="w-8 font-medium text-muted-foreground">{b.star} star</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-muted-foreground">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Studied with FITA recently?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Your review helps the next student choose the right institute. It takes two
            minutes.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/enquire?subject=Write a review">
              Share your review <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}