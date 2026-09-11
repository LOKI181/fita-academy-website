import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VisualFrame } from "@/components/shared/visual-frame";

const proofPoints = [
  "Trainers from product companies, not full-time lecturers",
  "Real production projects shipped to GitHub",
  "Resume, mock interviews and referral support",
  "Classroom + live online across 8 branches",
];

const miniStats = [
  { value: "25+", label: "Years" },
  { value: "40%", label: "Avg. salary hike" },
  { value: "94%", label: "Placement rate" },
];

export function AboutFita() {
  return (
    <section className="section-pad relative overflow-hidden bg-background">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <ScrollReveal>
            <div className="relative">
              <VisualFrame
                variant="grid"
                className="aspect-[4/3] w-full"
                label="FITA Academy trainers and students collaborating"
              >
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-[14rem] font-heading text-lg font-bold leading-snug text-white">
                    Focus&apos;d IT Academy — building employable engineers since 1999.
                  </p>
                </div>
              </VisualFrame>

              {/* Metric card */}
              <div className="glass-card absolute -bottom-7 left-4 rounded-2xl p-5 sm:left-8">
                <p className="font-heading text-4xl font-black leading-none tracking-tight text-primary">
                  40%
                </p>
                <p className="mt-1.5 text-[0.78rem] font-medium text-muted-foreground">
                  Average salary hike
                  <br />
                  after completion
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay={120}>
            <div>
              <p className="eyebrow">About us</p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                Meet FITA — your career
                <br />
                <span className="gradient-text">design partners.</span>
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                We&apos;re not just a training institute. We&apos;re mentors,
                problem solvers and your placement team. From the first
                counselling call to the offer letter, we work as an extension of
                your career — not a course you buy and forget.
              </p>

              <ul className="mt-8 space-y-3.5">
                {proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-[0.9375rem] leading-relaxed text-foreground/85">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mini stats */}
              <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-7">
                {miniStats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-heading text-2xl font-black tracking-tight text-foreground">
                        {s.value}
                      </span>
                      <span className="mt-0.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="btn-press h-11 gap-2 bg-card px-6 text-[0.9rem]"
                >
                  <Link href="/about">
                    More about FITA
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}