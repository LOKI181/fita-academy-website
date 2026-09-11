import { cn } from "cn";

/**
 * VisualFrame — a lightweight, SSR-safe, zero-network "designed image".
 * Renders an abstract brand composition (gradient mesh + geometry) so the
 * layout has premium visual weight without shipping raster assets.
 * Use `src` to swap in a real image later; the frame chrome stays the same.
 */
export function VisualFrame({
  variant = "aurora",
  className,
  label,
  children,
}: {
  variant?: "aurora" | "grid" | "orbit" | "wave";
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.75rem] border border-border bg-ink shadow-[var(--e4)]",
        className
      )}
      role="img"
      aria-label={label ?? "FITA Academy learning visual"}
    >
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#0b1220_0%,#0d1c3a_45%,#123a8f_100%)]" />

      {/* variant geometry */}
      {variant === "aurora" && (
        <>
          <div className="absolute -left-24 -top-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(29,99,237,0.75),transparent_65%)] blur-3xl" />
          <div className="absolute -bottom-32 -right-16 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(111,157,255,0.6),transparent_65%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_120%,rgba(255,255,255,0.14),transparent_60%)]" />
        </>
      )}

      {variant === "grid" && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,#000_35%,transparent_78%)]" />
          <div className="absolute -bottom-24 left-1/2 size-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,99,237,0.7),transparent_65%)] blur-3xl" />
        </>
      )}

      {variant === "orbit" && (
        <>
          <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
          <div className="absolute left-1/2 top-1/2 size-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,157,255,0.85),transparent_70%)] blur-2xl" />
          <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_10px_rgba(111,157,255,0.7)]" />
        </>
      )}

      {variant === "wave" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,transparent,rgba(29,99,237,0.55))]" />
          <div className="absolute -bottom-20 -left-20 size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(111,157,255,0.6),transparent_65%)] blur-3xl" />
        </>
      )}

      {/* film grain */}
      <div className="noise absolute inset-0" aria-hidden />

      {/* content slot */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">{children}</div>
    </div>
  );
}