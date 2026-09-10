import { Star } from "lucide-react";

const avatarColors = ["bg-primary", "bg-success", "bg-accent-foreground", "bg-chart-2"];
const avatarInitials = ["V", "L", "S", "J"];

export function SocialProof() {
  return (
    <div className="social-proof-pill">
      <div className="avatar-group">
        {avatarInitials.map((initial, i) => (
          <span
            key={initial}
            className={`avatar ${avatarColors[i]}`}
          >
            {initial}
          </span>
        ))}
      </div>
      <span>100K+ learners across India</span>
      <span className="mx-1 text-muted-foreground/30">|</span>
      <span className="flex items-center gap-1">
        <Star className="size-3.5 fill-current text-primary" aria-hidden />
        4.8
      </span>
    </div>
  );
}
