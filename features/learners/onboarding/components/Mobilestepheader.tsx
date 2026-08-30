"use client";

import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import type { SidebarStep } from "../types/onboarding";
import Logo from "@/components/layout/navbar/Logo";
import LearnerNavbar from "@/components/layout/navbar/LearnerNavbar";

interface MobileStepHeaderProps {
  steps: SidebarStep[];
  currentIndex: number;
}

export default function MobileStepHeader({
  steps,
  currentIndex,
}: MobileStepHeaderProps) {
  return (
    <>
      <LearnerNavbar />

      <div className="border-b border-black/5 bg-white dark:border-white/10 dark:bg-[#202020]">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Progress */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-1.5">
              {steps.map((step) => {
                const isActive =
                  step.status === "completed" ||
                  step.status === "current";

                return (
                  <div
                    key={step.id}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      isActive
                        ? "w-6 bg-red-600 dark:bg-red-500"
                        : "w-1.5 bg-neutral-300 dark:bg-white/25"
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}