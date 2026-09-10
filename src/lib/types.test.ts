import { describe, it, expect } from "vitest";

describe("Types", () => {
  it("should export all required types", async () => {
    const types = await import("@/lib/types");
    expect(types).toBeDefined();
  });

  it("Course type should have required fields", async () => {
    const { courses } = await import("@/lib/content");
    const course = courses[0];
    expect(course).toHaveProperty("slug");
    expect(course).toHaveProperty("title");
    expect(course).toHaveProperty("category");
    expect(course).toHaveProperty("level");
    expect(course).toHaveProperty("mode");
    expect(course).toHaveProperty("duration");
    expect(course).toHaveProperty("rating");
    expect(course).toHaveProperty("fees");
    expect(course).toHaveProperty("blurb");
    expect(course).toHaveProperty("topics");
    expect(course).toHaveProperty("placement");
  });

  it("Branch type should have required fields", async () => {
    const { branches } = await import("@/lib/content");
    const branch = branches[0];
    expect(branch).toHaveProperty("slug");
    expect(branch).toHaveProperty("city");
    expect(branch).toHaveProperty("area");
    expect(branch).toHaveProperty("address");
    expect(branch).toHaveProperty("phone");
    expect(branch).toHaveProperty("mapQuery");
  });

  it("MasterProgram type should have required fields", async () => {
    const { masterPrograms } = await import("@/lib/content");
    const prog = masterPrograms[0];
    expect(prog).toHaveProperty("slug");
    expect(prog).toHaveProperty("title");
    expect(prog).toHaveProperty("description");
    expect(prog).toHaveProperty("duration");
    expect(prog).toHaveProperty("courses");
    expect(prog).toHaveProperty("fees");
  });

  it("CareerOpening type should have required fields", async () => {
    const { careerOpenings } = await import("@/lib/content");
    const job = careerOpenings[0];
    expect(job).toHaveProperty("id");
    expect(job).toHaveProperty("title");
    expect(job).toHaveProperty("department");
    expect(job).toHaveProperty("location");
    expect(job).toHaveProperty("type");
    expect(job).toHaveProperty("experience");
    expect(job).toHaveProperty("description");
  });

  it("SuccessStory type should have required fields", async () => {
    const { successStories } = await import("@/lib/content");
    const story = successStories[0];
    expect(story).toHaveProperty("name");
    expect(story).toHaveProperty("course");
    expect(story).toHaveProperty("previousRole");
    expect(story).toHaveProperty("placedRole");
    expect(story).toHaveProperty("company");
    expect(story).toHaveProperty("quote");
  });
});
