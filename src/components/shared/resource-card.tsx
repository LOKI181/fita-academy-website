import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import type { Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="surface group flex h-full flex-col p-6">
      <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
        <BookOpen className="size-3.5" aria-hidden />
        {resource.category}
        <span className="font-medium normal-case tracking-normal text-muted-foreground">
          · {resource.readTime}
        </span>
      </p>

      <h3 className="mt-3 font-heading text-base font-bold leading-snug tracking-tight text-foreground">
        <Link href={`/resources/${resource.slug}`} className="transition-colors hover:text-primary">
          {resource.title}
        </Link>
      </h3>

      <p className="mt-2.5 line-clamp-3 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">
        {resource.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-[0.72rem] text-muted-foreground">
        <time dateTime={resource.date}>{resource.date}</time>
        <Link
          href={`/resources/${resource.slug}`}
          aria-label={`Read ${resource.title}`}
          className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-primary"
        >
          Read
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}