import type { Course } from "@/lib/types";
import { courses } from "@/lib/content";

type Answers = {
  background: "fresher" | "working" | "career-change";
  goal: "job" | "promotion" | "startup" | "upskill";
  interest: string;
  months: string;
};

const interestToCategory: Record<string, string[]> = {
  programming: ["software-development"],
  software: ["software-development"],
  coding: ["software-development"],
  web: ["software-development"],
  java: ["software-development"],
  python: ["software-development", "data-science-ai"],
  development: ["software-development"],
  data: ["data-science-ai"],
  machine: ["data-science-ai"],
  "artificial intelligence": ["data-science-ai"],
  ai: ["data-science-ai", "generative-ai"],
  analytics: ["data-science-ai"],
  science: ["data-science-ai"],
  cloud: ["cloud-devops"],
  aws: ["cloud-devops"],
  azure: ["cloud-devops"],
  devops: ["cloud-devops"],
  test: ["testing-qa"],
  qa: ["testing-qa"],
  automation: ["testing-qa", "software-development"],
  design: ["ui-ux"],
  ui: ["ui-ux"],
  ux: ["ui-ux"],
  marketing: ["digital-marketing"],
  digital: ["digital-marketing"],
  seo: ["digital-marketing"],
  sales: ["digital-marketing"],
  excel: ["microsoft-office"],
  microsoft: ["microsoft-office"],
  office: ["microsoft-office"],
  generative: ["generative-ai"],
  security: ["cybersecurity"],
  networking: ["cybersecurity"],
  cyber: ["cybersecurity"],
};

function scoreCourse(course: Course, answers: Answers): number {
  let score = 0;

  const catMatches = Object.entries(interestToCategory).some(([kw, cats]) =>
    course.category && answers.interest.toLowerCase().includes(kw) && cats.includes(course.category)
  );
  if (catMatches) score += 8;

  const titleKeywords = answers.interest.toLowerCase().split(/\s+/);
  for (const kw of titleKeywords) {
    if (course.title.toLowerCase().includes(kw) || course.topics.some((t) => t.toLowerCase().includes(kw))) {
      score += 3;
    }
  }

  if (answers.background === "fresher" && course.level === "Beginner") score += 2;
  if (answers.background === "career-change" && course.level === "Beginner") score += 1;
  if (answers.background === "working") score += 0;

  const months = parseInt(answers.months, 10) || 3;
  const durationMonths = Math.min(9, Math.max(1, Math.round(course.hours / 40)));
  if (durationMonths <= months) score += 2;

  return score;
}

export function recommend(answers: Answers): Course[] {
  return courses
    .map((c) => ({ course: c, score: scoreCourse(c, answers) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.course);
}