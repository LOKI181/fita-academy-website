import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { BranchCard } from "@/components/shared/branch-card";
import { branches, findFeaturedBranches } from "@/lib/content";

export function BranchesStrip() {
  const featured = findFeaturedBranches();
  const rest = branches.filter((b) => !b.featured).slice(0, 3);
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Our branches"
            title={`Learn close to home — ${branches.length} branches`}
            sub="Same trainers, same curriculum and the same placement team at every centre."
          />
          <Button asChild variant="outline" className="shrink-0 self-start md:self-auto">
            <Link href="/branches">
              View all branches <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...featured, ...rest].slice(0, 6).map((b) => (
            <BranchCard key={b.slug} branch={b} featured={b.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}