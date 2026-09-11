import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ResourceCard } from "@/components/shared/resource-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources & Career Guides",
  description:
    "Free career roadmaps, interview tips and course guides written by FITA Academy trainers.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        ghost="GUIDES"
        eyebrow="Free guides"
        title="Decide with confidence, before you enroll"
        sub="Practical, short and trainer-written — roadmaps, comparison guides and interview tips for IT careers."
        stats={[
          { value: `${resources.length}+`, label: "Free guides" },
          { value: "0 ₹", label: "Always free" },
          { value: "5 min", label: "Avg. read" },
          { value: "By trainers", label: "Not AI-written" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}