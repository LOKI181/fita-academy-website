import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
      {/* Avatar group */}
      <div className="flex -space-x-2">
        {["V", "L", "S", "J", "K"].map((initial, i) => (
          <span
            key={initial}
            className="flex size-7 items-center justify-center rounded-full border-2 border-background bg-primary text-[10px] font-bold text-primary-foreground"
            style={{ zIndex: 5 - i }}
          >
            {initial}
          </span>
        ))}
      </div>
      <span className="text-sm font-medium text-foreground">
        10K+ placed students
      </span>
      <span className="text-border">|</span>
      <span className="flex items-center gap-1 text-sm">
        <Star className="size-3.5 fill-current text-primary" aria-hidden />
        4.8
      </span>
    </div>
  );
}
