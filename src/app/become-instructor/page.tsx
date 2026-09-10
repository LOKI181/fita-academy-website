import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    title: "Competitive Pay",
    text: "Industry-aligned compensation with batch-based bonuses and annual reviews.",
  },
  {
    icon: BookOpen,
    title: "Flexible Scheduling",
    text: "Choose weekday or weekend batches. Full-time and part-time options available.",
  },
  {
    icon: Users,
    title: "Impact",
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
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>TEACH</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Teach at FITA"
              title="Share your expertise, shape careers"
              sub="We're looking for industry professionals who can translate real-world experience into practical, career-changing training."
            />
          </ScrollReveal>
          <div className="mt-8">
            <Button asChild size="lg" className="btn-press glow-primary-hover">
              <Link href="/enquire?subject=Become an Instructor">
                Apply as Instructor <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Who we&apos;re looking for
              </h2>
              <ul className="mt-5 space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-press">
                  <Link href="/enquire?subject=Become an Instructor">
                    Submit Your Application <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Why teach at FITA
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {perks.map((p) => (
                  <div key={p.title} className="card-premium rounded-2xl border border-border bg-background p-5">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
                      <p.icon className="size-4.5" aria-hidden />
                    </span>
                    <h3 className="mt-3 font-heading text-sm font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Training domains"
              title="Courses we need trainers for"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="tech-tag"
                >
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
