import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Award, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { getStore } from "@/lib/store";
import { brand } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return { title: `Verify Certificate ${id}` };
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-accent text-primary">
            <BadgeCheck className="size-9" aria-hidden />
          </span>
          <h1 className="mt-5 font-heading text-2xl font-bold text-foreground">
            Verified certificate
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            This certificate was issued and verified by {brand.name}.
          </p>

          <Card className="mt-8 text-left">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">{cert.userName}</p>
                  <p className="text-xs text-muted-foreground">has successfully completed</p>
                </div>
              </div>
              <p className="text-center font-heading text-lg font-bold text-primary">
                {cert.courseTitle} Training
              </p>
              <div className="grid gap-3 border-t border-border pt-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-xs text-muted-foreground">Certificate ID</p>
                  <p className="font-mono font-semibold text-foreground">{cert.certId}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Issued</p>
                  <p className="font-medium text-foreground">
                    {new Date(cert.issuedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trainer</p>
                  <p className="font-medium text-foreground">{cert.trainerName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-medium text-foreground">{cert.hours} hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-success">
            <ShieldCheck className="size-4" aria-hidden />
            Authenticity confirmed on the FITA Academy verification system
          </p>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
          >
            ← Back to FITA Academy
          </Link>
        </div>
      </section>
    </main>
  );
}