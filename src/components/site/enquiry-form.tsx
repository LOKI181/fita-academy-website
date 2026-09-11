"use client";

import { useState } from "react";
import { Asterisk, CheckCircle2 } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { branches, courses } from "@/lib/content";

export type FormIntent = "enquiry" | "demo" | "contact";

const intentCopy: Record<FormIntent, { heading: string; submit: string }> = {
  enquiry: { heading: "Talk to a counsellor", submit: "Send enquiry" },
  demo: { heading: "Book a free demo class", submit: "Request demo class" },
  contact: { heading: "Get in touch", submit: "Send message" },
};

export function EnquiryForm({
  intent = "enquiry",
  defaultCourse = "",
}: {
  intent?: FormIntent;
  defaultCourse?: string;
}) {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    course: defaultCourse,
    mode: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please tell us your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "")))
      next.phone = "Enter a valid 10-digit mobile number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPending(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent, ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSent(true);
      toast.success(intentCopy[intent].submit + " received! We'll call you within 30 minutes.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setPending(false);
    }
  };

  if (sent) {
    return (
      <div className="surface p-10 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-success/10">
          <CheckCircle2 className="size-9 text-success" aria-hidden />
        </span>
        <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
          {intent === "demo" ? "Demo slot requested!" : "Enquiry received!"}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(" ")[0]}. Our counsellor will call you within 30 minutes
          (working hours) on {form.phone}. For instant replies, WhatsApp us anytime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="enq-name">
            Full name <Asterisk className="inline size-3 text-destructive" aria-hidden />
          </Label>
          <Input
            id="enq-name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="enq-phone">
            Mobile number <Asterisk className="inline size-3 text-destructive" aria-hidden />
          </Label>
          <Input
            id="enq-phone"
            type="tel"
            inputMode="numeric"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            autoComplete="tel"
          />
          {errors.phone ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="enq-email">Email (optional)</Label>
          <Input
            id="enq-email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email ? (
            <p className="text-xs text-destructive" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="enq-branch">Preferred branch</Label>
          <Select value={form.branch} onValueChange={set("branch")}>
            <SelectTrigger id="enq-branch" aria-label="Preferred branch">
              <SelectValue placeholder="Choose a branch" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((b) => (
                <SelectItem key={b.slug} value={`${b.area}, ${b.city}`}>
                  {b.area}, {b.city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="enq-course">Course of interest</Label>
          <Select value={form.course} onValueChange={set("course")}>
            <SelectTrigger id="enq-course" aria-label="Course of interest">
              <SelectValue placeholder={defaultCourse || "Choose a course"} />
            </SelectTrigger>
            <SelectContent>
              {courses.map((c) => (
                <SelectItem key={c.slug} value={c.title}>
                  {c.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="enq-mode">Preferred mode</Label>
          <Select value={form.mode} onValueChange={set("mode")}>
            <SelectTrigger id="enq-mode" aria-label="Preferred mode">
              <SelectValue placeholder="Classroom / Live online" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="classroom">Classroom</SelectItem>
              <SelectItem value="live-online">Live Online</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="enq-message">Your question (optional)</Label>
          <Textarea
            id="enq-message"
            rows={3}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Tell us your background, target role or anything else…"
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="btn-press mt-7 h-11 w-full gap-2 px-6 sm:w-auto"
        disabled={pending}
      >
        {pending ? "Sending…" : intentCopy[intent].submit}
      </Button>
      <p className="mt-4 flex items-center gap-2 text-[0.72rem] text-muted-foreground">
        <span className="inline-flex size-1.5 rounded-full bg-success" aria-hidden />
        Your details are safe with us — only your counsellor sees them.
      </p>
    </form>
  );
}