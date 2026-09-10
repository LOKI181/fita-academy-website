import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function EditorialTypography() {
  const words = ["LEARN", "BUILD", "GROW"];

  return (
    <section className="section-editorial overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            {words.map((word, i) => (
              <p
                key={word}
                className="font-heading font-black tracking-tighter text-foreground/5 transition-colors duration-500 hover:text-foreground/10"
                style={{
                  fontSize: `clamp(3rem, ${12 - i * 2}vw, ${10 - i}rem)`,
                  lineHeight: 0.9,
                }}
              >
                {word}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
