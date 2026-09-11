import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function PremiumCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="hero-bg-text" aria-hidden style={{ color: "rgba(255,255,255,0.04)" }}>
        CAREER
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-16">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Ready to change
            <br />
            <span className="text-white/80">your career?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/70">
            120+ courses, 3000+ hiring partners, and a system that works.
            Your next chapter starts here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary transition-all hover:shadow-lg"
            >
              Explore Courses <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/enquire"
              className="btn-press inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
