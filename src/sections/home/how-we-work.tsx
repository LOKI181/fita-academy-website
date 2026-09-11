import { ScrollReveal } from "@/components/shared/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Define",
    text: "We start with a counselling session — your background, target role and timeline — then map the exact course track and batch that fits.",
  },
  {
    number: "02",
    title: "Learn",
    text: "Trainer-led sessions with live coding, assignments and doubt clearing. Weekday, weekend, classroom or live online.",
  },
  {
    number: "03",
    title: "Build",
    text: "You ship production-style projects to GitHub, review each other's code and get feedback the way a real engineering team works.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Resume rebuild, mock interviews, aptitude drills and direct referrals to our 3000+ hiring partners until you're placed.",
  },
];

export function HowWeWork() {
  return (
    <section className="section-pad relative overflow-hidden bg-mist">
      <div className="container-x">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Let us show you how we take you from
              <span className="gradient-text"> learning to hiring.</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Four clear stages. No guesswork, no filler modules — just the work
              that gets you interview-ready.
            </p>
          </div>
        </ScrollReveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.number} className="group bg-card">
              <ScrollReveal delay={i * 90}>
                <div className="relative flex h-full flex-col p-7 transition-colors duration-500 group-hover:bg-[var(--mist)] lg:p-8">
                  <span className="step-index" aria-hidden>
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>

                  {/* connector accent */}
                  <span
                    className="absolute right-0 top-0 hidden h-full w-px bg-border lg:block"
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-0 left-7 right-7 h-0.5 origin-left scale-x-0 bg-[linear-gradient(90deg,var(--azure),transparent)] transition-transform duration-500 group-hover:scale-x-100 lg:left-8 lg:right-8"
                    aria-hidden
                  />
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-center font-heading text-lg font-bold tracking-tight text-foreground/70">
            Ready to be delivered?
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}