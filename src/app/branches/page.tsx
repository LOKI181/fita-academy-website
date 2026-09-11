import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { BranchCard } from "@/components/shared/branch-card";
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

      {/* Branch cards */}
      <section className="pb-20">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {branches.map((b) => (
                <BranchCard key={b.slug} branch={b} featured={b.featured} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}