import { FadeIn } from "@/components/motion";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const metrics = [
  {
    icon: Building2,
    label: "Hiring Partners",
    value: "3,000+",
    sublabel: "Active industry connections",
  },
  {
    icon: Users,
    label: "Students Placed",
    value: "10,000+",
    sublabel: "Career starts from here",
  },
  {
    icon: Award,
    label: "Course Catalog",
    value: "120+",
    sublabel: "Hands-on career paths",
  },
  {
    icon: TrendingUp,
    label: "Placement Rate",
    value: "94%",
    sublabel: "Industry-leading outcome",
  },
];

export function ImpactMetrics() {
  return (
    <section className="section-pad relative overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(29,99,237,0.10),transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.10),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center mb-14">
          <p className="eyebrow">Results at a glance</p>
          <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
            Real impact. <span className="gradient-text">Real numbers.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Every metric reflects a student who started with zero to one —
            and finished with a career.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} preset="fade-up" delay={0.1 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card/70 backdrop-blur-sm shadow-[var(--e1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--e3)] hover:border-primary/20 hover:bg-card/90">
                {/* Subtle glow on hover */}
                <div className="absolute -inset-[1px] rounded-[1.5rem] bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 p-7 flex flex-col items-start gap-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 shadow-inner border border-white/5">
                    <m.icon className="size-5 text-primary" aria-hidden />
                  </span>

                  <div className="space-y-1">
                    <span className="block font-heading text-4xl font-black text-foreground tracking-tight">
                      {m.value}
                    </span>
                    <span className="block text-[0.95rem] font-bold text-foreground/90">
                      {m.label}
                    </span>
                    <span className="block text-[0.78rem] text-muted-foreground leading-snug">
                      {m.sublabel}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
