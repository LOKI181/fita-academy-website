import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { ReviewCard } from "@/components/shared/review-card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
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
      <PageHero
        ghost="REVIEWS"
        eyebrow="Verified student reviews"
        title="What 10,000+ placed students say"
        sub="Every review below comes from a student who finished a batch at FITA. No paid placements, no edited quotes."
      >
        <ScrollReveal>
          <div className="card-premium glass-card flex flex-wrap items-center gap-8 p-6">
            <div className="text-center">
              <p className="font-heading text-5xl font-black tracking-[-0.03em] text-foreground">
                <AnimatedCounter target={Math.round(avg * 10) / 10} />
              </p>
              <div className="mt-2 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < Math.round(avg)
                        ? "fill-current text-amber-400"
                        : "text-muted-foreground/30"
                    }`}
                    aria-hidden
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">500+ Google reviews</p>
            </div>
            <div className="min-w-[220px] flex-1 space-y-2">
              {breakdown.map((b) => (
                <div key={b.star} className="flex items-center gap-3 text-xs">
                  <span className="w-10 font-medium text-muted-foreground">{b.star} star</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-muted-foreground">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </PageHero>

      {/* Featured review — editorial quote */}
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <ScrollReveal>
            <div className="card-premium glass-card relative mx-auto max-w-3xl overflow-hidden p-10 text-center">
              <Quote className="mx-auto size-10 text-primary/20" aria-hidden />
              <blockquote className="mt-4 font-heading text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{reviews[0].text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  {reviews[0].name.charAt(0)}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{reviews[0].name}</p>
                  <p className="text-xs text-muted-foreground">{reviews[0].role} · {reviews[0].course}</p>
                </div>
                <div className="ml-3 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`size-3.5 ${i < reviews[0].rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All reviews grid */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <ReviewCard key={r.name} review={r} />
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={100}>
            <div className="card-premium glass-card mt-14 overflow-hidden p-10 text-center">
              <h2 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Studied with FITA recently?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                Your review helps the next student choose the right institute. It takes two
                minutes.
              </p>
              <Button asChild size="lg" className="btn-press mt-7 h-11 gap-2 px-6">
                <Link href="/enquire">
                  Share your review
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
