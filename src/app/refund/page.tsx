import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refund Policy",
  alternates: { canonical: "/refund" },
};

const sections = [
  {
    title: "1. 7-day trial & refund",
    body: "You may move between scheduled batches or request a full refund within 7 calendar days of your course start, provided fewer than 3 sessions have been attended. No questions asked.",
  },
  {
    title: "2. After 7 days",
    body: "Once the refund window passes, fees are non-refundable. You may, however, pause and resume your course or transfer to a later batch once without extra charge, subject to seat availability.",
  },
  {
    title: "3. Course cancellation by FITA",
    body: "If FITA cancels a batch before it begins, you can choose a full refund of all fees paid or automatic transfer to the nearest available batch.",
  },
  {
    title: "4. Payment plans & EMIs",
    body: "Refunds are always issued in the same method and account used for payment within 7–10 working days. Installments already processed to the financing partner are governed by the respective financing agreement.",
  },
  {
    title: "5. How to request a refund",
    body: `Email ${brand.email} with your registered mobile number and course name, or call ${brand.phone}. Our support team confirms eligibility and processes refunds within 7–10 working days of approval.`,
  },
];

export default function RefundPage() {
  return (
    <>
      <PageHero
        ghost="REFUND"
        eyebrow="Legal"
        title="Refund Policy"
        sub="Last updated: September 2026"
      />

      <section className="section-pad">
        <div className="container-x">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-10">
              {sections.map((s) => (
                <article key={s.title}>
                  <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-primary hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Back to home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}