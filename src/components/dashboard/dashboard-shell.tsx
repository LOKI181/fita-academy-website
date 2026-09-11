"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "cn";

export function DashboardShell({
  user,
  children,
  role,
}: {
  user: { name: string; email: string; role: string };
  children: React.ReactNode;
  role: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const nav = [
    { href: role === "student" ? "/dashboard" : `/dashboard/${role}`, label: "Overview" },
  ];
  if (role === "trainer" || role === "admin") {
    nav.push({ href: "/dashboard/trainer", label: "Trainer" });
  }
  if (role === "admin") {
    nav.push({ href: "/dashboard/admin", label: "Admin" });
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const logout = async () => {
    await fetch("/api/auth/session", { method: "POST" });
    toast.success("Signed out");
    router.push("/");
    router.refresh();
  };

  const title =
    role === "student"
      ? "Student dashboard"
      : role === "trainer"
        ? "Trainer dashboard"
        : "Admin dashboard";

  return (
    <div className="container-x py-10">
      <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1 className="mt-2 font-heading text-[1.75rem] font-black tracking-[-0.03em] text-foreground sm:text-3xl">
            {title}
          </h1>
          <p className="mt-1 text-[0.8125rem] capitalize text-muted-foreground">
            {user.role} account
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <nav className="hidden items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-[var(--e1)] sm:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-[0.8125rem] font-medium transition-colors",
                  pathname === n.href
                    ? "bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-card">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="font-heading font-bold text-foreground">{user.name}</div>
                <div className="truncate text-[0.72rem] font-normal text-muted-foreground">
                  {user.email}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/courses">
                  <LayoutDashboard className="size-4" aria-hidden /> Browse courses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="size-4" aria-hidden /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="chip capitalize">
            <ShieldCheck className="size-3.5" aria-hidden />
            {user.role}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}