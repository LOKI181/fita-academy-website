import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { trainers } from "@/lib/content";

export function PremiumTrainers() {
  return (
    <section className="section-editorial mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <ScrollReveal>
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            Our Trainers
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Learn from <span className="text-primary">industry experts</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Practitioners who use these exact skills every day, not full-time lecturers.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:mt-10 lg:grid-cols-4 lg:mt-12">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="card-premium group rounded-2xl border border-border bg-background p-6 transition-all"
            >
              {/* Avatar with photo placeholder */}
              <div className="relative mx-auto size-24 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent border border-border">
                <span className="grid size-full place-items-center font-heading text-3xl font-bold text-primary">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-primary">
                  {t.role}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {t.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>{t.experience}</span>
                <span className="text-border">|</span>
                <span>{t.students.toLocaleString("en-IN")}+ students</span>
              </div>

              {/* CTA */}
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View Profile <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
