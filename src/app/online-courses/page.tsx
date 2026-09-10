import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Monitor, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { CourseCard } from "@/components/shared/course-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Online Courses",
  description:
    "Learn from anywhere with FITA Academy's live online courses. Same expert trainers, same curriculum, same placement support — join from any city.",
  alternates: { canonical: "/online-courses" },
};

const onlineCourses = courses.filter((c) => c.mode.includes("Live Online"));

const features = [
  {
    icon: Monitor,
    title: "Live Interactive Classes",
    text: "Attend live sessions with the same trainers as classroom batches. Ask questions, get answers in real-time.",
  },
  {
    icon: Globe,
    title: "Learn From Anywhere",
    text: "No commute, no relocation. Join from Chennai, Coimbatore, or anywhere in India.",
  },
  {
    icon: Clock,
    title: "Recorded Sessions",
    text: "Every class is recorded. Missed a session? Rewatch at your own pace with full recordings.",
  },
];

export default function OnlineCoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>ONLINE</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Live Online Training"
              title="Same quality, learn from anywhere"
              sub="Live instructor-led sessions with real-time interaction, recordings for revision and the same placement support as our classroom batches."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader align="left" eyebrow="Why online" title="Built for remote learners" />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-10 bento-grid">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bento-item bg-muted/60 border border-border ${
                  i === 0 ? "bento-item-span-2 bg-primary text-primary-foreground" : ""
                }`}
              >
                <span
                  className={`grid size-11 place-items-center rounded-xl ${
                    i === 0 ? "bg-white/20 text-white" : "bg-accent text-primary"
                  }`}
                >
                  <f.icon className="size-5" aria-hidden />
                </span>
                <h3 className={`mt-4 font-heading text-base font-bold ${i === 0 ? "text-white" : "text-foreground"}`}>
                  {f.title}
                </h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            align="left"
            eyebrow={`${onlineCourses.length} courses available`}
            title="Courses with live online mode"
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {onlineCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline" className="btn-press">
            <Link href="/courses">
              View All Courses <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
