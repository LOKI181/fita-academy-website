import { ScrollReveal } from "@/components/shared/scroll-reveal";

const services = [
  "Java Full Stack",
  "Python Development",
  "Data Science",
  "Cloud & DevOps",
  "Software Testing",
  "UI/UX Design",
  "Digital Marketing",
  "Cyber Security",
];

export function ServiceTags() {
  return (
    <section className="py-8 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/70 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
