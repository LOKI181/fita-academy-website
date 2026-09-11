import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
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
    alternates: { canonical: `/resources/${slug}` },
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

  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  return (
    <article>
      <section className="relative overflow-hidden border-b border-border bg-mist">
        <div className="aurora opacity-60" aria-hidden />
        <div className="grid-lines opacity-70" aria-hidden />

        <div className="container-x relative z-10 py-12 lg:py-14">
          <div className="mx-auto max-w-3xl">
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
              className="mb-5 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden /> All resources
            </Link>

            <span className="chip">{resource.category}</span>

            <h1 className="mt-4 font-heading text-[2rem] font-black leading-[1.1] tracking-[-0.035em] text-foreground sm:text-4xl">
              {resource.title}
            </h1>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              {resource.excerpt}
            </p>

            <p className="mt-5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {resource.readTime} read · {resource.date}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-8 text-[1.0625rem] leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Start here
            </h2>
            <p>
              Every FITA course is built so that a complete beginner can follow it — but deciding
              <em> what to learn first</em> is the hardest part. This guide lays out the beginner
              path, the order in which to learn, and the projects that make candidates
              employable.
            </p>

            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              The fundamentals
            </h2>
            <p>
              Master the basics before chasing frameworks. A strong foundation in core concepts
              (syntax, logic, version control) makes every advanced topic faster to pick up. Our
              trainers spend the first weeks building exactly this — slowly, with practice.
            </p>

            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Build, then learn more
            </h2>
            <p>
              The single biggest differentiator we see in interviews is{" "}
              <strong className="font-semibold text-foreground">real projects</strong>.
              Recruiters ask three questions: what did you build, why did you make those choices,
              and what did you learn? Everything in FITA&apos;s curriculum is arranged so you
              answer all three by your final week.
            </p>

            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Your next step
            </h2>
            <p>
              Talk to a counsellor about which course matches your starting point — a 10-minute
              call saves you months of guesswork.
            </p>

            <Button asChild size="lg" className="btn-press h-11 gap-2 px-6">
              <Link href="/demo">
                Book a free demo class <ArrowRight aria-hidden className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad border-t border-border bg-mist">
          <div className="container-x">
            <h2 className="font-heading text-xl font-black tracking-tight text-foreground">
              More guides
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resources/${r.slug}`}
                    className="surface group flex h-full flex-col p-5"
                  >
                    <span className="eyebrow">{r.category}</span>
                    <span className="mt-2 font-heading text-[0.9375rem] font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {r.title}
                    </span>
                    <span className="mt-2 text-[0.75rem] text-muted-foreground">
                      {r.readTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}