"use client";

const companies = [
  { name: "Infosys", style: "font-bold tracking-tight" },
  { name: "TCS", style: "font-black tracking-widest uppercase" },
  { name: "Wipro", style: "font-bold tracking-tight" },
  { name: "Accenture", style: "font-semibold tracking-wide" },
  { name: "Cognizant", style: "font-bold tracking-tight" },
  { name: "CTS", style: "font-black tracking-widest uppercase" },
  { name: "Zoho", style: "font-bold tracking-tight text-primary" },
  { name: "HCL", style: "font-black tracking-widest uppercase" },
];

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

        <div className="flex items-center gap-16 animate-marquee">
          {allLogos.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              className={`font-heading text-xl ${company.style} text-foreground/60 hover:text-foreground whitespace-nowrap shrink-0 transition-colors cursor-default select-none`}
            >
              {company.name}
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
