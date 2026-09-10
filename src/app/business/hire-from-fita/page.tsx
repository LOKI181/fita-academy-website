import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, CheckCircle2, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { partnerLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hire From FITA",
  description:
    "Access 10,000+ trained IT professionals across Java, Python, Data Science, Cloud, Testing and more. Hire from FITA Academy's verified talent pool.",
  alternates: { canonical: "/business/hire-from-fita" },
};

const steps = [
  {
    icon: Handshake,
    title: "1. Share Your Requirements",
    text: "Tell us the role, skills, experience level and timeline.",
  },
  {
    icon: Users,
    title: "2. Receive Shortlisted Profiles",
    text: "We send curated profiles within 48 hours with project portfolios.",
  },
  {
    icon: CheckCircle2,
    title: "3. Interview & Hire",
    text: "Conduct your standard interview process. We facilitate scheduling.",
  },
  {
    icon: Building2,
    title: "4. Onboarding Support",
    text: "Post-hire, we offer a 2-week bridge program.",
  },
];

export default function HireFromFitaPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>HIRE</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Hire From FITA"
              title="Access India's trained IT talent pool"
              sub="10,000+ placement-ready professionals across Java, Python, Cloud, Data Science, Testing and more."
            />
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-press glow-primary-hover">
              <Link href="/enquire?subject=Hire From FITA">
                Post a Requirement <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-press">
              <Link href="/placement">View Placement Data</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader align="left" eyebrow="How it works" title="Simple, fast hiring process" />
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

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="Our hiring partners" title="Companies that hire from FITA" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionHeader eyebrow="Get started" title="Ready to hire from FITA?" sub="Share your hiring requirement and we'll start matching within 48 hours." />
          <div className="mt-8">
            <Button asChild size="lg" className="btn-press">
              <Link href="/enquire?subject=Hire From FITA">
                Post Your Requirement <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
