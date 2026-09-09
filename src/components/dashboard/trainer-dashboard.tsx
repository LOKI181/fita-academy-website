"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarClock, Loader2, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StoreBatch } from "@/lib/types";

type Data = {
  batches: StoreBatch[];
  students: Array<{ id: string; name: string; email: string }>;
};

export function TrainerDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dashboard/trainer");
      if (res.status === 401 || res.status === 403) {
        router.push("/dashboard");
        return;
      }
      if (res.ok) setData(await res.json());
      setLoading(false);
    })();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="size-6 animate-spin text-primary" aria-hidden />
      </div>
    );
  }
  if (!data) return null;

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
              <CalendarClock className="size-5" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                {data.batches.length}
              </p>
              <p className="text-sm text-muted-foreground">Active batches</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
              <Users className="size-5" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                {data.students.length}
              </p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
              <CalendarClock className="size-5" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                {data.batches.filter((b) => b.status === "upcoming").length}
              </p>
              <p className="text-sm text-muted-foreground">Upcoming batches</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border">
        <div className="border-b border-border bg-muted/40 px-5 py-4">
          <h2 className="font-heading text-lg font-bold text-foreground">Your batches</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Starts</TableHead>
              <TableHead>Slots</TableHead>
              <TableHead className="text-right">Seats</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.batches.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-medium">{b.courseName}</TableCell>
                <TableCell className="text-muted-foreground">{b.branch}</TableCell>
                <TableCell>{b.start}</TableCell>
                <TableCell className="text-muted-foreground">{b.slots}</TableCell>
                <TableCell className="text-right">
                  {b.seatsLeft}/{b.seatsTotal}
                </TableCell>
                <TableCell>
                  <Badge variant={b.status === "upcoming" ? "outline" : "default"}>
                    {b.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border">
        <div className="border-b border-border bg-muted/40 px-5 py-4">
          <h2 className="font-heading text-lg font-bold text-foreground">Students</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-muted-foreground">
                  No students yet
                </TableCell>
              </TableRow>
            ) : (
              data.students.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell className="text-muted-foreground">{s.email}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}