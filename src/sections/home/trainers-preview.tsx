import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { TrainerCard } from "@/components/shared/trainer-card";
import { trainers } from "@/lib/content";

export function TrainersPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          align="left"
          eyebrow="Expert trainers"
          title="Learn from engineers who've shipped at scale"
          sub="Every trainer is a working professional with 9–15 years of experience and a proven placement record."
        />
        <Button asChild variant="outline" className="shrink-0 self-start md:self-auto">
          <Link href="/trainers">
            Meet all trainers <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.slice(0, 4).map((t) => (
          <TrainerCard key={t.name} trainer={t} />
        ))}
      </div>
    </section>
  );
}