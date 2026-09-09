import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { partnerLogos, partnerStats } from "@/lib/content";

export function PlacementProof() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Placement"
          title="Where FITA students go to work"
          sub="Our alumni work across product and service companies — here are the teams that keep hiring from FITA."
          className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:bg-white/10 [&_span]:text-white"
        />

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          aria-label="Hiring partners"
        >
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-heading text-sm font-semibold tracking-wide ring-1 ring-white/15"
            >
              <Building2 className="size-4" aria-hidden />
              {name}
            </span>
          ))}
          <span className="rounded-xl bg-white px-5 py-3 font-heading text-sm font-bold tracking-wide text-primary">
            + 90 more
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {partnerStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/10 p-5 text-center ring-1 ring-white/15"
            >
              <p className="font-heading text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/placement"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Explore the placement process <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}