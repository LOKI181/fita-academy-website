"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Placement", href: "/placement" },
  { label: "Branches", href: "/branches" },
  { label: "About", href: "/about" },
];

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 md:h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-xs md:text-sm font-medium tracking-wide transition-colors rounded-lg",
                  isActive(link.href)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3 md:gap-4 shrink-0">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/5"
            >
              Login
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              <Link href="/enquire">
                Enquire Now
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white/90 hover:text-primary hover:bg-white/5"
                aria-label="Open menu"
              >
                <Menu className="size-6" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 bg-background border-border">
              <SheetHeader className="border-b border-border px-6 py-5">
                <SheetTitle className="text-left flex items-center justify-between gap-2">
                  <Logo />
                  <ThemeToggle />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                {headerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                    <ArrowRight className="size-4 text-muted-foreground" aria-hidden />
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 border-t border-border p-4">
                <Button asChild variant="default" className="bg-primary text-primary-foreground font-bold" onClick={() => setOpen(false)}>
                  <Link href="/enquire">Enquire Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-border text-white/80 hover:bg-white/5" onClick={() => setOpen(false)}>
                  <Link href="/demo">Book a Free Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
