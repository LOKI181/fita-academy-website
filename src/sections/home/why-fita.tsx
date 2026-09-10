import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap, TrendingUp, Users, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const features = [
  {
    icon: Users,
    title: "Industry-experienced trainers",
    text: "Learn from practitioners with 9–15 years of hands-on experience, not full-time lecturers.",
    span: "col-span-2",
    accent: true,
  },
  {
    icon: Code2,
    title: "Real projects",
    text: "Build production-style projects on GitHub.",
    span: "",
    accent: false,
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement-first",
    text: "Resume, mock interviews and direct referrals to 100+ hiring partners.",
    span: "",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Career guidance",
    text: "One-on-one counselling to pick the right track for your goals.",
    span: "",
    accent: false,
  },
  {
    icon: Zap,
    title: "Flexible batches",
    text: "Weekday, weekend, classroom and live online — learn on your schedule.",
    span: "",
    accent: false,
  },
  {
    icon: GraduationCap,
    title: "Certified + verifiable",
    text: "FITA certification with unique verification ID, recognised by hiring partners.",
    span: "col-span-2",
    accent: false,
  },
];

export function WhyFita() {
  return (
    <section className="section-editorial mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <ScrollReveal>
        <SectionHeader
          align="left"
          eyebrow="Why FITA"
          title="Training that feels like a job you're preparing for"
          sub="Since 1999 we've trained the way employers evaluate — projects, communication and interview readiness."
        />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-10 bento-grid">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bento-item ${
                f.accent
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 border border-border"
              } ${f.span === "col-span-2" ? "bento-item-span-2" : ""}`}
            >
              <span
                className={`grid size-10 place-items-center rounded-xl ${
                  f.accent
                    ? "bg-white/20 text-white"
                    : "bg-accent text-primary"
                }`}
              >
                <f.icon className="size-5" aria-hidden />
              </span>
              <h3
                className={`mt-3 font-heading text-base font-bold ${
                  f.accent ? "text-white" : "text-foreground"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`mt-1 text-sm leading-relaxed ${
                  f.accent ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg" className="btn-press">
          <Link href="/about">
            Learn more about FITA <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}
