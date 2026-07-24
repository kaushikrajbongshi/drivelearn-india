import type { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { adminNav } from "@/features/dashboard/config/admin-nav";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout items={adminNav}>
      {children}
    </DashboardLayout>
  );
}