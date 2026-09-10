"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, BookOpen, Code2, Award, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "DISCOVER",
    text: "Explore courses, talk to counsellors and find the right career track for your goals.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "LEARN",
    text: "Industry-expert trainers teach you through real projects, not just slides.",
  },
  {
    icon: Code2,
    number: "03",
    title: "BUILD",
    text: "Create a portfolio of production-ready projects on GitHub that recruiters can see.",
  },
  {
    icon: Award,
    number: "04",
    title: "CERTIFY",
    text: "Earn a FITA certification with a unique verification ID recognised by hiring partners.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "GET HIRED",
    text: "Mock interviews, resume grooming and direct referrals to 3000+ hiring partners.",
  },
];

export function CareerJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step"));
            if (!isNaN(idx)) setActiveStep(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepEls = section.querySelectorAll("[data-step]");
    stepEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-editorial mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
          Career Journey
        </span>
        <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Your path from learning{" "}
          <span className="text-primary">to hiring</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Five clear steps. No guesswork.
        </p>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="mt-14 hidden lg:block">
        <div className="relative flex items-start justify-between">
          {/* Progress line */}
          <div className="absolute left-0 top-6 h-0.5 w-full bg-border">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.title}
              data-step={i}
              className={`relative flex w-1/5 flex-col items-center text-center transition-all duration-300 ${
                i <= activeStep ? "opacity-100" : "opacity-40"
              }`}
            >
              <span
                className={`relative z-10 grid size-12 place-items-center rounded-full border-2 transition-colors duration-300 ${
                  i <= activeStep
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <step.icon className="size-5" aria-hidden />
              </span>
              <span className="mt-3 font-heading text-xs font-bold text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-1 font-heading text-sm font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[160px] text-xs leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="mt-10 space-y-8 lg:hidden">
        {steps.map((step, i) => (
          <div
            key={step.title}
            data-step={i}
            className={`flex gap-4 transition-opacity duration-300 ${
              i <= activeStep ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex flex-col items-center">
              <span
                className={`grid size-10 place-items-center rounded-full border-2 transition-colors duration-300 ${
                  i <= activeStep
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <step.icon className="size-4" aria-hidden />
              </span>
              {i < steps.length - 1 && (
                <div className="mt-2 h-8 w-0.5 bg-border" />
              )}
            </div>
            <div className="pt-1">
              <span className="font-heading text-xs font-bold text-muted-foreground">
                {step.number}
              </span>
              <h3 className="font-heading text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
