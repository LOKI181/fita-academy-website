import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

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
import { SectionHeader } from "@/components/shared/section-header";
import { CourseCard } from "@/components/shared/course-card";
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
  const shownCourses =
    branchCourses.length > 0 ? branchCourses : courses.slice(0, 3);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    branch.mapQuery
  )}&z=15&output=embed`;

  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
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
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            FITA Academy — {branch.area}, {branch.city}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Classroom & live online training with the same expert trainers, curriculum and
            placement team as every FITA centre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr] lg:items-start">
          <div className="space-y-4">
            <Card>
              <CardContent className="flex flex-col gap-4 p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">Branch details</h2>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      {branch.address}
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {branch.landmark}
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                    <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {branch.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock className="size-4 shrink-0 text-primary" aria-hidden />
                    {branch.hours}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {branch.modes.map((m) => (
                    <Badge key={m} variant="outline">
                      {m}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <Button asChild>
                    <Link href={`/enquire?branch=${encodeURIComponent(branch.area + ", " + branch.city)}`}>
                      Enquire at this branch <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/demo">Book a Free Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="overflow-hidden rounded-2xl border border-border">
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
            <SectionHeader
              align="left"
              eyebrow="Popular here"
              title={`Top courses at ${branch.area}`}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {shownCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}