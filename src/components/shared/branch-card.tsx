import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Branch } from "@/lib/types";

export function BranchCard({ branch, featured = false }: { branch: Branch; featured?: boolean }) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-base font-bold text-foreground">
            FITA · {branch.area}, {branch.city}
          </h3>
          {featured ? <Badge variant="outline">Featured</Badge> : null}
        </div>
        <div className="space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            {branch.address}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 shrink-0 text-primary" aria-hidden />
            {branch.phone}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden />
            {branch.hours}
          </p>
        </div>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {branch.topCourses.slice(0, 3).map((c) => (
            <span
              key={c}
              className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
          {branch.topCourses.length > 3 ? (
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
              +{branch.topCourses.length - 3} more
            </span>
          ) : null}
        </div>
        <div className="mt-auto pt-2">
          <Link
            href={`/branches/${branch.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            aria-label={`Explore ${branch.area}, ${branch.city} branch`}
          >
            Explore branch <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}