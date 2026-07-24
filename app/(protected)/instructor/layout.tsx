import type { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { instructorNav } from "@/features/dashboard/config/instructor-nav";

export default function InstructorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout items={instructorNav}>
      {children}
    </DashboardLayout>
  );
}