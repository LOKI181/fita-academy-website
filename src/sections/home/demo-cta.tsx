import Link from "next/link";
import { ArrowRight, MessageCircle, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/content";

export function DemoCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/20">
          <Video className="size-3.5" aria-hidden /> Free demo class · No credit card
        </span>
        <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          See how a FITA class works — before you commit
        </h2>
        <p className="max-w-xl text-white/80">
          Book a free demo with a trainer from any course. Walk into windows, leave
          with a learning roadmap and a course recommendation.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/demo">
              Book a Free Demo <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
          >
            <Link href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden /> Chat on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}