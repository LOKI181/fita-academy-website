"use client";

import { partnerLogos } from "@/lib/content";

export function CompanyMarquee() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-y border-border bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Trusted by leading companies
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative pb-6">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/40 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-12 animate-marquee">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground/70 hover:text-primary whitespace-nowrap shrink-0 transition-colors cursor-default"
            >
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
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
