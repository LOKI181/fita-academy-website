"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Result = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  level: string;
  rating: number;
  topics: string[];
};

export function CareerAssistant() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ background: "fresher", goal: "job", interest: "", months: "3" });
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const next = () => {
    if (step === 1 && form.interest.trim().length < 2) {
      setError("Tell us what you're interested in — e.g. web development, data, cloud.");
      return;
    }
    setError("");
    setStep((s) => Math.min(3, s + 1));
  };

  const run = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setResults(json.results);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary" aria-hidden />
          <h3 className="font-heading text-lg font-bold text-foreground">
            AI Career Assistant
          </h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Answer 3 quick questions and get a personalised course match — no sign-up needed.
        </p>

        {results ? (
          <div className="mt-6 space-y-4">
            <p className="font-heading text-base font-bold text-foreground">
              Based on your goals, start here:
            </p>
            {results.map((r) => (
              <div
                key={r.slug}
                className="rounded-xl border border-border bg-muted/40 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-heading text-base font-bold text-foreground">{r.title}</h4>
                  <Badge variant="outline">{r.level}</Badge>
                </div>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {r.topics.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/course/${r.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  View course <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => {
                setResults(null);
                setStep(0);
              }}
            >
              Start over
            </Button>
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            {step === 0 && (
              <div className="space-y-2">
                <Label>What best describes you?</Label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    { v: "fresher", l: "Fresh graduate" },
                    { v: "working", l: "Working professional" },
                    { v: "career-change", l: "Switching careers" },
                  ].map((o) => (
                    <button
                      key={o.v}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, background: o.v }))}
                      className={`rounded-xl border p-3 text-center text-sm font-medium transition ${
                        form.background === o.v
                          ? "border-primary bg-accent text-primary"
                          : "border-border bg-background text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {o.l}
                    </button>
                  ))}
                </div>
                <div className="pt-2">
                  <Button type="button" onClick={next} className="w-full sm:w-auto">
                    Continue <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="ai-interest">What do you want to learn or do?</Label>
                  <Input
                    id="ai-interest"
                    placeholder="e.g. become a full-stack developer, learn data science, cloud computing…"
                    value={form.interest}
                    onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                  />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(0)}>
                    Back
                  </Button>
                  <Button type="button" onClick={next}>
                    Continue <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="ai-goal">Your main goal with this course?</Label>
                  <Select value={form.goal} onValueChange={(v) => setForm((f) => ({ ...f, goal: v }))}>
                    <SelectTrigger id="ai-goal">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job">Get my first job</SelectItem>
                      <SelectItem value="promotion">Grow in my current role</SelectItem>
                      <SelectItem value="startup">Build something of my own</SelectItem>
                      <SelectItem value="upskill">Just upskill</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ai-months">How much time can you commit?</Label>
                  <Select value={form.months} onValueChange={(v) => setForm((f) => ({ ...f, months: v }))}>
                    <SelectTrigger id="ai-months">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month (intensive)</SelectItem>
                      <SelectItem value="3">~3 months (weekday)</SelectItem>
                      <SelectItem value="6">~6 months (weekend)</SelectItem>
                      <SelectItem value="12">Up to a year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="button" onClick={run} disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden /> Matching…
                      </>
                    ) : (
                      "Get my matches"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        )}
      </CardContent>
    </Card>
  );
}