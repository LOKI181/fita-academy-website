"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Award,
  BookOpen,
  Inbox,
  Loader2,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StoreBatch, Certificate, Enrollment, User } from "@/lib/types";

type Data = {
  users: Array<Omit<User, "passwordHash">>;
  enrollments: Enrollment[];
  batches: StoreBatch[];
  certificates: Certificate[];
  enquiries: Array<Record<string, unknown>>;
};

export function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data | null>(null);
  const [issueUser, setIssueUser] = useState("");
  const [issueCourse, setIssueCourse] = useState("");
  const [issuing, setIssuing] = useState(false);

  const load = () => {
    fetch("/api/dashboard/admin")
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) {
          router.push("/dashboard");
          return;
        }
        if (res.ok) setData(await res.json());
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const issueCertificate = async () => {
    if (!issueUser || !issueCourse) {
      toast.error("Select a student and course.");
      return;
    }
    setIssuing(true);
    try {
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: issueUser,
          courseSlug: issueCourse,
          trainerName: "FITA Training Team",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not issue certificate");
      toast.success(`Certificate ${json.certificate.certId} issued!`);
      load();
      location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not issue certificate");
    } finally {
      setIssuing(false);
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

  const students = data.users.filter((u) => u.role === "student");

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: "Students", value: students.length },
          { icon: BookOpen, label: "Enrollments", value: data.enrollments.length },
          { icon: Inbox, label: "Enquiries", value: data.enquiries.length },
          { icon: Award, label: "Certificates", value: data.certificates.length },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center gap-3 p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                <s.icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-muted/40 p-6">
        <h2 className="font-heading text-lg font-bold text-foreground">
          Issue a certificate
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Mark a student&apos;s enrollment completed and generate a publicly verifiable certificate.
        </p>
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end">
          <div className="flex-1">
            <Select value={issueUser} onValueChange={setIssueUser}>
              <SelectTrigger aria-label="Select student">
                <SelectValue placeholder="Select student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name} · {s.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={issueCourse} onValueChange={setIssueCourse}>
              <SelectTrigger aria-label="Select course">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {data.enrollments
                  .filter((e) => !issueUser || e.userId === issueUser)
                  .map((e) => (
                    <SelectItem key={e.id} value={e.courseSlug}>
                      {e.courseTitle}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={issueCertificate} disabled={issuing}>
            {issuing ? "Issuing…" : "Issue certificate"}
          </Button>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border">
        <div className="border-b border-border bg-muted/40 px-5 py-4">
          <h2 className="font-heading text-lg font-bold text-foreground">Accounts</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.users.map((u) => (
              <TableRow key={u.id}>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell>
                  <Badge variant={u.role === "admin" ? "default" : "outline"}>{u.role}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border">
        <div className="border-b border-border bg-muted/40 px-5 py-4">
          <h2 className="font-heading text-lg font-bold text-foreground">
            Recent enquiries
          </h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.enquiries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No enquiries yet — form submissions will appear here.
                </TableCell>
              </TableRow>
            ) : (
              data.enquiries.map((e, i) => (
                <TableRow key={String(e.receivedAt ?? i) + i}>
                  <TableCell className="font-medium">
                    {String(e.name ?? "-")}
                    <span className="block text-xs text-muted-foreground">
                      {String(e.intent ?? "")}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {String(e.phone ?? "-")}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {String(e.course || "—")}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {String(e.branch || "—")}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(String(e.receivedAt ?? "")).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}