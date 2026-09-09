import type { Metadata } from "next";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { SectionHeader } from "@/components/shared/section-header";
import { brand, branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact FITA Academy — ${brand.phone}, ${brand.email}. Visit any of ${branches.length} branches across Tamil Nadu & Bangalore.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="We're easy to reach"
            sub="Call, WhatsApp or walk into any branch — the same counsellor team is on the other side."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8">
        <EnquiryForm intent="contact" />
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-base font-bold text-foreground">Head office</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              FITA Academy, Anna Nagar
              <br />
              No 7, 2nd Avenue, Anna Nagar West
              <br />
              Chennai — 600040
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="font-semibold text-primary hover:underline">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="font-semibold text-primary hover:underline">
                  {brand.email}
                </a>
              </li>
              <li className="text-muted-foreground">Mon–Sat · 9:00 AM – 8:30 PM</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-base font-bold text-foreground">
              All branches ({branches.length})
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {branches.map((b) => (
                <li key={b.slug}>
                  {b.area}, {b.city} — {b.phone}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}