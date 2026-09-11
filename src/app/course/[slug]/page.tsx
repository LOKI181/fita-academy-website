import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StarRating } from "@/components/shared/star-rating";
import { ReviewCard } from "@/components/shared/review-card";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import {
  brand,
  courses,
  getCategory,
  getCourse,
  reviews,
  sampleBatches,
  trainers,
} from "@/lib/content";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: `${course.title} Training in Chennai`,
    description: course.blurb,
    alternates: { canonical: `/course/${slug}` },
    openGraph: {
      title: `${course.title} | FITA Academy`,
      description: course.blurb,
      url: `${brand.domain}/course/${slug}`,
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const category = getCategory(course.category);
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const batchKeyword = course.title.split(" ")[0].toLowerCase();
  const courseBatches = sampleBatches.filter((b) =>
    b.course.toLowerCase().includes(batchKeyword)
  );
  const batches =
    courseBatches.length > 0 ? courseBatches.slice(0, 3) : sampleBatches.slice(0, 3);

  const trainer = trainers.find((t) =>
    [category?.short ?? "", course.category].some((k) =>
      t.expertise.some((e) => e.toLowerCase().includes(k.toLowerCase()))
    )
  );

  const courseReviews = reviews.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.title} Training`,
    description: course.blurb,
    provider: {
      "@type": "EducationalOrganization",
      name: brand.name,
      url: brand.domain,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: course.fees.replace(/[^\d]/g, ""),
      category: "Paid",
    },
    url: `${brand.domain}/course/${course.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-mist">
        <div className="aurora opacity-60" aria-hidden />
        <div className="grid-lines opacity-70" aria-hidden />

        <div className="container-x relative z-10 py-6 lg:py-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/courses/${course.category}`}>
                  {category?.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{course.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Course info — first on mobile, left on desktop */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                {course.badge ? (
                  <span className="rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-primary">
                    {course.badge}
                  </span>
                ) : null}
                <span className="eyebrow">{category?.title}</span>
              </div>

              <h1 className="mt-3 font-heading text-[1.5rem] font-black leading-[1.05] tracking-[-0.035em] text-foreground sm:text-3xl sm:mt-4 lg:text-[2.75rem]">
                {course.title} Training
              </h1>

              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:mt-5">
                {course.blurb}
              </p>

              <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.75rem] text-muted-foreground sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-[0.8125rem]">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Rating</dt>
                  <StarRating rating={course.rating} size="size-4" />
                  <dd>
                    <span className="font-semibold text-foreground">{course.rating}</span> (
                    {course.reviews} reviews)
                  </dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Enrolled</dt>
                  <Users className="size-4 text-primary" aria-hidden />
                  <dd>{course.students.toLocaleString("en-IN")}+ enrolled</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Duration</dt>
                  <Clock className="size-4 text-primary" aria-hidden />
                  <dd>{course.duration}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <dt className="sr-only">Level</dt>
                  <GraduationCap className="size-4 text-primary" aria-hidden />
                  <dd>{course.level}</dd>
                </div>
              </dl>
            </div>

            {/* Enrol card — below on mobile, right side on desktop */}
            <aside className="w-full shrink-0 surface p-4 sm:p-6 lg:w-[340px]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.68rem]">
                    Course fee · all inclusive
                  </p>
                  <p className="mt-1 font-heading text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">
                    {course.fees}
                  </p>
                </div>
                <span className="chip shrink-0">EMI available</span>
              </div>

              <ul className="mt-4 space-y-2 text-[0.75rem] text-muted-foreground sm:mt-5 sm:space-y-2.5 sm:text-[0.8125rem]">
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                  {course.mode.join(" & ")} · All branches
                </li>
                <li className="flex items-center gap-2.5">
                  <BadgeCheck className="size-4 shrink-0 text-success" aria-hidden />
                  Verifiable certificate + placement support
                </li>
              </ul>

              <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-2.5">
                <Button asChild size="lg" className="btn-press h-10 gap-2 px-5 text-[0.8125rem] sm:h-11 sm:px-6">
                  <Link href={`/enquire?course=${encodeURIComponent(course.title)}`}>
                    Enquire for this course <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="btn-press h-10 gap-2 bg-card px-5 text-[0.8125rem] sm:h-11 sm:px-6"
                >
                  <Link href="/demo">
                    Book a Free Demo Class <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="gap-2">
                  <Link href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4 text-success" aria-hidden />
                    Chat with a counsellor
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-5xl space-y-10 lg:space-y-14">
            <ScrollReveal>
              <div>
                <SectionHeader
                  align="left"
                  eyebrow="Syllabus"
                  title="What you'll learn"
                />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3.5 text-[0.875rem] shadow-[var(--e1)]"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-success"
                        aria-hidden
                      />
                      <span className="text-foreground/85">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <SectionHeader align="left" eyebrow="Curriculum" title="Module by module" />
                <Accordion type="single" collapsible className="mt-8">
                  {course.topics.map((topic, i) => (
                    <AccordionItem key={topic} value={topic}>
                      <AccordionTrigger className="text-left text-[0.875rem] font-medium">
                        Module {String(i + 1).padStart(2, "0")} — {topic}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Hands-on training on {topic} with real examples, practice labs and
                        assignments. Covered in classroom and live online batches. Includes
                        doubt-clearing sessions and periodic assessments.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <SectionHeader
                    align="left"
                    eyebrow="Batches"
                    title="Upcoming batches"
                  />
                  <span className="text-[0.8125rem] text-muted-foreground">
                    Limited seats each batch
                  </span>
                </div>
                <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--e2)]">
                  <Table>
                    <TableHeader className="bg-mist">
                      <TableRow className="hover:bg-transparent">
                        <TableHead>Course</TableHead>
                        <TableHead>Mode</TableHead>
                        <TableHead>Starts</TableHead>
                        <TableHead>Timing</TableHead>
                        <TableHead className="text-right">Seats</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {batches.map((b) => (
                        <TableRow key={`${b.course}-${b.start}`}>
                          <TableCell className="font-medium">{b.course}</TableCell>
                          <TableCell className="text-muted-foreground">{b.mode}</TableCell>
                          <TableCell>{b.start}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {b.days} · {b.slots}
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-2.5 py-1 text-[0.7rem] font-semibold text-primary">
                              {b.seats} left
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="mt-4 text-[0.8125rem] text-muted-foreground">
                  Need a different start date or a weekly-off batch? Enquire and we&apos;ll plan
                  it with you.
                </p>
              </div>
            </ScrollReveal>

            {trainer ? (
              <ScrollReveal>
                <div className="surface flex flex-col gap-4 p-7 sm:flex-row sm:items-center">
                  <span
                    className="grid size-16 shrink-0 place-items-center rounded-2xl font-heading text-xl font-black text-white shadow-[var(--e2)]"
                    style={{
                      background: "linear-gradient(135deg, var(--azure), var(--azure-deep))",
                    }}
                    aria-hidden
                  >
                    {trainer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="eyebrow">Led by</p>
                    <h2 className="mt-1 font-heading text-xl font-bold tracking-tight text-foreground">
                      {trainer.name}
                    </h2>
                    <p className="mt-1 text-[0.8125rem] text-muted-foreground">{trainer.role}</p>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                      {trainer.experience} of industry experience · trained{" "}
                      {trainer.students.toLocaleString("en-IN")}+ students across{" "}
                      {trainer.batches}+ batches · rated {trainer.rating}/5 by learners.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ) : null}

            <ScrollReveal>
              <div>
                <SectionHeader
                  align="left"
                  eyebrow="Student reviews"
                  title="What learners say"
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {courseReviews.map((r) => (
                    <ReviewCard key={r.name} review={r} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {relatedCourses.length > 0 ? (
        <section className="section-pad border-t border-border bg-mist">
          <div className="container-x">
            <ScrollReveal>
              <SectionHeader align="left" eyebrow="Keep exploring" title="Related courses" />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCourses.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ) : null}
    </>
  );
}