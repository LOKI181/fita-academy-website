import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/section-header";
import { TrainerCard } from "@/components/shared/trainer-card";
import { trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet FITA Academy's trainers — industry professionals with 9–15 years of experience across Java, Python, Data Science, Cloud, Testing, UI/UX and more.",
};

export default function TrainersPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Meet the team"
            title="Trainers who've shipped what they teach"
            sub="Every FITA trainer is a working professional — engineers, data scientists, and designers — who train in their spare time because they love it."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <TrainerCard key={t.name} trainer={t} />
          ))}
        </div>
      </section>
    </>
  );
}