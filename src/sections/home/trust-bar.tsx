import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { value: 25, suffix: "+", label: "Years of training", prefix: "" },
  { value: 120, suffix: "+", label: "Industry-aligned courses", prefix: "" },
  { value: 10000, suffix: "+", label: "Students placed", prefix: "" },
  { value: 8, suffix: "+", label: "Cities & branches", prefix: "" },
];

export function TrustBar() {
  return (
    <section aria-label="FITA in numbers" className="section-editorial border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1.5 px-4 py-4 text-center">
            <span className="font-heading text-4xl font-black text-primary sm:text-5xl">
              <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
            </span>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
