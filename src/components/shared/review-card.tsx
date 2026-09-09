import { Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/shared/star-rating";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} />
          <Quote className="size-6 text-primary/20" aria-hidden />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
          <Avatar className="size-10 bg-primary">
            <AvatarFallback className="bg-primary/10 font-semibold text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {review.role} · {review.branch}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}