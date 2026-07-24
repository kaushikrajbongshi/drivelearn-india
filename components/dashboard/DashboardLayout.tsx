"use client";

import type { ReactNode } from "react";

import AppSidebar from "./AppSidebar";
import DashboardHeader from "./DashboardHeader";

import type { NavItem } from "@/features/dashboard/types/nav";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  items: NavItem[];
}

export default function DashboardLayout({
  children,
  items,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>

      <AppSidebar items={items} />

      <SidebarInset>

        <DashboardHeader />

        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>

      </SidebarInset>

    </SidebarProvider>
  );
}