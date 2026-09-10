import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { brand } from "@/lib/content";

const footerLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Placements", href: "/placement" },
  { label: "Branches", href: "/branches" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund", href: "/refund" },
];

export function MinimalFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Learn.
              <br />
              Build.
              <br />
              Grow.
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
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social / Legal */}
          <div>
            <p className="text-sm font-medium text-foreground">Connect</p>
            <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
              <a href="https://instagram.com/fitaacademy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
              <a href="https://linkedin.com/company/fitaacademy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
              <a href="https://youtube.com/@fitaacademy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">YouTube</a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-muted-foreground">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
