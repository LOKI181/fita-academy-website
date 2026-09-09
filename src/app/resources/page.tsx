import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/section-header";
import { ResourceCard } from "@/components/shared/resource-card";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources & Career Guides",
  description:
    "Free career roadmaps, interview tips and course guides written by FITA Academy trainers.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Free guides"
            title="Decide with confidence, before you enroll"
            sub="Practical, short and trainer-written — roadmaps, comparison guides and interview tips for IT careers."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      </section>
    </>
  );
}