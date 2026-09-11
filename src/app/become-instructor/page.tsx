import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { categories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Become an Instructor",
  description:
    "Teach at FITA Academy — share your industry expertise with the next generation. Flexible scheduling, competitive pay and a supportive teaching environment.",
  alternates: { canonical: "/become-instructor" },
};

const requirements = [
  "5+ years of hands-on industry experience in your domain",
  "Strong communication and mentoring ability",
  "Willingness to teach in classroom and live-online formats",
  "Relevant certifications are a plus (not mandatory)",
  "Passion for helping students transition into IT careers",
];

const perks = [
  {
    icon: Star,
    title: "Competitive pay",
    text: "Industry-aligned compensation with batch-based bonuses and annual reviews.",
  },
  {
    icon: BookOpen,
    title: "Flexible scheduling",
    text: "Choose weekday or weekend batches. Full-time and part-time options available.",
  },
  {
    icon: Users,
    title: "Real impact",
    text: "Shape the careers of 100+ students per batch. Track your trainees' placement success.",
  },
  {
    icon: CheckCircle2,
    title: "Growth",
    text: "Access to internal training programs, conference sponsorships and curriculum development roles.",
  },
];

export default function BecomeInstructorPage() {
  return (
    <>
      <PageHero
        ghost="TEACH"
        eyebrow="Teach at FITA"
        title={
          <>
            Share your expertise, <span className="gradient-text">shape careers</span>
          </>
        }
        sub="We're looking for industry professionals who can translate real-world experience into practical, career-changing training."
      >
        <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
          <Link href="/enquire?subject=Become an Instructor">
            Apply as Instructor <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div>
                <SectionHeader
                  align="left"
                  eyebrow="Requirements"
                  title="Who we're looking for"
                />
                <ul className="mt-8 space-y-3.5">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-success"
                        aria-hidden
                      />
                      <span className="text-[0.9375rem] leading-relaxed text-foreground/85">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="btn-press mt-9 h-11 gap-2 px-6">
                  <Link href="/enquire?subject=Become an Instructor">
                    Submit Your Application <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div>
                <SectionHeader align="left" eyebrow="Benefits" title="Why teach at FITA" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {perks.map((p) => (
                    <article key={p.title} className="surface flex flex-col p-5">
                      <span className="grid size-10 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary">
                        <p.icon className="size-4.5" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-heading text-sm font-bold tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader eyebrow="Training domains" title="Courses we need trainers for" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <span key={cat.slug} className="tech-tag">
                  {cat.title}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}