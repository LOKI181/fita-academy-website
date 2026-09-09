import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { TrainerDashboard } from "@/components/dashboard/trainer-dashboard";
import { requireRole } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function TrainerDashboardPage() {
  const auth = await requireRole("trainer", "admin");
  if (!auth) redirect("/login");

  return (
    <DashboardShell user={auth.user} role="trainer">
      <TrainerDashboard />
    </DashboardShell>
  );
}