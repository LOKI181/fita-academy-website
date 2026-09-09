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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
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
  const batches = courseBatches.length > 0 ? courseBatches.slice(0, 3) : sampleBatches.slice(0, 3);

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

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
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

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                {course.badge ? <Badge>{course.badge}</Badge> : null}
                <span className="text-sm font-medium text-muted-foreground">
                  {category?.title}
                </span>
              </div>
              <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {course.title} Training
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {course.blurb}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <StarRating rating={course.rating} size="size-4" />
                  <span className="font-semibold text-foreground">{course.rating}</span>
                  ({course.reviews} reviews)
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-4 text-primary" aria-hidden /> {course.students.toLocaleString("en-IN")}+ enrolled
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" aria-hidden /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="size-4 text-primary" aria-hidden /> {course.level}
                </span>
              </div>
            </div>

            <Card className="lg:sticky lg:top-24">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      Course fee (all-inclusive)
                    </span>
                    <p className="font-heading text-3xl font-bold text-foreground">{course.fees}</p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    EMI available
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-primary" aria-hidden />
                    {course.mode.join(" & ")} · All branches
                  </p>
                  <p className="mt-1 flex items-center gap-1.5">
                    <BadgeCheck className="size-3.5 text-success" aria-hidden />
                    Verifiable certificate + placement support
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link href={`/enquire?course=${encodeURIComponent(course.title)}`}>
                    Enquire for this course <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/demo">
                    Book a Free Demo Class <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="text-success" aria-hidden /> Chat with a counsellor
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0 space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                What you&apos;ll learn
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 rounded-xl border border-border bg-background p-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Curriculum</h2>
              <Accordion type="single" collapsible className="mt-5">
                {course.topics.map((topic, i) => (
                  <AccordionItem key={topic} value={topic}>
                    <AccordionTrigger className="text-left text-sm font-medium">
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

            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Upcoming batches
                </h2>
                <span className="text-sm text-muted-foreground">Limited seats each batch</span>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <Table>
                  <TableHeader className="bg-muted/60">
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
                        <TableCell className="text-muted-foreground">{b.days} · {b.slots}</TableCell>
                        <TableCell className="text-right">
                          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                            {b.seats} left
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Need a different start date or a weekly-off batch? Enquire and we&apos;ll plan it
                with you.
              </p>
            </div>

            {trainer ? (
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Led by {trainer.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{trainer.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {trainer.experience} of industry experience · trained {trainer.students.toLocaleString("en-IN")}+
                  students across {trainer.batches}+ batches · rated {trainer.rating}/5 by learners.
                </p>
              </div>
            ) : null}

            <div>
              <SectionHeader
                align="left"
                eyebrow="Student reviews"
                title="What learners say"
                className="[&_h2]:text-2xl"
              />
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {courseReviews.map((r) => (
                  <ReviewCard key={r.name} review={r} />
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden lg:block" aria-hidden />
        </div>
      </section>

      {relatedCourses.length > 0 ? (
        <section className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader align="left" eyebrow="Keep exploring" title="Related courses" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}