import { describe, it, expect } from "vitest";

import { recommend } from "@/lib/recommend";

describe("recommend", () => {
  it("returns matching courses for a data science interest", () => {
    const results = recommend({
      background: "fresher",
      goal: "job",
      interest: "data science and machine learning",
      months: "6",
    });
    expect(results.length).toBeGreaterThan(0);
    const titles = results.map((r) => r.title);
    expect(titles.some((t) => /data/i.test(t) || /machine/i.test(t))).toBe(true);
  });

  it("returns courses for web development interest", () => {
    const results = recommend({
      background: "career-change",
      goal: "job",
      interest: "full stack web development",
      months: "6",
    });
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns an empty array for an unknown interest", () => {
    const results = recommend({
      background: "working",
      goal: "upskill",
      interest: "xyznonexistentfield",
      months: "3",
    });
    expect(Array.isArray(results)).toBe(true);
  });
});
