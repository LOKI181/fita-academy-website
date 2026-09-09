"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type SessionUser = {
  name?: string;
  role?: string;
} | null;

export function AuthNav() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/auth/session")
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <Button asChild variant="ghost" size="sm">
        <Link href="/login">
          <LogIn className="size-4" aria-hidden /> Login
        </Link>
      </Button>
    );
  }

  if (!user) {
    return (
      <Button asChild variant="ghost" size="sm">
        <Link href="/login">
          <LogIn className="size-4" aria-hidden /> Login
        </Link>
      </Button>
    );
  }

  const dash =
    user.role === "admin"
      ? "/dashboard/admin"
      : user.role === "trainer"
        ? "/dashboard/trainer"
        : "/dashboard";

  const logout = async () => {
    await fetch("/api/auth/session", { method: "POST" });
    setUser(null);
    toast.success("Signed out");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1">
      <Button asChild variant="ghost" size="sm">
        <Link href={dash}>
          <LayoutDashboard className="size-4" aria-hidden /> Dashboard
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="text-muted-foreground"
      >
        <Link href="/" onClick={logout}>
          <LogOut className="size-4" aria-hidden />
        </Link>
      </Button>
    </div>
  );
}