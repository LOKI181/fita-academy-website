import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";

const features = [
  {
    icon: Users,
    title: "Industry-experienced trainers",
    text: "Learn from practitioners with 9–15 years of hands-on experience, not full-time lecturers.",
  },
  {
    icon: Code2,
    title: "Build real projects, not just notes",
    text: "Every course ends with production-style projects you can show recruiters on GitHub.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Placement-first approach",
    text: "Resume, aptitude, mock interviews and direct referrals to 100+ hiring partners.",
  },
  {
    icon: TrendingUp,
    title: "Career guidance at every step",
    text: "One-on-one counselling to pick the right track — and the right batch — for your goals.",
  },
];

export function WhyFita() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeader
          align="left"
          eyebrow="Why FITA"
          title="Training that feels like a job you're preparing for"
          sub="Since 1999 we've trained the way employers evaluate — projects, communication and interview readiness — so your first job isn't a gamble."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-background p-5"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
                <f.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/about">
            Learn more about FITA <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}