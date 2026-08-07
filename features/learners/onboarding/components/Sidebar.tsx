"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarSteps from "./SidebarSteps";

import { getSidebarSteps } from "../data/onboardingSteps";
import SidebarFooter from "./SidebarFooter";

interface SidebarProps {
  currentStep: number;
}

export default function Sidebar({ currentStep }: SidebarProps) {
  const steps = getSidebarSteps(currentStep);

  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;

  return (
    <aside className="flex h-full flex-col bg-[#dcf7dc] dark:bg-[#202020]">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <SidebarHeader
        completedSteps={completedSteps}
        totalSteps={steps.length}
      />

      <div className="no-scrollbar flex-1 overflow-y-auto px-8 py-5">
        <SidebarSteps steps={steps} />
      </div>

      <SidebarFooter />
    </aside>
  );
}