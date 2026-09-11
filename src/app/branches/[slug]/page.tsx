import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SectionHeader } from "@/components/shared/section-header";
import { CourseCard } from "@/components/shared/course-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { branches, courses, getBranch } from "@/lib/content";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) return { title: "Branch not found" };
  return {
    title: `FITA Academy ${branch.area}, ${branch.city} — Address, Timings & Courses`,
    description: `${branch.area}, ${branch.city} FITA Academy branch — ${branch.address}, ${branch.hours}. Classroom & live online training with placement support.`,
    alternates: { canonical: `/branches/${slug}` },
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) notFound();

  const branchCourses = courses.filter((c) =>
    branch.topCourses.some((name) => c.title.toLowerCase().includes(name.toLowerCase()))
  );
  const shownCourses = branchCourses.length > 0 ? branchCourses : courses.slice(0, 3);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    branch.mapQuery
  )}&z=15&output=embed`;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-mist">
        <div className="aurora opacity-60" aria-hidden />
        <div className="grid-lines opacity-70" aria-hidden />

        <div className="container-x relative z-10 py-12 lg:py-14">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/branches">Branches</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {branch.area}, {branch.city}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="chip">Branch</span>
          <h1 className="mt-4 font-heading text-[2rem] font-black leading-[1.05] tracking-[-0.035em] text-foreground sm:text-4xl">
            FITA Academy — <span className="gradient-text">{branch.area}</span>, {branch.city}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            Classroom &amp; live online training with the same expert trainers, curriculum and
            placement team as every FITA centre.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="surface p-6">
                <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                  Branch details
                </h2>

                <ul className="mt-5 space-y-3.5 text-[0.875rem] text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="text-foreground/85">{branch.address}</span>
                      <span className="mt-1 block text-[0.75rem]">{branch.landmark}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {branch.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="size-4 shrink-0 text-primary" aria-hidden />
                    {branch.hours}
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {branch.modes.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-border bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <Button asChild className="btn-press h-10 gap-2">
                    <Link
                      href={`/enquire?branch=${encodeURIComponent(
                        `${branch.area}, ${branch.city}`
                      )}`}
                    >
                      Enquire at this branch <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-10 bg-card">
                    <Link href="/demo">Book a Free Demo</Link>
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--e2)]">
                <iframe
                  title={`Map to FITA Academy ${branch.area}, ${branch.city}`}
                  src={mapSrc}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <ScrollReveal>
                <SectionHeader
                  align="left"
                  eyebrow="Popular here"
                  title={`Top courses at ${branch.area}`}
                />
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {shownCourses.map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}