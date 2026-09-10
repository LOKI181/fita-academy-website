import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { careerOpenings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers at FITA Academy",
  description:
    "Join FITA Academy — explore open roles across training, sales, marketing, technology and HR across 10+ cities in Tamil Nadu and beyond.",
  alternates: { canonical: "/careers" },
};

const typeColors: Record<string, string> = {
  "Full-time": "bg-success/10 text-success",
  "Part-time": "bg-primary/10 text-primary",
  Contract: "bg-muted text-muted-foreground",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero with giant background text */}
      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="hero-bg-text" aria-hidden>CAREERS</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Join our team"
              title="Build your career at FITA Academy"
              sub="We're a team of 200+ professionals across 10+ cities — trainers, counsellors, marketers and technologists who believe in outcome-driven education."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {careerOpenings.map((job) => (
              <Card key={job.id} className="card-premium flex flex-col">
                <CardContent className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {job.title}
                    </h3>
                    <Badge variant="secondary" className={typeColors[job.type] ?? ""}>
                      {job.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{job.department}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden /> {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="size-3.5" aria-hidden /> {job.type}
                    </span>
                  </div>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <Button asChild size="sm" className="mt-2 w-full btn-press">
                    <Link href={`/enquire?subject=Apply for ${encodeURIComponent(job.title)}`}>
                      Apply Now <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Open application"
              title="Don't see your role?"
              sub="Send us your resume — we're always looking for talented people who share our mission."
            />
            <div className="mt-8">
              <Button asChild size="lg" className="btn-press">
                <Link href="/enquire?subject=General Career Application">
                  Send Your Resume <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
