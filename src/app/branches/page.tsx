import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/section-header";
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
      {/* Hero with giant background text */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>BRANCHES</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow={`${branches.length} centres · ${cityCount} cities`}
              title="A FITA branch near you"
              sub="Pick the closest centre — classroom and live online batches run from every branch with the same curriculum and placement team."
            />
          </ScrollReveal>

          {/* Quick stats */}
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-primary">
                  <AnimatedCounter target={branches.length} suffix="+" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Branches</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-primary">
                  <AnimatedCounter target={cityCount} suffix="+" />
                </p>
                <p className="text-xs font-medium text-muted-foreground">Cities</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <BranchCard key={b.slug} branch={b} featured={b.featured} />
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
