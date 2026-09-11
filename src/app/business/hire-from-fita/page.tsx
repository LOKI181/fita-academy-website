import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
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
    number: "01",
    title: "Share your requirements",
    text: "Tell us the role, skills, experience level and timeline.",
  },
  {
    number: "02",
    title: "Receive shortlisted profiles",
    text: "We send curated profiles within 48 hours with project portfolios.",
  },
  {
    number: "03",
    title: "Interview & hire",
    text: "Conduct your standard interview process. We facilitate scheduling.",
  },
  {
    number: "04",
    title: "Onboarding support",
    text: "Post-hire, we offer a 2-week bridge program.",
  },
];

export default function HireFromFitaPage() {
  return (
    <>
      <PageHero
        ghost="HIRE"
        eyebrow="Hire From FITA"
        title={
          <>
            Access India&apos;s <span className="gradient-text">trained IT talent pool</span>
          </>
        }
        sub="10,000+ placement-ready professionals across Java, Python, Cloud, Data Science, Testing and more."
        stats={[
          { value: "10K+", label: "Trained talent" },
          { value: "48h", label: "Profile turnaround" },
          { value: "3000+", label: "Hiring partners" },
          { value: "0 ₹", label: "Placement fee" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
            <Link href="/enquire?subject=Hire From FITA">
              Post a Requirement <ArrowRight aria-hidden className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="btn-press h-11 bg-card px-6"
          >
            <Link href="/placement">View Placement Data</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="How it works" title="Simple, fast hiring process" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.number} className="group bg-card">
                  <div className="relative flex h-full flex-col p-7 transition-colors duration-500 group-hover:bg-[var(--mist)] lg:p-8">
                    <span className="step-index" aria-hidden>
                      {s.number}
                    </span>
                    <h3 className="mt-6 font-heading text-base font-bold tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Our hiring partners"
              title="Companies that hire from FITA"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {partnerLogos.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-heading text-sm font-semibold tracking-wide shadow-[var(--e1)]"
                >
                  <Building2 className="size-4 text-primary" aria-hidden /> {name}
                </span>
              ))}
              <span className="rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-5 py-3 font-heading text-sm font-bold text-primary">
                + 90 more
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Get started"
              title="Ready to hire from FITA?"
              sub="Share your hiring requirement and we'll start matching within 48 hours."
            />
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/enquire?subject=Hire From FITA">
                  Post Your Requirement <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}