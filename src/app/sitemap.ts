import type { MetadataRoute } from "next";

import { brand, branches, courses, resources } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/courses",
    "/branches",
    "/placement",
    "/trainers",
    "/reviews",
    "/resources",
    "/programs",
    "/online-courses",
    "/success-stories",
    "/careers",
    "/become-instructor",
    "/business/corporate-training",
    "/business/hire-from-fita",
    "/demo",
    "/enquire",
    "/contact",
    "/about",
    "/career-assistant",
    "/login",
    "/register",
    "/privacy",
    "/terms",
    "/refund",
  ].map((path) => ({
    url: `${brand.domain}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${brand.domain}/course/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryRoutes = [...new Set(courses.map((c) => c.category))].map((slug) => ({
    url: `${brand.domain}/courses/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const branchRoutes = branches.map((b) => ({
    url: `${brand.domain}/branches/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${brand.domain}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...categoryRoutes,
    ...branchRoutes,
    ...resourceRoutes,
  ];
}