import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { careerOpenings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers at FITA Academy",
  description:
    "Join FITA Academy — explore open roles across training, sales, marketing, technology and HR across 10+ cities in Tamil Nadu and beyond.",
  alternates: { canonical: "/careers" },
};

const typeStyles: Record<string, string> = {
  "Full-time": "border-success/25 bg-success/10 text-success",
  "Part-time": "border-[color-mix(in_oklab,var(--primary)_25%,var(--border))] bg-[color-mix(in_oklab,var(--primary)_8%,transparent)] text-primary",
  Contract: "border-border bg-mist text-muted-foreground",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        ghost="CAREERS"
        eyebrow="Join our team"
        title={
          <>
            Build your career <span className="gradient-text">at FITA</span>
          </>
        }
        sub="We're a team of 200+ professionals across 10+ cities — trainers, counsellors, marketers and technologists who believe in outcome-driven education."
        stats={[
          { value: "200+", label: "Team members" },
          { value: "10+", label: "Cities" },
          { value: `${careerOpenings.length}`, label: "Open roles" },
          { value: "1999", label: "Since" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {careerOpenings.map((job) => (
                <article key={job.id} className="surface group flex flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-base font-bold leading-snug tracking-tight text-foreground">
                      {job.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${
                        typeStyles[job.type] ?? "border-border bg-mist text-muted-foreground"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>

                  <p className="eyebrow mt-2">{job.department}</p>

                  <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.75rem] text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary" aria-hidden />
                      {job.location}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" aria-hidden />
                      {job.experience}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Briefcase className="size-3.5 text-primary" aria-hidden />
                      {job.type}
                    </li>
                  </ul>

                  <p className="mt-4 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>

                  <Button asChild size="sm" className="btn-press mt-5 h-9 w-full gap-1.5">
                    <Link href={`/enquire?subject=Apply for ${encodeURIComponent(job.title)}`}>
                      Apply Now <ArrowRight aria-hidden className="size-3.5" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-mist">
        <div className="container-x">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Open application"
              title="Don't see your role?"
              sub="Send us your resume — we're always looking for talented people who share our mission."
            />
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
                <Link href="/enquire?subject=General Career Application">
                  Send Your Resume <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}