import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { brand } from "@/lib/content";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Placement", href: "/placement" },
  { label: "Branches", href: "/branches" },
  { label: "About", href: "/about" },
];

const portalLinks = [
  { label: "Student Login", href: "/login" },
  { label: "Create Account", href: "/register" },
  { label: "Help & Support", href: "/contact" },
];

export function MinimalFooter() {
  return (
    <footer className="relative bg-secondary border-t border-border/60 pt-10 md:pt-12 pb-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 mb-8 border-b border-border/60">
          {/* Brand */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Logo />
            <p className="mt-3 text-xs md:text-sm text-muted-foreground max-w-md mb-4 leading-relaxed">
              Focus&apos;d IT Academy — Chennai&apos;s trusted IT training &amp;
              placement institute. 120+ career courses, real projects and
              10,000+ students placed since 1999.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${brand.email}`}
                className="p-2.5 rounded-lg bg-background hover:bg-border/50 border border-border text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="size-4" aria-hidden />
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-background hover:bg-border/50 border border-border text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold font-display uppercase tracking-widest text-foreground mb-4">
              Portal Access
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {portalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
