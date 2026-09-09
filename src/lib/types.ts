export type Category = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  icon: string;
  courses: number;
};

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  mode: ("Classroom" | "Live Online")[];
  duration: string;
  rating: number;
  reviews: number;
  students: number;
  hours: number;
  badge?: string;
  fees: string;
  blurb: string;
  topics: string[];
  placement: string;
};

export type Branch = {
  slug: string;
  city: string;
  area: string;
  address: string;
  landmark: string;
  phone: string;
  hours: string;
  modes: string[];
  topCourses: string[];
  featured?: boolean;
  mapQuery: string;
};

export type Trainer = {
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  batches: number;
  students: number;
  rating: number;
};

export type Review = {
  name: string;
  role: string;
  branch: string;
  rating: number;
  text: string;
  course: string;
};

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export type Batch = {
  course: string;
  mode: string;
  start: string;
  days: string;
  slots: string;
  seats: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Role = "student" | "trainer" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  passwordHash: string;
  createdAt: string;
  avatarName?: string;
};

export type PublicUser = Omit<User, "passwordHash">;

export type Enrollment = {
  id: string;
  userId: string;
  courseSlug: string;
  courseTitle: string;
  batchId: string;
  status: "pending" | "active" | "completed";
  progressPct: number;
  enrolledAt: string;
  paymentStatus: "none" | "pending" | "paid";
};

export type StoreBatch = {
  id: string;
  courseSlug: string;
  courseName: string;
  mode: string;
  branch: string;
  start: string;
  days: string;
  slots: string;
  seatsTotal: number;
  seatsLeft: number;
  status: "upcoming" | "running" | "completed";
};

export type Certificate = {
  id: string;
  certId: string;
  userId: string;
  userName: string;
  courseTitle: string;
  courseSlug: string;
  issuedAt: string;
  trainerName: string;
  hours: number;
};
