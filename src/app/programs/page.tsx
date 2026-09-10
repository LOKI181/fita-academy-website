import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { masterPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Master Programs",
  description:
    "FITA Academy Master Programs — comprehensive career transformation packages combining multiple courses with placement support. AI, Full Stack, Cloud, Marketing & more.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Master Programs"
            title="Career transformation, not just courses"
            sub="Our Master Programs combine multiple courses into structured career tracks — with placement support, real projects and mentor guidance."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {masterPrograms.map((prog) => (
            <Card key={prog.slug} className="flex flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-2">
                  {prog.badge ? <Badge>{prog.badge}</Badge> : <span />}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden /> {prog.duration}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {prog.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {prog.description}
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-foreground">Includes:</p>
                  {prog.courses.map((c) => (
                    <span key={c} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3 text-success" aria-hidden /> {c}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="font-heading text-lg font-bold text-foreground">{prog.fees}</span>
                  <Button asChild size="sm">
                    <Link href={`/enquire?course=${encodeURIComponent(prog.title)}`}>
                      Enquire <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Custom track"
            title="Want a personalised learning path?"
            sub="Talk to our counsellors — they'll design a learning plan around your career goals and schedule."
          />
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/enquire?subject=Custom Learning Path">
                Talk to a Counsellor <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
