import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, BadgeCheck, ShieldCheck } from "lucide-react";

import { getStore } from "@/lib/store";
import { brand } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Verify Certificate ${id}`,
    description: `Verify the authenticity of FITA Academy certificate ${id}.`,
    robots: { index: false, follow: false },
  };
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = await getStore();
  const cert = store.certificates.find((c) => c.certId === id);
  if (!cert) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: `${cert.courseTitle} Certificate`,
    credentialCategory: "Course Completion",
    issuer: { "@type": "Organization", name: brand.name },
    validFrom: cert.issuedAt,
    identifier: cert.certId,
  };

  return (
    <main className="relative overflow-hidden bg-mist">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="aurora opacity-60" aria-hidden />
      <div className="grid-lines opacity-70" aria-hidden />

      <section className="container-x relative z-10 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="surface p-8 text-center sm:p-10">
            <span
              className="mx-auto grid size-16 place-items-center rounded-2xl text-white shadow-[var(--e2)]"
              style={{ background: "linear-gradient(135deg, var(--azure), var(--azure-deep))" }}
            >
              <BadgeCheck className="size-9" aria-hidden />
            </span>

            <h1 className="mt-6 font-heading text-2xl font-black tracking-tight text-foreground">
              Verified certificate
            </h1>
            <p className="mt-2 text-[0.875rem] text-muted-foreground">
              This certificate was issued and verified by {brand.name}.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-[0.9375rem] font-semibold text-foreground">
                    {cert.userName}
                  </p>
                  <p className="text-[0.75rem] text-muted-foreground">
                    has successfully completed
                  </p>
                </div>
              </div>

              <p className="mt-5 text-center font-heading text-lg font-black tracking-tight text-primary">
                {cert.courseTitle} Training
              </p>

              <dl className="mt-6 grid gap-4 border-t border-border pt-5 text-[0.875rem] sm:grid-cols-2">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Certificate ID
                  </dt>
                  <dd className="mt-1 font-mono font-semibold text-foreground">
                    {cert.certId}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Issued
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {new Date(cert.issuedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Trainer
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{cert.trainerName}</dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Duration
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{cert.hours} hours</dd>
                </div>
              </dl>
            </div>

            <p className="mt-7 flex items-center justify-center gap-2 text-[0.75rem] font-medium text-success">
              <ShieldCheck className="size-4" aria-hidden />
              Authenticity confirmed on the FITA Academy verification system
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-[0.875rem] font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to FITA Academy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}