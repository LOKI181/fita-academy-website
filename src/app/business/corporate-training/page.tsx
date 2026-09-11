import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Globe, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "FITA Academy corporate training — customised IT upskilling programs for teams. On-site & remote, 120+ courses, flexible scheduling for enterprises.",
  alternates: { canonical: "/business/corporate-training" },
};

const benefits = [
  {
    icon: Users,
    title: "Customised curriculum",
    text: "Courses tailored to your team's skill gaps — not off-the-shelf content.",
  },
  {
    icon: Building2,
    title: "On-site & remote",
    text: "Trainers come to your office or run live-online sessions.",
  },
  {
    icon: CheckCircle2,
    title: "Measurable outcomes",
    text: "Pre and post-training assessments, skill dashboards and progress reports.",
  },
  {
    icon: Globe,
    title: "Multi-city delivery",
    text: "10+ branches across Tamil Nadu, Karnataka and Pondicherry.",
  },
];

const clients = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Zoho", "CTS"];

export default function CorporateTrainingPage() {
  return (
    <>
      <PageHero
        ghost="CORPORATE"
        eyebrow="Corporate Training"
        title={
          <>
            Upskill your team, <span className="gradient-text">accelerate your business</span>
          </>
        }
        sub="Customised IT training programs designed around your team's needs — delivered on-site or remotely."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
            <Link href="/enquire?subject=Corporate Training Enquiry">
              Request a Training Plan <ArrowRight aria-hidden className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="btn-press h-11 bg-card px-6"
          >
            <Link href="/enquire?subject=Corporate Training Callback">
              Talk to a Training Advisor
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="Why FITA" title="Built for enterprise teams" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <article key={b.title} className="surface flex h-full flex-col p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary">
                    <b.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Trusted by"
              title="Companies that train with us"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {clients.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-heading text-sm font-semibold tracking-wide shadow-[var(--e1)]"
                >
                  <Building2 className="size-4 text-primary" aria-hidden /> {name}
                </span>
              ))}
              <span className="rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-5 py-3 font-heading text-sm font-bold text-primary">
                + 50 more
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
              title="Ready to upskill your team?"
              sub="Tell us about your team size, skill gaps and timeline."
            />
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/enquire?subject=Corporate Training Enquiry">
                  Get a Custom Training Plan <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}