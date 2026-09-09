import { stats } from "@/lib/content";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function TrustBar() {
  return (
    <section aria-label="FITA in numbers" className="border-y border-border bg-muted/60">
      <StaggerContainer className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="flex flex-col items-center gap-1 px-4 py-3 text-center">
            <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {s.value}
            </span>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}