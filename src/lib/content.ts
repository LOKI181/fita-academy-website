import type {
  Batch,
  Branch,
  Category,
  Course,
  Faq,
  Resource,
  Review,
  Trainer,
} from "@/lib/types";

export const brand = {
  name: "FITA Academy",
  tagline: "Focus'd IT Academy",
  phone: "+91 44 4853 4050",
  whatsapp: "https://wa.me/919840094000?text=Hi%20FITA%2C%20I%20want%20to%20know%20more%20about%20courses",
  email: "enquiry@fitaacademy.in",
  cities: 8,
  domain: "https://fita-academy-website.vercel.app",
};

export const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Branches", href: "/branches" },
  { label: "Placement", href: "/placement" },
  { label: "Trainers", href: "/trainers" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/resources" },
];

export const stats = [
  { value: "25+", label: "Years of training" },
  { value: "120+", label: "Industry-aligned courses" },
  { value: "10k+", label: "Students placed" },
  { value: "8+", label: "Cities & branches" },
];

export const categories: Category[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Software",
    blurb:
      "From Java and Python foundations to full-stack engineering with React and Node.js — build production-grade applications.",
    icon: "code",
    courses: 32,
  },
  {
    slug: "data-science-ai",
    title: "Data Science & AI",
    short: "Data & AI",
    blurb:
      "Statistics, machine learning, deep learning and the latest in Generative AI and BI tooling — turn data into decisions.",
    icon: "brain",
    courses: 14,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Cloud",
    blurb:
      "Automate and ship like a platform team — infrastructure as code, CI/CD pipelines and observability.",
    icon: "cloud",
    courses: 12,
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    short: "Testing",
    blurb:
      "Manual, automation and performance testing with real project scenarios and complete interview prep.",
    icon: "shield",
    courses: 12,
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    short: "UI/UX",
    blurb:
      "Design thinking, wireframing, Figma and usability — craft products people love to use.",
    icon: "pen",
    courses: 8,
  },
  {
    slug: "networking-security",
    title: "Networking & Security",
    short: "Network",
    blurb:
      "Essential network engineering and cyber security skills from CCNA basics to ethical hacking.",
    icon: "lock",
    courses: 11,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Marketing",
    blurb:
      "SEO, performance marketing, social media and analytics — grow brands measurably.",
    icon: "megaphone",
    courses: 10,
  },
  {
    slug: "languages-tools",
    title: "Languages & Others",
    short: "Languages",
    blurb:
      "Spoken English, communication skills, Excel and more — the career multipliers beyond code.",
    icon: "languages",
    courses: 9,
  },
];

const baseCourses: Omit<Course, "category">[] = [
  {
    slug: "java-full-stack",
    title: "Java Full Stack Development",
    level: "All Levels",
    mode: ["Classroom", "Live Online"],
    duration: "6 Months",
    rating: 4.9,
    reviews: 184,
    students: 1280,
    hours: 240,
    badge: "Most Popular",
    fees: "₹45,000",
    blurb:
      "Core Java, Advanced Java, Hibernate, Spring Boot, REST APIs, Microservices and front-end with React — the complete enterprise stack recruiters ask for.",
    topics: [
      "Core Java & OOPs",
      "Advanced Java (JDBC, Servlets, JSP)",
      "Hibernate & JPA",
      "Spring Core, Spring Boot",
      "REST APIs & Microservices",
      "React + Redux",
      "HTML5, CSS3, Tailwind",
      "SQL & MySQL / PostgreSQL",
      "Git, Maven, Jenkins",
      "Mock Interviews + Project",
    ],
    placement: "Dedicated placement support with 10k+ alumni network across product and service companies.",
  },
  {
    slug: "python-full-stack",
    title: "Python Full Stack Development",
    level: "All Levels",
    mode: ["Classroom", "Live Online"],
    duration: "6 Months",
    rating: 4.9,
    reviews: 162,
    students: 1140,
    hours: 240,
    badge: "Top Rated",
    fees: "₹45,000",
    blurb:
      "Python from basics to Django and Flask, database design, REST APIs and front-end — build and ship full-stack applications.",
    topics: [
      "Python Core & OOPs",
      "Data Structures",
      "Django Framework",
      "Flask & REST APIs",
      "React Frontend",
      "MySQL & PostgreSQL",
      "Git & GitHub",
      "Deployment (VPS, Docker)",
      "Agile & Project Work",
    ],
    placement: "Alumni placed in product & service companies with real project portfolios.",
  },
  {
    slug: "react-node-full-stack",
    title: "React & Node.js Full Stack (MERN)",
    level: "Intermediate",
    mode: ["Classroom", "Live Online"],
    duration: "5 Months",
    rating: 4.8,
    reviews: 95,
    students: 820,
    hours: 200,
    badge: "Trending",
    fees: "₹42,000",
    blurb:
      "JavaScript end-to-end — React, Redux, Node.js, Express, MongoDB and modern deployment. Build single-page and server-side APIs.",
    topics: [
      "JavaScript (ES6+)",
      "React 18 & Hooks",
      "Redux Toolkit",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "REST & JWT Auth",
      "Firebase & Next.js basics",
      "Deployment & DevOps basics",
    ],
    placement: "Placement support with portfolio + GitHub profile grooming.",
  },
  {
    slug: "data-science",
    title: "Data Science & Machine Learning",
    level: "Intermediate",
    mode: ["Classroom", "Live Online"],
    duration: "6 Months",
    rating: 4.9,
    reviews: 141,
    students: 930,
    hours: 220,
    badge: "Most Popular",
    fees: "₹50,000",
    blurb:
      "Statistics, Python, machine learning, deep learning and Gen AI — with industry projects and Kaggle-style problem solving.",
    topics: [
      "Python & Pandas, NumPy",
      "Statistics & Probability",
      "Data Visualization (Matplotlib, Power BI)",
      "Machine Learning (Scikit-learn)",
      "Deep Learning (TensorFlow / PyTorch)",
      "NLP & Generative AI",
      "MLOps basics",
      "Capstone Projects",
    ],
    placement: "Data analyst / ML engineer track with placement support.",
  },
  {
    slug: "aws-cloud-devops",
    title: "AWS & DevOps",
    level: "Intermediate",
    mode: ["Classroom", "Live Online"],
    duration: "4 Months",
    rating: 4.8,
    reviews: 88,
    students: 760,
    hours: 160,
    badge: "High Demand",
    fees: "₹38,000",
    blurb:
      "Zero-to-cloud — Linux, AWS core services, Terraform, Docker, Kubernetes and CI/CD pipelines to operate like a platform engineer.",
    topics: [
      "Linux & Bash",
      "AWS Core (EC2, S3, VPC, IAM, RDS)",
      "Infrastructure as Code (Terraform)",
      "Docker & Containerization",
      "Kubernetes Essentials",
      "CI/CD (Jenkins, GitHub Actions)",
      "Monitoring & Logging",
      "Cloud Projects",
    ],
    placement: "Cloud/DevOps engineer track for cloud entry roles.",
  },
  {
    slug: "full-stack-testing",
    title: "Software Testing & Automation",
    level: "All Levels",
    mode: ["Classroom", "Live Online"],
    duration: "3 Months",
    rating: 4.8,
    reviews: 74,
    students: 640,
    hours: 120,
    badge: "Quick Start",
    fees: "₹25,000",
    blurb:
      "Manual testing foundations, test case design, Selenium WebDriver, Java basics and API testing — the complete QA career track.",
    topics: [
      "SDLC & STLC",
      "Manual Testing & Test Cases",
      "SQL for Testers",
      "Java for Automation",
      "Selenium WebDriver",
      "TestNG & Framework Design",
      "API Testing (Postman, Rest Assured)",
      "Agile & JIRA",
    ],
    placement: "QA/Test engineer openings with real-time project case studies.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Mastery",
    level: "All Levels",
    mode: ["Classroom", "Live Online"],
    duration: "3 Months",
    rating: 4.7,
    reviews: 61,
    students: 520,
    hours: 120,
    fees: "₹22,000",
    blurb:
      "SEO, Google & Meta ads, social media, content, email and analytics — a complete, job-ready digital marketing skill set.",
    topics: [
      "Digital Marketing Fundamentals",
      "SEO & Content Strategy",
      "Google & Meta Ads",
      "Social Media Marketing",
      "Email & Automation",
      "Google Analytics 4",
      "Copywriting Basics",
      "Live Campaign Projects",
    ],
    placement: "Portfolio + internship placement assistance.",
  },
  {
    slug: "ui-ux-design-course",
    title: "UI / UX Design & Figma",
    level: "All Levels",
    mode: ["Classroom", "Live Online"],
    duration: "3 Months",
    rating: 4.7,
    reviews: 52,
    students: 410,
    hours: 120,
    fees: "₹24,000",
    blurb:
      "Design thinking, wireframing, prototyping and usability testing in Figma — create product-ready interfaces with a case-study portfolio.",
    topics: [
      "UX Fundamentals & User Research",
      "Wireframing & IA",
      "Visual Design & Typography",
      "Figma Mastery",
      "Prototyping & Handoff",
      "Usability Testing",
      "Design Systems Basics",
      "Portfolio Projects",
    ],
    placement: "UX/UI design roles and freelance portfolio guidance.",
  },
  {
    slug: "cyber-security-ethical-hacking",
    title: "Cyber Security & Ethical Hacking",
    level: "Intermediate",
    mode: ["Classroom", "Live Online"],
    duration: "4 Months",
    rating: 4.8,
    reviews: 47,
    students: 380,
    hours: 140,
    fees: "₹35,000",
    blurb:
      "Networking fundamentals, Linux security, offensive and defensive techniques with lab-based ethical hacking practice.",
    topics: [
      "Network Essentials",
      "Linux & Scripting",
      "Web App Security (OWASP)",
      "Ethical Hacking Labs (Kali)",
      "Penetration Testing Basics",
      "Security Tools & SIEM basics",
      "CTF Challenges",
    ],
    placement: "Security analyst entry roles with hands-on lab portfolio.",
  },
  {
    slug: "generative-ai",
    title: "Generative AI & LLMs",
    level: "Intermediate",
    mode: ["Classroom", "Live Online"],
    duration: "2 Months",
    rating: 4.9,
    reviews: 39,
    students: 310,
    hours: 80,
    badge: "New",
    fees: "₹28,000",
    blurb:
      "Prompt engineering, LLM APIs, RAG pipelines, fine-tuning, agents and AI product thinking — build and deploy AI applications.",
    topics: [
      "AI & LLM Fundamentals",
      "Prompt Engineering",
      "OpenAI & Open Models (APIs)",
      "RAG & Vector Databases",
      "Fine-tuning Basics",
      "AI Agents & Tools",
      "Ethics & Evaluation",
      "Build a Deployed AI App",
    ],
    placement: "AI engineer / applied GenAI assistant roles.",
  },
  {
    slug: "production-support-dba",
    title: "Production Support & DBA",
    level: "Beginner",
    mode: ["Classroom", "Live Online"],
    duration: "3 Months",
    rating: 4.6,
    reviews: 28,
    students: 250,
    hours: 110,
    fees: "₹20,000",
    blurb:
      "SQL, database administration, ITIL-based support workflows and ticketing — the entry path into production support roles.",
    topics: [
      "SQL & Database Concepts",
      "MySQL / PostgreSQL Administration",
      "Unix/Linux Basics",
      "ITIL & Incident Management",
      "Monitoring Tools",
      "Ticketing (ServiceNow basics)",
    ],
    placement: "Production support, L1/L2 support openings.",
  },
  {
    slug: "spoken-english-communication",
    title: "Spoken English & Communication",
    level: "Beginner",
    mode: ["Classroom", "Live Online"],
    duration: "2 Months",
    rating: 4.6,
    reviews: 44,
    students: 560,
    hours: 48,
    fees: "₹8,000",
    blurb:
      "Confidence-building spoken English for interviews, workplaces and daily life — grammar-to-fluency with conversational practice.",
    topics: [
      "Grammar Basics to Fluency",
      "Vocabulary Building",
      "Interview Communication",
      "Email & Workplace English",
      "Public Speaking Basics",
      "Conversation Practice",
    ],
    placement: "Interview preparation support across all courses.",
  },
];

const courseCategory: Record<string, string> = {
  "java-full-stack": "software-development",
  "python-full-stack": "software-development",
  "react-node-full-stack": "software-development",
  "data-science": "data-science-ai",
  "generative-ai": "data-science-ai",
  "aws-cloud-devops": "cloud-devops",
  "full-stack-testing": "software-testing",
  "cyber-security-ethical-hacking": "networking-security",
  "digital-marketing": "digital-marketing",
  "ui-ux-design-course": "ui-ux-design",
  "production-support-dba": "languages-tools",
  "spoken-english-communication": "languages-tools",
};

export const courses: Course[] = baseCourses.map((c) => ({
  ...c,
  category: courseCategory[c.slug] ?? "software-development",
}));

export const branches: Branch[] = [
  {
    slug: "anna-nagar-chennai",
    city: "Chennai",
    area: "Anna Nagar",
    address: "No 7, 2nd Avenue, Anna Nagar West, Chennai — 600040",
    landmark: "3 min from Anna Nagar Roundtana",
    phone: "+91 44 4853 4050",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Java Full Stack", "Python Full Stack", "Data Science", "AWS", "React"],
    featured: true,
    mapQuery: "FITA Academy Anna Nagar Chennai",
  },
  {
    slug: "velachery-chennai",
    city: "Chennai",
    area: "Velachery",
    address: "No 21, 100 Feet Road, Velachery, Chennai — 600042",
    landmark: "Opposite Phoenix MarketCity",
    phone: "+91 44 4853 4051",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Python Full Stack", "Data Science", "Manual Testing", "UI / UX Design"],
    featured: true,
    mapQuery: "FITA Academy Velachery Chennai",
  },
  {
    slug: "coimbatore",
    city: "Coimbatore",
    area: "Peelamedu",
    address: "No 15, Avinashi Road, Peelamedu, Coimbatore — 641004",
    landmark: "Near Codissia Trade Fair Complex",
    phone: "+91 44 4853 4052",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Java Full Stack", "Python Full Stack", "Data Science", "AWS"],
    mapQuery: "FITA Academy Coimbatore",
  },
  {
    slug: "madurai",
    city: "Madurai",
    area: "Anna Nagar",
    address: "No 8, 80 Feet Road, Anna Nagar, Madurai — 625020",
    landmark: "Near Aarapalayam bus stop",
    phone: "+91 44 4853 4053",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Python Full Stack", "Data Science", "Java", "Manual Testing"],
    mapQuery: "FITA Academy Madurai",
  },
  {
    slug: "trichy",
    city: "Trichy",
    area: "Tennur",
    address: "No 33, Rock Fort Road, Tennur, Trichy — 620017",
    landmark: "Near Collectorate office",
    phone: "+91 44 4853 4054",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Java Full Stack", "Python", "Data Science", "Testing"],
    mapQuery: "FITA Academy Trichy",
  },
  {
    slug: "salem",
    city: "Salem",
    area: "Salem Junction",
    address: "No 27, Junction Main Road, Salem — 636005",
    landmark: "Opposite Salem Junction Railway Station",
    phone: "+91 44 4853 4055",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Python Full Stack", "Java", "Tally", "Spoken English"],
    mapQuery: "FITA Academy Salem",
  },
  {
    slug: "erode",
    city: "Erode",
    area: "Perundurai Road",
    address: "No 12, Perundurai Road, Erode — 638011",
    landmark: "Near Erode Central Bus Terminus",
    phone: "+91 44 4853 4056",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Python Full Stack", "Data Science", "Digital Marketing"],
    mapQuery: "FITA Academy Erode",
  },
  {
    slug: "pondicherry",
    city: "Pondicherry",
    area: "Vazhudavur Road",
    address: "No 4, 100 Feet Road, Vazhudavur Road, Pondicherry — 605010",
    landmark: "Near Jipmer College",
    phone: "+91 44 4853 4057",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["Python Full Stack", "Data Science", "Java", "Full Stack Testing"],
    mapQuery: "FITA Academy Pondicherry",
  },
  {
    slug: "tiruppur",
    city: "Tiruppur",
    area: "Bharathi Nagar",
    address: "No 19, Court Street, Tiruppur — 641601",
    landmark: "Near Tiruppur Railway Station",
    phone: "+91 44 4853 4058",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["React & Node", "Python", "Digital Marketing", "Tally"],
    mapQuery: "FITA Academy Tiruppur",
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    area: "HSR Layout",
    address: "No 27, 27th Main Road, HSR Layout, Sector 1, Bangalore — 560102",
    landmark: "Near HSR BDA Complex",
    phone: "+91 44 4853 4059",
    hours: "Mon–Sat, 9:00 AM – 8:30 PM",
    modes: ["Classroom", "Live Online"],
    topCourses: ["React & Node", "Data Science", "AWS DevOps", "UI / UX"],
    featured: true,
    mapQuery: "FITA Academy Bangalore",
  },
];

export const partnerLogos = [
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "Cognizant",
  "CTS",
  "Zoho",
  "HCL",
];

export const partnerStats = [
  { value: "10k+", label: "Students placed" },
  { value: "100+", label: "Hiring partners" },
  { value: "5/5", label: "Placement support rating" },
  { value: "25+", label: "Years of training" },
];

export const trainers: Trainer[] = [
  {
    name: "Saravanan R",
    role: "Java & Full Stack Lead Trainer",
    expertise: ["Java", "Spring Boot", "React"],
    experience: "14+ years",
    batches: 120,
    students: 2400,
    rating: 4.9,
  },
  {
    name: "Divya K",
    role: "Data Science & AI Trainer",
    expertise: ["Python", "ML", "Gen AI"],
    experience: "11+ years",
    batches: 96,
    students: 1800,
    rating: 4.9,
  },
  {
    name: "Arun Prakash M",
    role: "Cloud & DevOps Trainer",
    expertise: ["AWS", "Kubernetes", "Terraform"],
    experience: "12+ years",
    batches: 88,
    students: 1500,
    rating: 4.8,
  },
  {
    name: "Priya S",
    role: "Software Testing Lead",
    expertise: ["Selenium", "API Testing", "Frameworks"],
    experience: "10+ years",
    batches: 75,
    students: 1300,
    rating: 4.8,
  },
  {
    name: "Karthik V",
    role: "Full Stack (MERN) Trainer",
    expertise: ["React", "Node.js", "MongoDB"],
    experience: "9+ years",
    batches: 70,
    students: 1200,
    rating: 4.8,
  },
  {
    name: "Meena R",
    role: "UI/UX Design Mentor",
    expertise: ["Figma", "Design Systems", "UX Research"],
    experience: "10+ years",
    batches: 52,
    students: 900,
    rating: 4.7,
  },
  {
    name: "Aishwarya S",
    role: "Digital Marketing Trainer",
    expertise: ["SEO", "Meta Ads", "Analytics"],
    experience: "9+ years",
    batches: 48,
    students: 850,
    rating: 4.7,
  },
  {
    name: "Manoj K",
    role: "Networking & Security Trainer",
    expertise: ["CCNA", "Linux", "Ethical Hacking"],
    experience: "11+ years",
    batches: 55,
    students: 950,
    rating: 4.7,
  },
];

export const reviews: Review[] = [
  {
    name: "Vignesh T",
    role: "Java Developer @ MNC (Placed 2025)",
    branch: "Anna Nagar",
    rating: 5,
    text: "I joined Java Full Stack with zero coding background. The trainers explained every concept with real projects, and the placement team pushed me through 12 mock interviews before my first offer.",
    course: "Java Full Stack Development",
  },
  {
    name: "Lakshmi P",
    role: "Data Analyst (Placed 2025)",
    branch: "Velachery",
    rating: 5,
    text: "The Data Science batch covered way more than basics — statistics, Python, business dashboards. Weekend doubt-clearing sessions were a lifesaver for working professionals.",
    course: "Data Science & Machine Learning",
  },
  {
    name: "Surya D",
    role: "DevOps Engineer (Placed 2025)",
    branch: "Coimbatore",
    rating: 5,
    text: "Real AWS labs, Terraform, and a full CI/CD project — I walked into interviews with actual infrastructure I had built, not just theory.",
    course: "AWS & DevOps",
  },
  {
    name: "Naveen M",
    role: "QA Engineer (Placed 2025)",
    branch: "Trichy",
    rating: 4,
    text: "Manual + Selenium automation in one course. The trainer covered framework design from scratch; the mock interviews were very close to the real thing.",
    course: "Software Testing & Automation",
  },
  {
    name: "Janani R",
    role: "React Developer (Placed 2024)",
    branch: "Bangalore",
    rating: 5,
    text: "Best part was the weekly mini-projects — by the end I had 4 solid projects on GitHub. The recruiter literally asked me to walk them through my code.",
    course: "React & Node.js Full Stack",
  },
  {
    name: "Fathima B",
    role: "UX Designer (Freelance)",
    branch: "Madurai",
    rating: 5,
    text: "Figma mastery and design system sessions were practical, not slide-heavy. I built a portfolio case study during the course itself.",
    course: "UI / UX Design & Figma",
  },
];

export const resources: Resource[] = [
  {
    slug: "how-to-become-full-stack-developer",
    title: "How to Become a Full Stack Developer in 2026 — A Step-by-Step Roadmap",
    excerpt:
      "The exact skills, order, and projects that let a beginner reach job-ready full stack status — and the common traps to avoid.",
    category: "Career Guides",
    readTime: "9 min read",
    date: "Aug 28, 2026",
  },
  {
    slug: "ai-vs-ml-vs-data-science",
    title: "AI vs ML vs Data Science: Which Career Path Fits You?",
    excerpt:
      "Confused between buzzwords? A no-nonsense breakdown of three in-demand roles and the skills each really needs.",
    category: "Data & AI",
    readTime: "7 min read",
    date: "Aug 20, 2026",
  },
  {
    slug: "crack-coding-interview",
    title: "How to Crack Your First Coding Interview: Beyond LeetCode",
    excerpt:
      "Communication, system hints, and code-review etiquette — the soft skills that separate offers from rejections.",
    category: "Interviews",
    readTime: "6 min read",
    date: "Aug 12, 2026",
  },
  {
    slug: "cloud-careers-without-background",
    title: "Can a Non-IT Graduate Start a Cloud Career?",
    excerpt:
      "Yes — and here is exactly which AWS + Linux + DevOps basics to learn first, plus the entry roles worth applying to.",
    category: "Cloud & DevOps",
    readTime: "8 min read",
    date: "Aug 5, 2026",
  },
  {
    slug: "resume-tips-it-freshers",
    title: "Resume Tips for IT Freshers (That Recruiters Actually Read)",
    excerpt:
      "Format, keywords, and project descriptions that get fresher resumes past ATS filters and into interviews.",
    category: "Placement",
    readTime: "5 min read",
    date: "Jul 29, 2026",
  },
  {
    slug: "classroom-vs-live-online",
    title: "Classroom vs Live Online Training: Which Works for You?",
    excerpt:
      "Both lead to the same certification — but one fits your schedule better. A practical comparison for Chennai learners.",
    category: "Learning Tips",
    readTime: "4 min read",
    date: "Jul 22, 2026",
  },
];

export const sampleBatches: Batch[] = [
  {
    course: "Java Full Stack",
    mode: "Classroom · Anna Nagar",
    start: "Mon, Sep 15",
    days: "Weekday (Mon–Fri)",
    slots: "7:00 AM & 9:00 AM",
    seats: 6,
  },
  {
    course: "Python Full Stack",
    mode: "Live Online",
    start: "Sat, Sep 20",
    days: "Weekend (Sat–Sun)",
    slots: "10:00 AM – 1:00 PM",
    seats: 5,
  },
  {
    course: "Data Science & ML",
    mode: "Classroom · Velachery",
    start: "Mon, Sep 15",
    days: "Weekday (Mon–Fri)",
    slots: "6:30 PM – 9:00 PM",
    seats: 4,
  },
  {
    course: "AWS & DevOps",
    mode: "Live Online",
    start: "Tue, Sep 16",
    days: "Weekday (Mon–Fri)",
    slots: "7:00 AM & 9:00 AM",
    seats: 7,
  },
  {
    course: "Software Testing & Automation",
    mode: "Classroom · Coimbatore",
    start: "Sat, Sep 20",
    days: "Weekend (Sat–Sun)",
    slots: "9:00 AM – 1:00 PM",
    seats: 6,
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Do I need a coding background to join IT courses?",
    answer:
      "Not at all. Courses like Java Full Stack, Software Testing and Spoken English start from absolute zero. Our trainers begin with fundamentals, and you'll build real projects before you finish.",
  },
  {
    question: "What does 'placement support' actually include?",
    answer:
      "Resume polishing, aptitude & technical mock interviews, soft-skill grooming, real-time projects, and direct references to 100+ hiring partners — plus access to our 10k+ alumni network. Support continues after course completion.",
  },
  {
    question: "Can I attend classes online if I live outside Chennai?",
    answer:
      "Yes. Live online batches run at the same time as classroom batches, with the same trainer, materials and certifications. You also get recordings for revision.",
  },
  {
    question: "How do weekend batches work for working professionals?",
    answer:
      "Weekend batches run Saturday & Sunday (3–4 hours per day) with weekday doubt-clearing sessions. Course duration extends proportionally so you never miss a topic.",
  },
  {
    question: "Are certificates recognised by companies?",
    answer:
      "Absolutely — and they're verifiable online by a unique ID. Companies primarily evaluate your project portfolio and interview performance, which our placement team drills you on.",
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}

export function findFeaturedBranches() {
  return branches.filter((b) => b.featured);
}

export function coursesByCategory(slug: string) {
  return courses.filter((c) => c.category === slug);
}