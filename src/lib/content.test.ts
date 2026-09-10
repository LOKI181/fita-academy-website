import { describe, it, expect } from "vitest";

describe("Brand content", () => {
  it("should have brand name and domain", async () => {
    const { brand } = await import("@/lib/content");
    expect(brand.name).toBe("FITA Academy");
    expect(brand.domain).toContain("https://");
  });

  it("should have at least 10 courses", async () => {
    const { courses } = await import("@/lib/content");
    expect(courses.length).toBeGreaterThanOrEqual(10);
  });

  it("should have at least 8 branches", async () => {
    const { branches } = await import("@/lib/content");
    expect(branches.length).toBeGreaterThanOrEqual(8);
  });

  it("should have at least 6 master programs", async () => {
    const { masterPrograms } = await import("@/lib/content");
    expect(masterPrograms.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 6 career openings", async () => {
    const { careerOpenings } = await import("@/lib/content");
    expect(careerOpenings.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 6 success stories", async () => {
    const { successStories } = await import("@/lib/content");
    expect(successStories.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 12 placement records", async () => {
    const { placementRecords } = await import("@/lib/content");
    expect(placementRecords.length).toBeGreaterThanOrEqual(12);
  });

  it("should have at least 6 categories", async () => {
    const { categories } = await import("@/lib/content");
    expect(categories.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 6 trainers", async () => {
    const { trainers } = await import("@/lib/content");
    expect(trainers.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 6 reviews", async () => {
    const { reviews } = await import("@/lib/content");
    expect(reviews.length).toBeGreaterThanOrEqual(6);
  });

  it("should have at least 5 home FAQs", async () => {
    const { homeFaqs } = await import("@/lib/content");
    expect(homeFaqs.length).toBeGreaterThanOrEqual(5);
  });

  it("should have at least 5 sample batches", async () => {
    const { sampleBatches } = await import("@/lib/content");
    expect(sampleBatches.length).toBeGreaterThanOrEqual(5);
  });

  it("getCourse should return course by slug", async () => {
    const { getCourse } = await import("@/lib/content");
    const course = getCourse("java-full-stack");
    expect(course).toBeDefined();
    expect(course?.title).toContain("Java");
  });

  it("getCourse should return undefined for unknown slug", async () => {
    const { getCourse } = await import("@/lib/content");
    const course = getCourse("nonexistent-course");
    expect(course).toBeUndefined();
  });

  it("getBranch should return branch by slug", async () => {
    const { getBranch } = await import("@/lib/content");
    const branch = getBranch("anna-nagar-chennai");
    expect(branch).toBeDefined();
    expect(branch?.city).toBe("Chennai");
  });

  it("getCategory should return category by slug", async () => {
    const { getCategory } = await import("@/lib/content");
    const cat = getCategory("software-development");
    expect(cat).toBeDefined();
    expect(cat?.title).toContain("Software");
  });
});
