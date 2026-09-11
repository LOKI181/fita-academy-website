import { cn } from "cn";

/**
 * PageHero — the shared hero band used by every inner page.
 * Keeps the FITA "azure" identity consistent without repeating markup.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  ghost,
  stats,
  children,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Big faint background word (e.g. "COURSES") */
  ghost?: string;
  stats?: { value: React.ReactNode; label: string }[];
  children?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        dark ? "bg-ink text-white" : "bg-mist",
        className
      )}
    >
      {/* Ambient layers */}
      {dark ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,#05080f_0%,#0b1220_45%,#123a8f_100%)]" />
          <div className="pointer-events-none absolute -left-32 -top-40 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(29,99,237,0.55),transparent_65%)] blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(111,157,255,0.4),transparent_65%)] blur-3xl" />
        </>
      ) : (
        <>
          <div className="aurora opacity-60" aria-hidden />
          <div className="grid-lines opacity-70" aria-hidden />
        </>
      )}

      {ghost ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[clamp(5rem,17vw,14rem)] font-black leading-[0.82] tracking-[-0.05em]",
            dark ? "text-white/[0.045]" : "text-[color-mix(in_oklab,var(--primary)_7%,transparent)]"
          )}
        >
          {ghost}
        </span>
      ) : null}

      <div className="container-x relative z-10 py-16 sm:py-20 lg:py-24">
        {eyebrow ? (
          <span className={cn("chip", dark && "border-white/20 bg-white/10 text-white")}>
            {eyebrow}
          </span>
        ) : null}

        <h1
          className={cn(
            "mt-4 max-w-3xl font-heading text-[2.25rem] font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]",
            dark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h1>

        {sub ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-[1.0625rem] leading-relaxed",
              dark ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {sub}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}

        {stats?.length ? (
          <dl
            className={cn(
              "mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4",
              dark ? "border-white/15" : "border-border"
            )}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span
                    className={cn(
                      "stat-counter block font-heading text-[1.75rem] font-black leading-none tracking-[-0.03em] sm:text-[2.25rem]",
                      dark ? "text-white" : "text-primary"
                    )}
                  >
                    {s.value}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block text-[0.7rem] font-semibold uppercase tracking-[0.12em]",
                      dark ? "text-white/70" : "text-muted-foreground"
                    )}
                  >
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}