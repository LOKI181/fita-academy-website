"use client";

function Logo({ name, bg, textColor, fontWeight, letterSpacing }: {
  name: string;
  bg: string;
  textColor?: string;
  fontWeight?: string;
  letterSpacing?: string;
}) {
  return (
    <svg viewBox="0 0 140 50" className="h-10 w-auto" aria-label={`${name} logo`}>
      <rect width="140" height="50" rx="8" fill={bg} />
      <text
        x="70"
        y="30"
        textAnchor="middle"
        fill={textColor || "white"}
        fontFamily="system-ui, sans-serif"
        fontWeight={fontWeight || "700"}
        fontSize="15"
        letterSpacing={letterSpacing || "0"}
      >
        {name}
      </text>
    </svg>
  );
}

const companies = [
  { name: "Infosys", bg: "#007CC3" },
  { name: "TCS", bg: "#1F3F7A", letterSpacing: "3" },
  { name: "Wipro", bg: "#1B365D" },
  { name: "Accenture", bg: "#A100FF", letterSpacing: "1" },
  { name: "Cognizant", bg: "#0033A0", letterSpacing: "0.5" },
  { name: "Zoho", bg: "#E42527", fontWeight: "800" },
  { name: "HCL", bg: "#0057B8", letterSpacing: "3" },
  { name: "Oracle", bg: "#C74634" },
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

        <div className="flex items-center gap-10 animate-marquee">
          {allLogos.map((company, i) => (
            <span
              key={`${company.name}-${i}`}
              className="shrink-0 opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              <Logo
                name={company.name}
                bg={company.bg}
                fontWeight={company.fontWeight}
                letterSpacing={company.letterSpacing}
              />
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
