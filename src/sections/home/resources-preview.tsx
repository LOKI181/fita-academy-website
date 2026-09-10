import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ResourceCard } from "@/components/shared/resource-card";
import { resources } from "@/lib/content";

export function ResourcesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          align="left"
          eyebrow="Resources"
          title="Career guides, written by our trainers"
          sub="Free roadmaps and interview tips to help you decide — before you enrol."
        />
        <Button asChild variant="outline" className="shrink-0 self-start md:self-auto">
          <Link href="/resources">
            All resources <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {resources.slice(0, 3).map((r) => (
          <ResourceCard key={r.slug} resource={r} />
        ))}
      </div>
    </section>
  );
}