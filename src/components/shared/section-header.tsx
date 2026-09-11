import { cn } from "cn";

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <span className="chip">{eyebrow}</span> : null}
      <h2 className="mt-4 font-heading text-[1.75rem] font-black leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}