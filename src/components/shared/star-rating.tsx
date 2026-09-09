import { Star } from "lucide-react";
import { cn } from "cn";

export function StarRating({
  rating,
  className,
  size = "size-4",
}: {
  rating: number;
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = rating >= i ? "fill-current text-primary" : "fill-none text-muted-foreground/40";
        return <Star key={i} className={cn(size, fill)} aria-hidden />;
      })}
    </span>
  );
}