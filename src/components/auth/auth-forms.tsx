"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Asterisk, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.email.trim()) next.email = "Email is required";
    if (!form.password) next.password = "Password is required";
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      toast.success(`Welcome back, ${data.user.name.split(" ")[0]}!`);
      router.push(routeForRole(data.user.role));
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login failed");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="login-email">
          Email <Asterisk className="inline size-3 text-destructive" aria-hidden />
        </Label>
        <Input
          id="login-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          aria-invalid={!!errors.email}
        />
        {errors.email ? (
          <p className="text-xs text-destructive" role="alert">{errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="login-password">
          Password <Asterisk className="inline size-3 text-destructive" aria-hidden />
        </Label>
        <div className="relative">
          <Input
            id="login-password"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            aria-invalid={!!errors.password}
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="size-4" aria-hidden /> : <Eye className="size-4" aria-hidden />}
          </button>
        </div>
        {errors.password ? (
          <p className="text-xs text-destructive" role="alert">{errors.password}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        New to FITA?{" "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [show, setShow] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
    adminKey: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "")))
      next.phone = "Enter a valid 10-digit mobile number";
    if (form.password.length < 6) next.password = "Use at least 6 characters";
    if (isStaff && form.adminKey.length < 4) next.adminKey = "Staff setup key required";
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isStaff ? { ...form, role: form.role } : form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      toast.success("Account created!");
      router.push(routeForRole(data.user.role));
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="reg-name">
          Full name <Asterisk className="inline size-3 text-destructive" aria-hidden />
        </Label>
        <Input
          id="reg-name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={!!errors.name}
        />
        {errors.name ? (
          <p className="text-xs text-destructive" role="alert">{errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="reg-email">
            Email <Asterisk className="inline size-3 text-destructive" aria-hidden />
          </Label>
          <Input
            id="reg-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="text-xs text-destructive" role="alert">{errors.email}</p>
          ) : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="reg-phone">
            Mobile <Asterisk className="inline size-3 text-destructive" aria-hidden />
          </Label>
          <Input
            id="reg-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? (
            <p className="text-xs text-destructive" role="alert">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="reg-password">
          Password <Asterisk className="inline size-3 text-destructive" aria-hidden />
        </Label>
        <div className="relative">
          <Input
            id="reg-password"
            type={show ? "text" : "password"}
            autoComplete="new-password"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            aria-invalid={!!errors.password}
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="size-4" aria-hidden /> : <Eye className="size-4" aria-hidden />}
          </button>
        </div>
        {errors.password ? (
          <p className="text-xs text-destructive" role="alert">{errors.password}</p>
        ) : null}
      </div>

      <div className="space-y-2 rounded-xl border border-border bg-muted/40 p-4">
        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-foreground">I am staff (trainer / admin)</span>
          <Button
            type="button"
            variant={isStaff ? "default" : "outline"}
            size="sm"
            onClick={() => setIsStaff((s) => !s)}
          >
            {isStaff ? "Switching…" : "Staff? Tap here"}
          </Button>
        </label>
        {isStaff ? (
          <>
            <div className="space-y-1.5 pt-1">
              <Label htmlFor="reg-role">Role</Label>
              <Select
                value={form.role}
                onValueChange={(v) => setForm((f) => ({ ...f, role: v }))}
              >
                <SelectTrigger id="reg-role" aria-label="Role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trainer">Trainer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reg-key">Staff setup key</Label>
              <Input
                id="reg-key"
                type="password"
                placeholder="Provided by your admin"
                value={form.adminKey}
                onChange={(e) => setForm((f) => ({ ...f, adminKey: e.target.value }))}
                aria-invalid={!!errors.adminKey}
              />
              {errors.adminKey ? (
                <p className="text-xs text-destructive" role="alert">{errors.adminKey}</p>
              ) : null}
            </div>
          </>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Creating account…
          </>
        ) : (
          "Create account"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}

function routeForRole(role: string) {
  if (role === "admin") return "/dashboard/admin";
  if (role === "trainer") return "/dashboard/trainer";
  return "/dashboard";
}