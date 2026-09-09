import type { User, Enrollment, StoreBatch, Certificate } from "@/lib/types";

export type StoredData = {
  users: User[];
  enrollments: Enrollment[];
  batches: StoreBatch[];
  certificates: Certificate[];
  enquiries: Record<string, unknown>[];
};

let cache: StoredData | null = null;

const defaultBatches = [
  {
    id: "batch-demo-1",
    courseSlug: "java-full-stack",
    courseName: "Java Full Stack",
    mode: "classroom",
    branch: "Anna Nagar, Chennai",
    start: "2026-09-15",
    days: "Mon–Fri",
    slots: "7:00 AM & 9:00 AM",
    seatsTotal: 25,
    seatsLeft: 6,
    status: "upcoming" as const,
  },
  {
    id: "batch-demo-2",
    courseSlug: "data-science",
    courseName: "Data Science & ML",
    mode: "classroom",
    branch: "Velachery, Chennai",
    start: "2026-09-15",
    days: "Mon–Fri",
    slots: "6:30 PM – 9:00 PM",
    seatsTotal: 25,
    seatsLeft: 4,
    status: "upcoming" as const,
  },
];

function seed(): StoredData {
  return {
    users: [],
    enrollments: [],
    batches: defaultBatches,
    certificates: [],
    enquiries: [],
  };
}

export async function getStore(): Promise<StoredData> {
  if (cache) return cache;
  await hydrate();
  return cache!;
}

export async function setStore(mutator: (draft: StoredData) => void): Promise<StoredData> {
  const data = await getStore();
  mutator(data);
  cache = data;
  await persist();
  return data;
}

async function hydrate(): Promise<void> {
  try {
    const { readFile } = await import("node:fs/promises");
    const path = await import("node:path");
    const file = path.join(process.cwd(), ".data", "store.json");
    const raw = await readFile(file, "utf8");
    const parsed = JSON.parse(raw) as Partial<StoredData>;
    cache = {
      ...seed(),
      ...parsed,
      batches: parsed.batches?.length ? parsed.batches : defaultBatches,
    };
  } catch {
    cache = seed();
    await persist();
  }
}

async function persist(): Promise<void> {
  try {
    const { mkdir, writeFile } = await import("node:fs/promises");
    const path = await import("node:path");
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "store.json"), JSON.stringify(cache, null, 2), "utf8");
  } catch {
    // best-effort persistence
  }
}

export function publicUser(u: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...safe } = u;
  return safe;
}