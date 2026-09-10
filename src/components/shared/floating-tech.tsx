"use client";

const techTags = [
  { label: "Java", x: "8%", y: "20%", delay: "0s" },
  { label: "React", x: "85%", y: "15%", delay: "0.5s" },
  { label: "Python", x: "5%", y: "70%", delay: "1s" },
  { label: "AWS", x: "88%", y: "65%", delay: "1.5s" },
  { label: "AI/ML", x: "75%", y: "85%", delay: "2s" },
  { label: "< />", x: "15%", y: "88%", delay: "2.5s" },
];

export function FloatingTech() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {techTags.map((tag) => (
        <span
          key={tag.label}
          className="absolute rounded-full border border-border/40 bg-background/60 px-3 py-1.5 text-xs font-semibold text-muted-foreground/60 backdrop-blur-sm"
          style={{
            left: tag.x,
            top: tag.y,
            animationDelay: tag.delay,
            animation: "float-gentle 5s ease-in-out infinite",
          }}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}
