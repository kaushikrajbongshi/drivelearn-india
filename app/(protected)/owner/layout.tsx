import type { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ownerNav } from "@/features/dashboard/config/owner-nav";

export default function OwnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout items={ownerNav}>
      {children}
    </DashboardLayout>
  );
}