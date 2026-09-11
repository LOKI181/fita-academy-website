import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. The service",
    body: 'FITA Academy ("FITA", "we", "us") provides vocational IT training through classroom and live-online courses. This website presents course information, schedules, pricing and enquiry channels. Content shown is indicative and may change between batches.',
  },
  {
    title: "2. Enrolment & fees",
    body: "Fees displayed on course pages are starting fees and may vary by branch, mode and batch. Offers (EMI, discounts) are subject to eligibility. A seat is confirmed only after payment and enrolment confirmation from FITA. Failure to pay does not reserve a seat.",
  },
  {
    title: "3. Course access",
    body: "Course materials, recordings and platforms are licensed to you for personal, non-commercial study during and after your course. You agree not to resell, redistribute or share access credentials.",
  },
  {
    title: "4. Placement support",
    body: "Placement support includes resume assistance, mock interviews, referrals and access to our hiring-partner network and alumni community. It is an assisted process, not a guarantee of employment. Offers depend on your performance, roles available and market conditions.",
  },
  {
    title: "5. Acceptable use",
    body: "You agree to provide accurate details when enrolling and to treat trainers, fellow students and staff with respect. Misconduct may result in removal from a batch without refund.",
  },
  {
    title: "6. Liability",
    body: "To the extent permitted by law, FITA Academy's total liability arising from your use of this website or courses is limited to the fees you have paid for the specific course in question.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        ghost="TERMS"
        eyebrow="Legal"
        title="Terms of Use"
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

              <div className="surface p-6 text-[0.875rem] text-muted-foreground">
                Questions about these terms? Email{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {brand.email}
                </a>
              </div>

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