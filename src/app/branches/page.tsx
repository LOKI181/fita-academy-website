import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Branches",
  description:
    "Visit FITA Academy's branches across Chennai, Coimbatore, Madurai, Trichy, Salem, Erode, Pondicherry, Tiruppur and Bangalore. Same trainers, same placement team.",
  alternates: { canonical: "/branches" },
};

const cityCount = new Set(branches.map((b) => b.city)).size;

export default function BranchesPage() {
  return (
    <>
      <PageHero
        ghost="BRANCHES"
        eyebrow={`${branches.length} centres · ${cityCount} cities`}
        title="A FITA branch near you"
        sub="Pick the closest centre — classroom and live online batches run from every branch with the same curriculum and placement team."
        stats={[
          {
            value: <AnimatedCounter target={branches.length} suffix="+" />,
            label: "Branches",
          },
          {
            value: <AnimatedCounter target={cityCount} suffix="+" />,
            label: "Cities",
          },
          { value: "1999", label: "Since" },
          { value: "1:1", label: "Counselling" },
        ]}
      />

      {/* Map */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--e3)]">
              <iframe
                title="FITA Academy branches across India"
                src="https://maps.google.com/maps?q=FITA+Academy+Chennai&t=&z=11&output=embed"
                className="h-72 w-full sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Branch cards — premium grid */}
      <section className="pb-20">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {branches.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className={`card-premium group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--e4)] ${
                    b.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {b.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Featured
                    </span>
                  )}

                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold tracking-tight text-foreground">
                        {b.area}
                      </h3>
                      <p className="text-sm text-muted-foreground">{b.city}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted-foreground line-clamp-2">
                    {b.address}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Phone className="size-3 text-primary" />
                      {b.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3 text-primary" />
                      {b.hours}
                    </span>
                  </div>

                  {b.topCourses?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.topCourses.slice(0, 3).map((c) => (
                        <span key={c} className="rounded-full bg-muted px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View details <ArrowRight className="size-3" />
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
