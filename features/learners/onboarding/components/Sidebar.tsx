"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarSteps from "./SidebarSteps";

import { getSidebarSteps } from "../data/onboardingSteps";
import SidebarFooter from "./SidebarFooter";

interface SidebarProps {
  /**
   * 0 = Email
   * 1 = Phone
   * 2 = Profile
   * 3 = School
   * 4 = Course
   * 5 = Payment
   * 6 = Welcome
   */
  currentStep: number;
}

export default function Sidebar({
  currentStep,
}: SidebarProps) {
  const steps = getSidebarSteps(currentStep);

  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;

  return (
    <aside className="flex h-full flex-col bg-background">
      <SidebarHeader
        completedSteps={completedSteps}
        totalSteps={steps.length}
      />

      <div className="flex-1 overflow-y-auto px-8 py-5">
        <SidebarSteps steps={steps} />
      </div>
      <SidebarFooter />
    </aside>
  );
}