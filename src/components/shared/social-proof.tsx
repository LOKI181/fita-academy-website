import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <div className="social-proof-pill">
      <div className="avatar-group" aria-hidden>
        {[
          { initial: "V", from: "#1d63ed", to: "#0b3fb0" },
          { initial: "L", from: "#3b82f6", to: "#1d63ed" },
          { initial: "S", from: "#6f9dff", to: "#3b82f6" },
          { initial: "J", from: "#0ea5e9", to: "#1d63ed" },
          { initial: "K", from: "#8b5cf6", to: "#1d63ed" },
        ].map((a) => (
          <span
            key={a.initial}
            className="avatar"
            style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
          >
            {a.initial}
          </span>
        ))}
      </div>
      <span className="font-semibold text-foreground">10K+ placed</span>
      <span className="h-3.5 w-px bg-border" aria-hidden />
      <span className="flex items-center gap-1">
        <Star className="size-3.5 fill-current text-primary" aria-hidden />
        <span className="font-semibold text-foreground">4.8</span>
        <span className="text-muted-foreground">rating</span>
      </span>
    </div>
  );
}