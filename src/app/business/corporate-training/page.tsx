import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, CheckCircle2, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "FITA Academy corporate training — customised IT upskilling programs for teams. On-site & remote, 120+ courses, flexible scheduling for enterprises.",
};

const benefits = [
  {
    icon: Users,
    title: "Customised Curriculum",
    text: "Courses tailored to your team's skill gaps — not off-the-shelf content. We design modules around your tech stack and business goals.",
  },
  {
    icon: Building2,
    title: "On-site & Remote Options",
    text: "Trainers come to your office or run live-online sessions. Flexible scheduling for teams that can't pause daily operations.",
  },
  {
    icon: CheckCircle2,
    title: "Measurable Outcomes",
    text: "Pre and post-training assessments, skill dashboards and progress reports — so leadership sees ROI, not just attendance.",
  },
  {
    icon: Globe,
    title: "Multi-city Delivery",
    text: "10+ branches across Tamil Nadu, Karnataka and Pondicherry. Scale training across locations with consistent quality.",
  },
];

const clients = [
  "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Zoho", "CTS",
];

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Corporate Training"
            title="Upskill your team, accelerate your business"
            sub="Customised IT training programs designed around your team's needs — delivered on-site or remotely by industry-expert trainers."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/enquire?subject=Corporate Training Enquiry">
                Request a Training Plan <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/enquire?subject=Corporate Training Callback">
                Talk to a Training Advisor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader align="left" eyebrow="Why FITA" title="Built for enterprise teams" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                <b.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Trusted by"
            title="Companies that train with us"
            sub="Enterprise teams across IT, banking and e-commerce trust FITA for upskilling."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {clients.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-heading text-sm font-semibold tracking-wide"
              >
                <Building2 className="size-4 text-primary" aria-hidden /> {name}
              </span>
            ))}
            <span className="rounded-xl bg-accent px-5 py-3 font-heading text-sm font-bold text-accent-foreground">
              + 50 more
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="Get started"
          title="Ready to upskill your team?"
          sub="Tell us about your team size, skill gaps and timeline — we'll design a training plan within 48 hours."
        />
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/enquire?subject=Corporate Training Enquiry">
              Get a Custom Training Plan <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
