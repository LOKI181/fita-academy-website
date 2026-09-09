import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function StudentDashboardPage() {
  const auth = await requireUser();
  if (!auth) redirect("/login");
  if (auth.user.role !== "student") {
    redirect(auth.user.role === "admin" ? "/dashboard/admin" : "/dashboard/trainer");
  }

  return (
    <DashboardShell user={auth.user} role={auth.user.role}>
      <StudentDashboard />
    </DashboardShell>
  );
}