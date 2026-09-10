"use client";

import { useState } from "react";

const companies = [
  { name: "Infosys", domain: "infosys.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "HCL", domain: "hcltech.com" },
  { name: "Oracle", domain: "oracle.com" },
];

function LogoImage({ company }: { company: { name: string; domain: string } }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex items-center justify-center rounded-lg bg-muted px-4 py-2 text-xs font-bold text-muted-foreground">
        {company.name}
      </span>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${company.domain}`}
      alt={`${company.name} logo`}
      className={`h-8 w-auto object-contain transition-opacity ${loaded ? "opacity-60 hover:opacity-100" : "opacity-0"}`}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}

export function CompanyMarquee() {
  const allLogos = [...companies, ...companies];

  return (
    <section className="border-y border-border bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Trusted by leading companies
        </p>
      </div>

      <div className="relative pb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/40 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-12 animate-marquee">
          {allLogos.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              className="shrink-0 flex items-center"
            >
              <LogoImage company={company} />
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
