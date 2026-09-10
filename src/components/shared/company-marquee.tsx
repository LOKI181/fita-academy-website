"use client";

const LogoSVGs = [
  { name: "Infosys", svg: <svg viewBox="0 0 120 40" className="h-8 w-auto"><rect width="120" height="40" rx="6" fill="#007CC3"/><text x="60" y="26" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="700" fontSize="16">Infosys</text></svg> },
  { name: "TCS", svg: <svg viewBox="0 0 80 40" className="h-8 w-auto"><rect width="80" height="40" rx="6" fill="#1F3F7A"/><text x="40" y="26" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="800" fontSize="18" letterSpacing="2">TCS</text></svg> },
  { name: "Wipro", svg: <svg viewBox="0 0 100 40" className="h-8 w-auto"><rect width="100" height="40" rx="6" fill="#1B365D"/><circle cx="20" cy="20" r="8" fill="#E8353A"/><text x="58" y="25" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="600" fontSize="14">wipro</text></svg> },
  { name: "Accenture", svg: <svg viewBox="0 0 130 40" className="h-8 w-auto"><rect width="130" height="40" rx="6" fill="#A100FF"/><text x="65" y="25" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="500" fontSize="13" letterSpacing="1">accenture</text><path d="M110 8 L120 20 L110 32" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg> },
  { name: "Cognizant", svg: <svg viewBox="0 0 130 40" className="h-8 w-auto"><rect width="130" height="40" rx="6" fill="#0033A0"/><text x="65" y="25" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="600" fontSize="13" letterSpacing="0.5">cognizant</text></svg> },
  { name: "Zoho", svg: <svg viewBox="0 0 80 40" className="h-8 w-auto"><rect width="80" height="40" rx="6" fill="#E42527"/><text x="40" y="26" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="800" fontSize="18">Zoho</text></svg> },
  { name: "HCL", svg: <svg viewBox="0 0 80 40" className="h-8 w-auto"><rect width="80" height="40" rx="6" fill="#0057B8"/><text x="40" y="26" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="800" fontSize="18" letterSpacing="2">HCL</text></svg> },
  { name: "Oracle", svg: <svg viewBox="0 0 100 40" className="h-8 w-auto"><rect width="100" height="40" rx="6" fill="#C74634"/><text x="50" y="26" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="700" fontSize="14">Oracle</text></svg> },
];

export function CompanyMarquee() {
  const allLogos = [...LogoSVGs, ...LogoSVGs];

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
              aria-label={company.name}
            >
              {company.svg}
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
