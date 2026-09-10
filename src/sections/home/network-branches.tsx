"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

import { branches } from "@/lib/content";

const cities = [
  { name: "Chennai", x: "55%", y: "45%", branches: 4 },
  { name: "Coimbatore", x: "30%", y: "55%", branches: 1 },
  { name: "Madurai", x: "40%", y: "75%", branches: 1 },
  { name: "Trichy", x: "45%", y: "35%", branches: 1 },
  { name: "Salem", x: "35%", y: "40%", branches: 1 },
  { name: "Erode", x: "28%", y: "45%", branches: 1 },
  { name: "Pondicherry", x: "60%", y: "60%", branches: 1 },
  { name: "Tiruppur", x: "25%", y: "50%", branches: 1 },
  { name: "Bangalore", x: "40%", y: "20%", branches: 1 },
];

export function NetworkBranches() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedBranches = selected
    ? branches.filter((b) => b.city === selected)
    : [];

  return (
    <section className="section-editorial border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            Locations
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            FITA <span className="text-primary">across India</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Choose your learning location. Same quality, every branch.
          </p>
        </div>

        {/* Network visualization */}
        <div className="relative mx-auto mt-12 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl border border-border bg-background">
          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            {/* Chennai to others */}
            <line x1="55%" y1="45%" x2="30%" y2="55%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="55%" y1="45%" x2="40%" y2="75%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="55%" y1="45%" x2="45%" y2="35%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="55%" y1="45%" x2="35%" y2="40%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="55%" y1="45%" x2="60%" y2="60%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="55%" y1="45%" x2="40%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
            <line x1="30%" y1="55%" x2="25%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
          </svg>

          {/* City nodes */}
          {cities.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelected(selected === city.name ? null : city.name)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                selected === city.name
                  ? "scale-125 z-10"
                  : "hover:scale-110"
              }`}
              style={{ left: city.x, top: city.y }}
              aria-label={`View branches in ${city.name}`}
            >
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-md transition-colors ${
                  selected === city.name
                    ? "bg-primary text-white"
                    : "bg-background text-foreground border border-border hover:border-primary"
                }`}
              >
                <MapPin className="size-3" aria-hidden />
                {city.name}
                {city.branches > 1 && (
                  <span className="ml-0.5 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    {city.branches}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected city branches */}
        {selected && selectedBranches.length > 0 && (
          <div className="mx-auto mt-8 max-w-3xl">
            <h3 className="font-heading text-xl font-bold text-foreground text-center">
              {selected} Branches
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {selectedBranches.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="card-premium flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-all"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">
                      {b.area}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                      {b.address}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      View Branch <ArrowRight className="size-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
