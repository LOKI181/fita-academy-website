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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
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

        {/* Google Maps iframe */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="FITA Academy branches across India"
            src="https://maps.google.com/maps?q=FITA+Academy+Chennai&t=&z=11&output=embed"
            className="h-64 w-full sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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
