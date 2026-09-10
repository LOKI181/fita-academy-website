import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, FileCheck2, MessagesSquare, Target } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ReviewCard } from "@/components/shared/review-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { partnerLogos, reviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Placement Support",
  description:
    "FITA Academy's placement support — 100+ hiring partners, 10,000+ students placed, resume & mock interview drills, and real-project portfolios.",
  alternates: { canonical: "/placement" },
};

const steps = [
  {
    icon: Target,
    title: "1. Career roadmap",
    text: "Align your course with a target role — counsellors map out the skills, projects and timeline to get you interview-ready.",
  },
  {
    icon: FileCheck2,
    title: "2. Resume & portfolio",
    text: "Your resume is rebuilt to ATS standards with your real projects on GitHub — recruiters evaluate what you've built.",
  },
  {
    icon: MessagesSquare,
    title: "3. Mock interviews & aptitude",
    text: "Technical and HR mock interviews plus aptitude drills — the same format hiring partners use, until you clear it comfortably.",
  },
  {
    icon: Building2,
    title: "4. Referrals & alumni network",
    text: "Direct references to 100+ hiring partners and access to a 10,000+ alumni network across product and service companies.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Students placed" },
  { value: 3000, suffix: "+", label: "Hiring partners" },
  { value: 573, suffix: "", label: "Current vacancies" },
  { value: 264, suffix: "", label: "Companies approached" },
];

export default function PlacementPage() {
  return (
    <>
      {/* Hero with animated counters */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="hero-bg-text" aria-hidden style={{ color: "rgba(255,255,255,0.04)" }}>PLACEMENT</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Placement"
              title="Your first job, on purpose"
              sub="Placement support isn't a guarantee — it's a system. Resume, portfolio, mock interviews and employer referrals, run like a process from day one."
              className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:bg-white/10 [&_span]:text-white"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15">
                  <p className="font-heading text-3xl font-black sm:text-4xl">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps - bento grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader align="left" eyebrow="How it works" title="The 4-step placement process" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-10 bento-grid">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`bento-item bg-muted/60 border border-border ${
                  i === 0 ? "bento-item-span-2 bg-primary text-primary-foreground" : ""
                }`}
              >
                <span
                  className={`grid size-11 place-items-center rounded-xl ${
                    i === 0 ? "bg-white/20 text-white" : "bg-accent text-primary"
                  }`}
                >
                  <s.icon className="size-5" aria-hidden />
                </span>
                <h3 className={`mt-4 font-heading text-base font-bold ${i === 0 ? "text-white" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Hiring partners */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Hiring partners"
              title="Companies that recruit from FITA"
              sub="A snapshot of teams that have hired our students in the last 12 months."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {partnerLogos.map((name) => (
                <span
                  key={name}
                  className="card-premium flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide"
                >
                  <Building2 className="size-4 text-primary" aria-hidden /> {name}
                </span>
              ))}
              <span className="rounded-xl bg-accent px-5 py-3 font-heading text-sm font-bold text-accent-foreground">
                + 90 more
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader align="left" eyebrow="Success stories" title="Placed students, in their words" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="btn-press">
            <Link href="/reviews">
              Read all student reviews <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="FAQs" title="Placement questions, answered" />
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left font-medium">
                Is placement 100% guaranteed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No institute can guarantee a job — but we guarantee the system: interview-ready
                training, projects, mock interviews and direct references. Your effort + our
                process is what turns into offers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left font-medium">
                Do freshers with zero experience get placed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — the majority of our placed students were freshers or career-switchers.
                Companies hire on demonstrated skill: your project portfolio and interview
                performance, which we build from day one.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left font-medium">
                How long does support continue after course completion?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Placement support continues until you&apos;re placed. You can attend mock interviews,
                use referral channels and reschedule counselling sessions even after your batch ends.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
