import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, FileCheck2, MessagesSquare, Target, Users, Briefcase, MapPin } from "lucide-react";

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
    title: "Career roadmap",
    text: "Align your course with a target role — counsellors map out the skills, projects and timeline to get you interview-ready.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileCheck2,
    title: "Resume & portfolio",
    text: "Your resume is rebuilt to ATS standards with your real projects on GitHub — recruiters evaluate what you've built.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MessagesSquare,
    title: "Mock interviews & aptitude",
    text: "Technical and HR mock interviews plus aptitude drills — the same format hiring partners use, until you clear it comfortably.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Building2,
    title: "Referrals & alumni network",
    text: "Direct references to 100+ hiring partners and access to a 10,000+ alumni network across product and service companies.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Students placed", icon: Users, color: "text-blue-500" },
  { value: 3000, suffix: "+", label: "Hiring partners", icon: Building2, color: "text-emerald-500" },
  { value: 573, suffix: "", label: "Current vacancies", icon: Briefcase, color: "text-violet-500" },
  { value: 264, suffix: "", label: "Companies", icon: MapPin, color: "text-amber-500" },
];

export default function PlacementPage() {
  return (
    <>
      {/* Hero with VisualFrame */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,#05080f_0%,#0b1220_45%,#123a8f_100%)]" />
        <div className="pointer-events-none absolute -left-32 -top-40 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(29,99,237,0.55),transparent_65%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(111,157,255,0.4),transparent_65%)] blur-3xl" />
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
                <div key={s.label} className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20">
                  <span className={`mx-auto grid size-10 place-items-center rounded-xl bg-white/10 ${s.color}`}>
                    <s.icon className="size-5" />
                  </span>
                  <p className="mt-3 font-heading text-3xl font-black sm:text-4xl">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps — bento grid with icons */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="How it works" title="The 4-step placement process" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`group relative overflow-hidden rounded-2xl border p-7 ${
                    i === 0
                      ? "sm:col-span-2 border-primary/20 bg-gradient-to-br from-primary to-blue-600 text-white"
                      : "border-border bg-background"
                  }`}
                >
                  <span className={`grid size-11 place-items-center rounded-xl ${
                    i === 0 ? "bg-white/20 text-white" : `${s.bg} ${s.color}`
                  }`}>
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className={`mt-4 font-heading text-base font-bold ${i === 0 ? "text-white" : "text-foreground"}`}>
                    Step {i + 1}: {s.title}
                  </h3>
                  <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                    {s.text}
                  </p>
                  {i === 0 && (
                    <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hiring partners */}
      <section className="section-pad">
        <div className="container-x">
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
                  className="card-premium flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide transition-all hover:border-primary/30 hover:shadow-[var(--e2)]"
                >
                  <Building2 className="size-4 text-primary" aria-hidden /> {name}
                </span>
              ))}
              <span className="rounded-xl bg-primary/10 px-5 py-3 font-heading text-sm font-bold text-primary">
                + 90 more
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success stories */}
      <section className="section-pad border-y border-border bg-mist">
        <div className="container-x">
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
            <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
              <Link href="/reviews">
                Read all student reviews <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader eyebrow="FAQs" title="Placement questions, answered" />
          </ScrollReveal>
          <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="hero-bg-text" aria-hidden style={{ color: "rgba(255,255,255,0.04)" }}>PLACEMENT</div>
        <div className="relative z-10 container-x py-16 text-center sm:py-20">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
              Ready to get placed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/80">
              Start with a free demo class. Experience the training, meet the trainers, then decide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="btn-press h-11 gap-2 bg-white px-6 text-primary hover:bg-white/90">
                <Link href="/demo">
                  Book a free demo
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-press h-11 border-white/30 bg-white/10 px-6 text-white hover:bg-white/20">
                <Link href="/enquire">Talk to a counsellor</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
