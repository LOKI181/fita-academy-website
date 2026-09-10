import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, CheckCircle2, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { partnerLogos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hire From FITA",
  description:
    "Access 10,000+ trained IT professionals across Java, Python, Data Science, Cloud, Testing and more. Hire from FITA Academy's verified talent pool.",
};

const steps = [
  {
    icon: Handshake,
    title: "1. Share Your Requirements",
    text: "Tell us the role, skills, experience level and timeline. We match from our trained and verified alumni network.",
  },
  {
    icon: Users,
    title: "2. Receive Shortlisted Profiles",
    text: "We send curated profiles within 48 hours — each with project portfolios, interview scores and trainer recommendations.",
  },
  {
    icon: CheckCircle2,
    title: "3. Interview & Hire",
    text: "Conduct your standard interview process. We facilitate scheduling and provide additional assessment data on request.",
  },
  {
    icon: Building2,
    title: "4. Onboarding Support",
    text: "Post-hire, we offer a 2-week bridge program to help new hires ramp up faster on any skill gaps.",
  },
];

export default function HireFromFitaPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Hire From FITA"
            title="Access India's trained IT talent pool"
            sub="10,000+ placement-ready professionals across Java, Python, Cloud, Data Science, Testing and more. Faster hiring, better retention."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/enquire?subject=Hire From FITA">
                Post a Requirement <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/placement">View Placement Data</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader align="left" eyebrow="How it works" title="Simple, fast hiring process" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                <s.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Our hiring partners"
            title="Companies that hire from FITA"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {partnerLogos.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide"
              >
                <Building2 className="size-4 text-primary" aria-hidden /> {name}
              </span>
            ))}
            <span className="rounded-xl bg-accent px-5 py-3 font-heading text-sm font-bold text-accent-foreground">
              + 90 more
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="Get started"
          title="Ready to hire from FITA?"
          sub="Share your hiring requirement and we'll start matching within 48 hours."
        />
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/enquire?subject=Hire From FITA">
              Post Your Requirement <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
