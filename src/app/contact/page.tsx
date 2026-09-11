import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
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

      {/* Split: Form + Contact Cards */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_400px]">
          <ScrollReveal>
            <EnquiryForm intent="contact" />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <aside className="space-y-5">
              {/* Quick contact card */}
              <div className="card-premium glass-card p-6">
                <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                  Quick contact
                </h2>
                <div className="mt-5 space-y-4">
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-primary/30 hover:shadow-[var(--e2)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{brand.phone}</p>
                      <p className="text-xs text-muted-foreground">Call us now</p>
                    </div>
                    <ExternalLink className="ml-auto size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>

                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-emerald-500/30 hover:shadow-[var(--e2)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                      <MessageCircle className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">WhatsApp us</p>
                      <p className="text-xs text-muted-foreground">Quick reply</p>
                    </div>
                    <ExternalLink className="ml-auto size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>

                  <a
                    href={`mailto:${brand.email}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-primary/30 hover:shadow-[var(--e2)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{brand.email}</p>
                      <p className="text-xs text-muted-foreground">Email us</p>
                    </div>
                    <ExternalLink className="ml-auto size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              {/* Head office */}
              <div className="card-premium glass-card p-6">
                <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                  Head office
                </h2>
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">FITA Academy, Anna Nagar</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      No 7, 2nd Avenue, Anna Nagar West
                      <br />
                      Chennai — 600040
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-background/50 p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Mon – Sat</p>
                    <p className="text-xs text-muted-foreground">9:00 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>

              {/* All branches */}
              <div className="card-premium glass-card p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                    All branches
                  </h2>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                    {branches.length}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-[0.8125rem]">
                  {branches.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/branches/${b.slug}`}
                        className="flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-muted/60"
                      >
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                        <span>
                          <span className="font-medium text-foreground/85">
                            {b.area}, {b.city}
                          </span>
                          <br />
                          <span className="text-muted-foreground">{b.phone}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-mist">
        <div className="container-x py-12">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-black tracking-tight text-foreground">
              Find us on the map
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Visit any of our {branches.length}+ branches across India.
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--e3)]">
              <iframe
                title="FITA Academy branches across India"
                src="https://maps.google.com/maps?q=FITA+Academy+Chennai&t=&z=11&output=embed"
                className="h-72 w-full sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
