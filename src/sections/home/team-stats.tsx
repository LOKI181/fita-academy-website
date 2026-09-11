import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { value: 95, suffix: "%", label: "Placement rate" },
  { value: 10000, suffix: "+", label: "Students trained" },
  { value: 3000, suffix: "+", label: "Hiring partners" },
];

const tags = ["Placement Support", "Expert Trainers", "Real Projects", "Certification", "Career Guidance"];

export function TeamStats() {
  return (
    <section className="py-8 border-b border-border bg-background lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left: Stats */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Training that delivers{" "}
                <span className="text-primary">real results</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our track record speaks for itself — industry-aligned training with measurable outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 lg:mt-8 lg:gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-4xl font-black text-primary">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground/70 hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
