import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid size-11 place-items-center overflow-hidden rounded-xl bg-primary text-primary-foreground">
        <Image
          src="/logo.png"
          alt="FITA Academy logo"
          width={44}
          height={44}
          className="size-full object-contain p-1.5"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-lg font-bold tracking-tight text-foreground">
          FITA <span className="text-primary">Academy</span>
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Focus&apos;d IT Academy
        </span>
      </span>
    </Link>
  );
}