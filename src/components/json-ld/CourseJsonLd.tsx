import { courses } from "@/lib/content";

interface CourseJsonLdProps {
  slug: string;
}

export function CourseJsonLd({ slug }: CourseJsonLdProps) {
  const course = courses.find((c) => c.slug === slug);
  if (!course) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.blurb,
    provider: {
      "@type": "EducationalOrganization",
      name: "FITA Academy",
      url: "https://fita-academy-website.vercel.app",
    },
    educationalLevel: course.level,
    teaches: course.topics,
    timeRequired: course.duration,
    offers: {
      "@type": "Offer",
      price: course.fees.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.mode.join(", "),
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}