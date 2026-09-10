"use client";

export function AmbientFloat() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Large gradient orbs */}
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        style={{ animation: "float-gentle 8s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent blur-3xl"
        style={{ animation: "float-gentle-alt 10s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-2xl"
        style={{ animation: "float-gentle 12s ease-in-out infinite" }}
      />
    </div>
  );
}
