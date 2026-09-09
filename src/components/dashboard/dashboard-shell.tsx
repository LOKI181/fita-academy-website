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

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            {role === "student" ? "Student dashboard" : role === "trainer" ? "Trainer dashboard" : "Admin dashboard"}
          </h1>
          <p className="text-sm text-muted-foreground capitalize">{user.role} account</p>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 sm:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === n.href
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="font-heading font-bold text-foreground">{user.name}</div>
                <div className="truncate text-xs font-normal text-muted-foreground">
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
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-accent-foreground">
            <ShieldCheck className="mr-1 inline size-3" aria-hidden />
            {user.role}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}