import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { value: 25, suffix: "+", label: "Years of training", prefix: "" },
  { value: 120, suffix: "+", label: "Industry-aligned courses", prefix: "" },
  { value: 10000, suffix: "+", label: "Students placed", prefix: "" },
  { value: 8, suffix: "+", label: "Cities & branches", prefix: "" },
];

export function TrustBar() {
  return (
    <section aria-label="FITA in numbers" className="relative border-b border-border bg-background">
      <div className="container-x grid grid-cols-2 gap-6 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="relative flex flex-col items-center gap-2 text-center md:items-start md:text-left"
          >
            {i > 0 && (
              <span
                className="absolute -left-3 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border md:block"
                aria-hidden
              />
            )}
            <span className="stat-counter font-heading text-[2.25rem] font-black leading-none tracking-[-0.03em] text-primary sm:text-[2.75rem]">
              <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
            </span>
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}