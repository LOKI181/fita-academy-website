"use client";

import { Building2 } from "lucide-react";
import { partnerLogos } from "@/lib/content";

export function CompanyMarquee() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-y border-border bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Trusted by leading companies
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/40 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-8 animate-marquee">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide whitespace-nowrap shrink-0"
            >
              <Building2 className="size-4 text-primary" aria-hidden />
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
