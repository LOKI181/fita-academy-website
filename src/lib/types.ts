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