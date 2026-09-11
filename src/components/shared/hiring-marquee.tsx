const partners = [
  "TCS",
  "Infosys",
  "Cognizant",
  "Wipro",
  "HCLTech",
  "Accenture",
  "Zoho",
  "Freshworks",
  "PayPal",
  "Standard Chartered",
  "Verizon",
  "Ford",
  "Comcast",
  "Amazon",
];

export function HiringMarquee() {
  const row = [...partners, ...partners];

  return (
    <div className="relative border-y border-border bg-card/60">
      <div className="container-x flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8">
        <p className="shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Our students work at
        </p>
        <div className="marquee-mask marquee-pause min-w-0 flex-1 overflow-hidden">
          <ul className="marquee marquee-slow items-center gap-10" aria-label="Hiring partners">
            {row.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= partners.length}
                className="shrink-0 font-heading text-base font-bold tracking-tight text-foreground/35 transition-colors hover:text-foreground/70"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}