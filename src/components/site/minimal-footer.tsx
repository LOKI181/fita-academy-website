import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";

import { Logo } from "@/components/site/logo";
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

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export function MinimalFooter() {
  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Focus&apos;d IT Academy — Chennai&apos;s trusted IT training &amp; placement
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

        <nav aria-label="Company">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            FITA Academy
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.map((l) => (
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
        </nav>

        <nav aria-label="Legal">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Legal
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://instagram.com/fitaacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/fitaacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@fitaacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
