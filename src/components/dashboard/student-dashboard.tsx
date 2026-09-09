"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Award,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Loader2,
  Lock,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/content";
import type { StoreBatch, Certificate, Enrollment } from "@/lib/types";

type DashboardData = {
  enrollments: Enrollment[];
  batches: StoreBatch[];
  certificates: Certificate[];
};

export function StudentDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dashboard/student");
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (res.ok) setData(await res.json());
      setLoading(false);
    })();
  }, [router]);

  const enroll = async (courseSlug: string) => {
    if (!selectedBatch) {
      toast.error("Select a StoreBatch first.");
      return;
    }
    setEnrolling(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug, batchId: selectedBatch }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not enroll");
      toast.success("Enrolled! Choose a payment method to confirm.");
      router.refresh();
      location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not enroll");
    } finally {
      setEnrolling(false);
    }
  };

  const pay = async (course: {
    courseSlug: string;
    courseTitle: string;
    fees: string;
  }) => {
    const amount = parseInt(course.fees.replace(/[^\d]/g, ""), 10) || 19999;
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, courseSlug: course.courseSlug, courseTitle: course.courseTitle }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not start payment");
      if (json.mode === "demo" && json.demo) {
        const verify = await fetch("/api/payment", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: json.order.id,
            razorpay_payment_id: "pay_demo",
            razorpay_signature: "demo",
          }),
        });
        const v = await verify.json();
        if (!verify.ok) throw new Error(v.error || "Payment failed");
        toast.success("Payment confirmed in demo mode!");
        location.reload();
        return;
      }
      toast.success("Payment order created. Checkout flow ready.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Payment failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="size-6 animate-spin text-primary" aria-hidden />
      </div>
    );
  }

  if (!data) return null;

  const upcomingBatches = data.batches.filter((b) => b.status === "upcoming");

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">Your courses</h2>
          <span className="text-sm text-muted-foreground">
            {data.enrollments.length} enrolled
          </span>
        </div>
        {data.enrollments.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-border bg-muted/40 p-10 text-center">
            <BookOpen className="mx-auto size-10 text-muted-foreground" aria-hidden />
            <p className="mt-3 font-heading text-lg font-semibold text-foreground">
              No courses yet
            </p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
              Enroll in a StoreBatch below to start tracking your learning journey.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {data.enrollments.map((e) => {
              const course = courses.find((c) => c.slug === e.courseSlug);
              return (
                <Card key={e.id}>
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {e.courseTitle}
                      </h3>
                      <Badge>{e.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarClock className="size-4 text-primary" aria-hidden />
                      Progress
                    </div>
                    <Progress value={e.progressPct} className="h-2" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {e.progressPct}% complete
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={e.paymentStatus === "paid" ? "default" : "outline"}
                      >
                        {e.paymentStatus === "paid" ? (
                          <>
                            <CheckCircle2 className="size-3" aria-hidden /> Paid
                          </>
                        ) : (
                          <>
                            <Lock className="size-3" aria-hidden /> Payment {e.paymentStatus}
                          </>
                        )}
                      </Badge>
                      {e.paymentStatus !== "paid" ? (
                        <Button
                          size="sm"
                          onClick={() =>
                            pay({
                              courseSlug: e.courseSlug,
                              courseTitle: e.courseTitle,
                              fees: course?.fees ?? "19999",
                            })
                          }
                        >
                          <Wallet className="size-3.5" aria-hidden /> Pay now
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-border bg-muted/40 p-6">
        <h2 className="font-heading text-xl font-bold text-foreground">Enroll in a StoreBatch</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <Select value={selectedBatch} onValueChange={setSelectedBatch}>
              <SelectTrigger aria-label="Select StoreBatch">
                <SelectValue placeholder="Choose an open StoreBatch" />
              </SelectTrigger>
              <SelectContent>
                {upcomingBatches.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.courseName} · {b.branch} · {b.start} · {b.seatsLeft} seats
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={() => selectedBatch && enroll(enrollCourseFor(selectedBatch, data))}
            disabled={enrolling || !selectedBatch}
          >
            {enrolling ? "Enrolling…" : "Enroll now"}
          </Button>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2">
          <Award className="size-5 text-primary" aria-hidden />
          <h2 className="font-heading text-xl font-bold text-foreground">Certificates</h2>
        </div>
        {data.certificates.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No certificates yet. Complete a course to earn one you can verify publicly.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {data.certificates.map((c) => (
              <Card key={c.id}>
                <CardContent className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">
                      {c.courseTitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.certId} · {new Date(c.issuedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <a href={`/verify/${c.certId}`} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function enrollCourseFor(batchId: string, data: DashboardData): string {
  const StoreBatch = data.batches.find((b) => b.id === batchId);
  return StoreBatch?.courseSlug ?? "";
}