import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import type { Branch } from "@/lib/types";

export function BranchCard({ branch, featured = false }: { branch: Branch; featured?: boolean }) {
  return (
    <article className="surface group flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-base font-bold leading-snug tracking-tight text-foreground">
          FITA · {branch.area}, {branch.city}
        </h3>
        {featured ? (
          <span className="shrink-0 rounded-full border border-[color-mix(in_oklab,var(--primary)_25%,var(--border))] bg-[color-mix(in_oklab,var(--primary)_8%,transparent)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary">
            Featured
          </span>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2.5 text-[0.8125rem] text-muted-foreground">
        <li className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <span>{branch.address}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <Phone className="size-4 shrink-0 text-primary" aria-hidden />
          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-foreground"
          >
            {branch.phone}
          </a>
        </li>
        <li className="flex items-center gap-2.5">
          <Clock className="size-4 shrink-0 text-primary" aria-hidden />
          <span>{branch.hours}</span>
        </li>
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {branch.topCourses.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
          >
            {c}
          </span>
        ))}
        {branch.topCourses.length > 3 ? (
          <span className="rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-2.5 py-1 text-[0.7rem] font-semibold text-primary">
            +{branch.topCourses.length - 3} more
          </span>
        ) : null}
      </div>

      <div className="mt-auto pt-5">
        <Link
          href={`/branches/${branch.slug}`}
          aria-label={`Explore ${branch.area}, ${branch.city} branch`}
          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary"
        >
          Explore branch
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}