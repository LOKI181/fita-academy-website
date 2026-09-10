import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, CheckCircle2, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    title: "Customised Curriculum",
    text: "Courses tailored to your team's skill gaps — not off-the-shelf content.",
  },
  {
    icon: Building2,
    title: "On-site & Remote",
    text: "Trainers come to your office or run live-online sessions.",
  },
  {
    icon: CheckCircle2,
    title: "Measurable Outcomes",
    text: "Pre and post-training assessments, skill dashboards and progress reports.",
  },
  {
    icon: Globe,
    title: "Multi-city Delivery",
    text: "10+ branches across Tamil Nadu, Karnataka and Pondicherry.",
  },
];

const clients = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Zoho", "CTS"];

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>CORPORATE</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Corporate Training"
              title="Upskill your team, accelerate your business"
              sub="Customised IT training programs designed around your team's needs — delivered on-site or remotely."
            />
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-press glow-primary-hover">
              <Link href="/enquire?subject=Corporate Training Enquiry">
                Request a Training Plan <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-press">
              <Link href="/enquire?subject=Corporate Training Callback">
                Talk to a Training Advisor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader align="left" eyebrow="Why FITA" title="Built for enterprise teams" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-10 bento-grid">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bento-item bg-muted/60 border border-border ${
                  i === 0 ? "bento-item-span-2 bg-primary text-primary-foreground" : ""
                }`}
              >
                <span
                  className={`grid size-11 place-items-center rounded-xl ${
                    i === 0 ? "bg-white/20 text-white" : "bg-accent text-primary"
                  }`}
                >
                  <b.icon className="size-5" aria-hidden />
                </span>
                <h3 className={`mt-4 font-heading text-base font-bold ${i === 0 ? "text-white" : "text-foreground"}`}>
                  {b.title}
                </h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="Trusted by" title="Companies that train with us" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {clients.map((name) => (
                <span
                  key={name}
                  className="card-premium flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide"
                >
                  <Building2 className="size-4 text-primary" aria-hidden /> {name}
                </span>
              ))}
              <span className="rounded-xl bg-accent px-5 py-3 font-heading text-sm font-bold text-accent-foreground">
                + 50 more
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Get started"
            title="Ready to upskill your team?"
            sub="Tell us about your team size, skill gaps and timeline."
          />
          <div className="mt-8">
            <Button asChild size="lg" className="btn-press">
              <Link href="/enquire?subject=Corporate Training Enquiry">
                Get a Custom Training Plan <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
