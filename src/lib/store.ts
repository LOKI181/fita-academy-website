import type { User, Enrollment, StoreBatch, Certificate } from "@/lib/types";
import { supabase } from "./supabase";

export type StoredData = {
  users: User[];
  enrollments: Enrollment[];
  batches: StoreBatch[];
  certificates: Certificate[];
  enquiries: Record<string, unknown>[];
};

const defaultBatches: StoreBatch[] = [
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
    status: "upcoming",
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
    status: "upcoming",
  },
];

let memoryCache: StoredData | null = null;

export async function getStore(): Promise<StoredData> {
  if (memoryCache) return memoryCache;

  try {
    const [usersRes, enrolRes, certRes, enqRes] = await Promise.all([
      supabase.from("users").select("*"),
      supabase.from("enrollments").select("*"),
      supabase.from("certificates").select("*"),
      supabase.from("enquiries").select("*"),
    ]);

    // Log Supabase errors for debugging
    if (usersRes.error) console.error("[store:users]", usersRes.error.message);
    if (enrolRes.error) console.error("[store:enrollments]", enrolRes.error.message);
    if (certRes.error) console.error("[store:certificates]", certRes.error.message);
    if (enqRes.error) console.error("[store:enquiries]", enqRes.error.message);

    const users = (usersRes.data || []).map((u: Record<string, unknown>) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      role: u.role,
      passwordHash: u.password_hash,
      createdAt: u.created_at,
      avatarName: u.avatar_name,
    })) as User[];

    memoryCache = {
      users,
      enrollments: enrolRes.data as Enrollment[] || [],
      batches: defaultBatches,
      certificates: certRes.data as Certificate[] || [],
      enquiries: enqRes.data as Record<string, unknown>[] || [],
    };
  } catch (err) {
    console.error("[store:connect]", err);
    memoryCache = {
      users: [],
      enrollments: [],
      batches: defaultBatches,
      certificates: [],
      enquiries: [],
    };
  }

  return memoryCache;
}

export async function addUser(user: User): Promise<void> {
  const { error } = await supabase.from("users").insert({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    password_hash: user.passwordHash,
    created_at: user.createdAt,
  });
  if (error) throw error;
  memoryCache = null;
}

export async function addEnquiry(enquiry: Record<string, unknown>): Promise<void> {
  const { error } = await supabase.from("enquiries").insert({
    intent: enquiry.intent ?? "enquiry",
    name: enquiry.name,
    phone: enquiry.phone,
    email: enquiry.email,
    branch: enquiry.branch ?? "",
    course: enquiry.course ?? "",
    mode: enquiry.mode ?? "",
    message: enquiry.message ?? "",
    page_path: enquiry.pagePath ?? "",
    ip_hash: enquiry.ip_hash ?? "",
    created_at: enquiry.created_at ?? new Date().toISOString(),
  });
  if (error) throw error;
  memoryCache = null;
}

export async function addEnrollment(enrollment: Enrollment): Promise<void> {
  const { error } = await supabase.from("enrollments").insert(enrollment);
  if (error) throw error;
  memoryCache = null;
}

export async function addCertificate(certificate: Certificate): Promise<void> {
  const { error } = await supabase.from("certificates").insert(certificate);
  if (error) throw error;
  memoryCache = null;
}

export async function verifyCertificate(certificateNumber: string): Promise<Certificate | null> {
  const { data, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("certificate_number", certificateNumber)
    .single();

  if (error) return null;
  return data as Certificate;
}

export async function setStore(mutator: (draft: StoredData) => void): Promise<StoredData> {
  const data = await getStore();
  mutator(data);
  memoryCache = data;
  return data;
}

export function publicUser(u: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...safe } = u;
  return safe;
}