import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

import { InstagramFeed } from "@/components/InstagramFeed";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function InstagramSection() {
  return (
    <section className="section-pad relative border-y border-border bg-mist">
      <div className="container-x">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Follow us</p>
              <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.03em] text-foreground sm:text-4xl">
                See us on <span className="gradient-text">Instagram</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Behind-the-scenes training moments, student projects, placement
                celebrations and campus life.
              </p>
            </div>
            <Link
              href="https://www.instagram.com/fita_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip group shrink-0 self-start px-4 py-2.5 transition-shadow hover:shadow-[var(--e2)] md:self-auto"
            >
              <Camera className="size-4" aria-hidden />
              @fita_academy
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-10">
            <InstagramFeed />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}