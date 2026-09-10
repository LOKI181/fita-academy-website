import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { brand, branches, categories } from "@/lib/content";

const companyLinks = [
  { label: "About FITA", href: "/about" },
  { label: "Master Programs", href: "/programs" },
  { label: "Online Courses", href: "/online-courses" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Careers", href: "/careers" },
  { label: "Corporate Training", href: "/business/corporate-training" },
  { label: "Hire From FITA", href: "/business/hire-from-fita" },
  { label: "Become an Instructor", href: "/become-instructor" },
  { label: "Book a Demo Class", href: "/demo" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Focus&apos;d IT Academy — Chennai&apos;s trusted IT training & placement
            institute. 120+ career courses, real projects and 10k+ students placed
            since 1999.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Phone className="size-4 text-primary" aria-hidden />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              {brand.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden />
              {branches.length} branches · {brand.cities}+ cities
            </span>
          </div>
        </div>

        <nav aria-label="Courses">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Top Courses
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/courses/${cat.slug}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/courses" className="font-medium text-primary hover:underline">
                View all 120+ courses
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Branches">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Branches
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {branches.slice(0, 6).map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/branches/${b.slug}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {b.area}, {b.city}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/branches" className="font-medium text-primary hover:underline">
                All branches
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">
            FITA Academy
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
            <Star className="size-3.5 fill-current" aria-hidden />
            4.8/5 from 500+ Google reviews
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}