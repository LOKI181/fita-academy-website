import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { requireRole } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const auth = await requireRole("admin");
  if (!auth) redirect("/login");

  return (
    <DashboardShell user={auth.user} role="admin">
      <AdminDashboard />
    </DashboardShell>
  );
}