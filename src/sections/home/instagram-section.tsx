import Link from "next/link";
import { Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function InstagramSection() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              eyebrow="Follow us"
              title="See us on Instagram"
              sub="Behind-the-scenes training moments, student projects and campus life."
            />
            <Button asChild variant="outline" className="shrink-0 self-start md:self-auto btn-press">
              <Link href="https://instagram.com/fitaacademy" target="_blank" rel="noopener noreferrer">
                <Camera className="mr-1.5 size-4" aria-hidden />
                @fitaacademy
              </Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="mt-10">
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
}
