import { Code2, Terminal, Video, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const features = [
  {
    icon: Code2,
    title: "Industry-Ready Learning",
    text: "Practical courses built around real-world projects and current industry standards.",
  },
  {
    icon: Terminal,
    title: "Expert Trainers",
    text: "Learn from practitioners with 9-15 years of hands-on industry experience.",
  },
  {
    icon: Video,
    title: "Live & Classroom Sessions",
    text: "Interactive sessions with real-time Q&A, recordings and flexible scheduling.",
  },
  {
    icon: TrendingUp,
    title: "Placement Support",
    text: "Resume, mock interviews and direct referrals to 3000+ hiring partners.",
  },
];

export function WhyFita() {
  return (
    <section className="relative py-14 md:py-18 bg-background border-t border-border/40">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 block">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Why <span className="text-primary">FITA Academy</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Everything you need to build a real IT career and get placed.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-secondary border border-border/80 hover:border-primary/50 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,237,100,0.08)] group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-background border border-border rounded-xl w-fit text-primary mb-4 group-hover:border-primary/40 transition-colors">
                    <f.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
