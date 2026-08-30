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
    <aside className="flex h-full flex-col border-r border-black/5 bg-white dark:border-red-900/30 dark:bg-[linear-gradient(145deg,#3b1118_0%,#281116_38%,#1b1417_70%,#151515_100%)]">
      <style>{`
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }

      .no-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
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