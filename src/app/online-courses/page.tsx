import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Globe, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
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
    title: "Live interactive classes",
    text: "Attend live sessions with the same trainers as classroom batches. Ask questions, get answers in real-time.",
  },
  {
    icon: Globe,
    title: "Learn from anywhere",
    text: "No commute, no relocation. Join from Chennai, Coimbatore, or anywhere in India.",
  },
  {
    icon: Clock,
    title: "Recorded sessions",
    text: "Every class is recorded. Missed a session? Rewatch at your own pace with full recordings.",
  },
];

export default function OnlineCoursesPage() {
  return (
    <>
      <PageHero
        ghost="ONLINE"
        eyebrow="Live Online Training"
        title={
          <>
            Same quality, <span className="gradient-text">learn from anywhere</span>
          </>
        }
        sub="Live instructor-led sessions with real-time interaction, recordings for revision and the same placement support as our classroom batches."
        stats={[
          { value: `${onlineCourses.length}`, label: "Courses online" },
          { value: "Live", label: "Instructor-led" },
          { value: "HD", label: "Recordings" },
          { value: "Pan-India", label: "Reach" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader align="left" eyebrow="Why online" title="Built for remote learners" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <article key={f.title} className="surface flex h-full flex-col p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary">
                    <f.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow={`${onlineCourses.length} courses available`}
              title="Courses with live online mode"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {onlineCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </ScrollReveal>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-press h-11 gap-2 bg-card px-6"
            >
              <Link href="/courses">
                View All Courses <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}