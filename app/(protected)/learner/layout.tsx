import type { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { learnerNav } from "@/features/dashboard/config/learner-nav";

export default function LearnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout items={learnerNav}>
      {children}
    </DashboardLayout>
  );
}