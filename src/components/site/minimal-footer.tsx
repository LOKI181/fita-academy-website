import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Star } from "lucide-react";

import { brand, branches } from "@/lib/content";

const footerLinks = [
  { label: "About FITA", href: "/about" },
  { label: "Master Programs", href: "/programs" },
  { label: "Online Courses", href: "/online-courses" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Careers", href: "/careers" },
  { label: "Corporate Training", href: "/business/corporate-training" },
  { label: "Book a Demo", href: "/demo" },
];

const courseLinks = [
  { label: "Java Full Stack", href: "/course/java-full-stack" },
  { label: "Data Science", href: "/course/data-science" },
  { label: "Cloud & DevOps", href: "/course/cloud-devops" },
  { label: "Python", href: "/course/python" },
  { label: "Software Testing", href: "/course/software-testing" },
  { label: "Digital Marketing", href: "/course/digital-marketing" },
  { label: "All courses", href: "/courses" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/fita_academy/" },
  { label: "LinkedIn", href: "https://linkedin.com/company/fitaacademy" },
  { label: "YouTube", href: "https://youtube.com/@fitaacademy" },
];

export function MinimalFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-mist">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="FITA Academy — home" className="inline-flex flex-col leading-none">
              <span className="font-heading text-2xl font-black tracking-[-0.03em] text-foreground">
                FITA
                <span className="ml-2 align-middle text-xs font-bold uppercase tracking-[0.28em] text-primary">
                  Academy
                </span>
              </span>
              <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Focus&apos;d IT Academy
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Chennai&apos;s trusted IT training &amp; placement institute since 1999.
              120+ career courses, real production projects and 10,000+ students placed.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-card text-primary shadow-[var(--e1)]">
                  <Phone className="size-4" aria-hidden />
                </span>
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-card text-primary shadow-[var(--e1)]">
                  <Mail className="size-4" aria-hidden />
                </span>
                {brand.email}
              </a>
              <span className="flex items-center gap-2.5 text-muted-foreground">
                <span className="grid size-8 place-items-center rounded-lg bg-card text-primary shadow-[var(--e1)]">
                  <MapPin className="size-4" aria-hidden />
                </span>
                {branches.length} branches · {brand.cities}+ cities
              </span>
            </div>

            <div className="chip mt-6">
              <Star className="size-3.5 fill-current" aria-hidden />
              4.8/5 from 500+ Google reviews
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Courses">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-foreground">
              Courses
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {courseLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-foreground">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-foreground">
              Connect
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-xs font-bold uppercase tracking-[0.16em] text-foreground">
              Legal
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-flex size-1.5 rounded-full bg-success" aria-hidden />
            Admissions open for the next batch
          </p>
        </div>
      </div>
    </footer>
  );
}