"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Menu, Phone } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { AuthNav } from "@/components/site/auth-nav";
import { brand, branches, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-medium hover:opacity-85"
            >
              <Phone className="size-3.5" aria-hidden />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="hidden items-center gap-1.5 hover:opacity-85 md:flex"
            >
              <Mail className="size-3.5" aria-hidden />
              {brand.email}
            </a>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="size-3.5" aria-hidden />
              {branches.length}+ branches across {brand.cities}+ cities
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b bg-background/95 backdrop-blur transition-shadow",
          scrolled && "border-border shadow-sm"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <AuthNav />
            <Button asChild variant="default" size="sm">
              <Link href="/enquire">
                Enquire Now
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
              <SheetHeader className="border-b px-6 py-5">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium",
                      isActive(link.href)
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-muted"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    <ArrowRight className="size-4 text-muted-foreground" aria-hidden />
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 border-t p-4">
                <Button asChild variant="default" onClick={() => setOpen(false)}>
                  <Link href="/enquire">Enquire Now</Link>
                </Button>
                <Button asChild variant="outline" onClick={() => setOpen(false)}>
                  <Link href="/demo">Book a Free Demo Class</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}