import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getResource, resources } from "@/lib/content";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return { title: "Resource not found" };
  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <article>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{resource.category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link
            href="/resources"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden /> All resources
          </Link>
          <p className="text-xs font-medium text-muted-foreground">
            {resource.category} · {resource.readTime} · {resource.date}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {resource.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{resource.excerpt}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="font-heading text-2xl font-bold text-foreground">Start here</h2>
          <p>
            Every FITA course is built so that a complete beginner can follow it — but deciding
            <em> what to learn first</em> is the hardest part. This guide lays out the beginner
            path, the order in which to learn, and the projects that make candidates
            employable.
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground">The fundamentals</h2>
          <p>
            Master the basics before chasing frameworks. A strong foundation in core concepts
            (syntax, logic, version control) makes every advanced topic faster to pick up. Our
            trainers spend the first weeks building exactly this — slowly, with practice.
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground">Build, then learn more</h2>
          <p>
            The single biggest differentiator we see in interviews is <strong>real projects</strong>.
            Recruiters ask three questions: what did you build, why did you make those choices,
            and what did you learn? Everything in FITA&apos;s curriculum is arranged so you answer
            all three by your final week.
          </p>
          <h2 className="font-heading text-2xl font-bold text-foreground">Your next step</h2>
          <p>
            Talk to a counsellor about which course matches your starting point — a 10-minute
            call saves you months of guesswork.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book a free demo class
          </Link>
        </div>
      </section>
    </article>
  );
}