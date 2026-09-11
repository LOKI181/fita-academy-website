"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, Sparkles } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthNav } from "@/components/site/auth-nav";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { brand, branches } from "@/lib/content";

const headerLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Branches", href: "/branches" },
  { label: "Placement", href: "/placement" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Announcement rail ─────────────────────────────── */}
      <div className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,var(--azure-deep),var(--azure)_45%,#6f9dff)] opacity-95" />
        <div className="container-x relative flex h-9 items-center justify-between gap-4 text-[0.7rem] font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
            >
              <Phone className="size-3.5" aria-hidden />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="hidden items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100 sm:flex"
            >
              <Mail className="size-3.5" aria-hidden />
              {brand.email}
            </a>
          </div>
          <p className="hidden items-center gap-1.5 opacity-90 md:flex">
            <Sparkles className="size-3.5" aria-hidden />
            New batches open · {branches.length}+ branches across {brand.cities}+ cities
          </p>
          <span className="flex items-center gap-1.5 md:hidden">
            <MapPin className="size-3.5" aria-hidden />
            {branches.length}+ branches
          </span>
        </div>
      </div>

      {/* ── Main navigation ───────────────────────────────── */}
      <div
        className={cn(
          "relative border-b transition-all duration-300",
          scrolled
            ? "liquid-glass border-border/70 shadow-[0_8px_30px_-16px_rgba(11,18,32,0.28)]"
            : "border-transparent bg-background/70 backdrop-blur-md"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4">
          {/* Text wordmark — no logo image */}
          <Link
            href="/"
            aria-label="FITA Academy — home"
            className="group flex shrink-0 flex-col leading-none"
          >
            <span className="font-heading text-[1.35rem] font-black tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary">
              FITA
              <span className="ml-1.5 align-middle text-[0.62rem] font-bold uppercase tracking-[0.28em] text-primary">
                Academy
              </span>
            </span>
            <span className="mt-1 hidden text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:block">
              Focus&apos;d IT Academy
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {headerLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <AuthNav />
            <Button
              asChild
              size="sm"
              className="btn-press group gap-1.5 shadow-[0_8px_24px_-10px_rgba(29,99,237,0.6)]"
            >
              <Link href="/enquire">
                Enquire Now
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[330px] p-0">
                <SheetHeader className="border-b px-6 py-5">
                  <SheetTitle className="text-left font-heading text-xl font-black tracking-tight">
                    FITA
                    <span className="ml-1.5 text-[0.62rem] font-bold uppercase tracking-[0.26em] text-primary">
                      Academy
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                  {headerLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          active
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {link.label}
                        <ArrowUpRight
                          className="size-4 text-muted-foreground"
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex flex-col gap-2 border-t p-4">
                  <Button asChild className="btn-press" onClick={() => setOpen(false)}>
                    <Link href="/enquire">Enquire Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="btn-press"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/demo">Book a Free Demo</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}