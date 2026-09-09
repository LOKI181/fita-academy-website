import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/section-header";
import { BranchCard } from "@/components/shared/branch-card";
import { branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Branches",
  description:
    "Visit FITA Academy's branches across Chennai, Coimbatore, Madurai, Trichy, Salem, Erode, Pondicherry, Tiruppur and Bangalore. Same trainers, same placement team.",
};

export default function BranchesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow={`${branches.length} centres · ${new Set(branches.map((b) => b.city)).size} cities`}
            title="A FITA branch near you"
            sub="Pick the closest centre — classroom and live online batches run from every branch with the same curriculum and placement team."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.slug} branch={b} featured={b.featured} />
          ))}
        </div>
      </section>
    </>
  );
}