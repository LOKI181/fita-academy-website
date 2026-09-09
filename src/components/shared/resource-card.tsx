import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <BookOpen className="size-3.5 text-primary" aria-hidden />
          {resource.category} · {resource.readTime}
        </div>
        <h3 className="font-heading text-base font-bold leading-snug text-foreground">
          <Link href={`/resources/${resource.slug}`} className="hover:text-primary">
            {resource.title}
          </Link>
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {resource.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <time dateTime={resource.date}>{resource.date}</time>
          <Link
            href={`/resources/${resource.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            aria-label={`Read ${resource.title}`}
          >
            Read article <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}