import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { brand, branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact FITA Academy — ${brand.phone}, ${brand.email}. Visit any of ${branches.length} branches across Tamil Nadu & Bangalore.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        ghost="CONTACT"
        eyebrow="Contact"
        title={
          <>
            We&apos;re <span className="gradient-text">easy to reach</span>
          </>
        }
        sub="Call, WhatsApp or walk into any branch — the same counsellor team is on the other side."
        stats={[
          { value: `${branches.length}+`, label: "Branches" },
          { value: "9–8:30", label: "Mon–Sat hours" },
          { value: "< 24h", label: "Response time" },
          { value: "100%", label: "Free counselling" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_400px]">
          <EnquiryForm intent="contact" />

          <aside className="space-y-5">
            <div className="surface p-6">
              <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                Head office
              </h2>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                FITA Academy, Anna Nagar
                <br />
                No 7, 2nd Avenue, Anna Nagar West
                <br />
                Chennai — 600040
              </p>

              <ul className="mt-5 space-y-3 text-[0.875rem]">
                <li>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    <Phone className="size-4" aria-hidden />
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-2.5 font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    <Mail className="size-4" aria-hidden />
                    {brand.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Clock className="size-4 text-primary" aria-hidden />
                  Mon–Sat · 9:00 AM – 8:30 PM
                </li>
              </ul>
            </div>

            <div className="surface p-6">
              <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                All branches ({branches.length})
              </h2>
              <ul className="mt-4 space-y-2.5 text-[0.8125rem] text-muted-foreground">
                {branches.map((b) => (
                  <li key={b.slug} className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="font-medium text-foreground/85">
                        {b.area}, {b.city}
                      </span>
                      <br />
                      {b.phone}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}