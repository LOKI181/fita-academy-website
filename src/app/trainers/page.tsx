import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { TrainerCard } from "@/components/shared/trainer-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet FITA Academy's trainers — industry professionals with 9–15 years of experience across Java, Python, Data Science, Cloud, Testing, UI/UX and more.",
  alternates: { canonical: "/trainers" },
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        ghost="TRAINERS"
        eyebrow="Meet the team"
        title="Trainers who've shipped what they teach"
        sub="Every FITA trainer is a working professional — engineers, data scientists and designers — who train in their spare time because they love it."
        stats={[
          { value: `${trainers.length}+`, label: "Expert trainers" },
          { value: "9–15 yrs", label: "Industry experience" },
          { value: "4.9", label: "Average rating" },
          { value: "100%", label: "Practitioners" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trainers.map((t) => (
                <TrainerCard key={t.name} trainer={t} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}