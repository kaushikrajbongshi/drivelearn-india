"use client";

import { ReactNode, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Sidebar from "./Sidebar";
import MobileStepHeader from "./Mobilestepheader";
import ThemeToggle from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";

import { onboardingSteps, getSidebarSteps } from "../data/onboardingSteps";

interface OnboardingLayoutProps {
  children?: ReactNode;
}

export default function OnboardingLayout({
  children,
}: OnboardingLayoutProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const current = onboardingSteps[currentStep];
  const steps = getSidebarSteps(currentStep);

  const canGoBack = currentStep > 1;
  const canGoNext = currentStep < onboardingSteps.length - 1;

  const isOptional = useMemo(() => current.optional ?? false, [current]);

  function nextStep() {
    if (!canGoNext) return;
    setCurrentStep((prev) => prev + 1);
  }

  function previousStep() {
    if (!canGoBack) return;
    setCurrentStep((prev) => prev - 1);
  }

  function skipStep() {
    if (!isOptional) return;
    nextStep();
  }

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-white p-0 dark:bg-black lg:p-[2%]">
      <div className="relative flex h-full w-full overflow-hidden lg:rounded-3xl lg:border lg:border-black/10 lg:shadow-2xl lg:dark:border-white/10 lg:dark:shadow-black/60">

        {/* Theme toggle – desktop only (top right) */}
        <div className="absolute right-5 top-5 z-30 hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden h-full w-[280px] shrink-0 flex-col border-r border-black/5 dark:border-white/5 lg:flex">
          <Sidebar currentStep={currentStep} />
        </aside>

        <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#2A2A2A] lg:bg-[#F2F2F2]">
          {/* Mobile header: progress dots + theme toggle */}
          <div className="lg:hidden">
            <MobileStepHeader steps={steps} currentIndex={currentStep} />
          </div>

          <div className="flex-1 overflow-y-auto">
            {children ?? (
              <div className="flex h-full items-center justify-center px-6 lg:px-16">
                <div className="text-center">
                  <p className="mb-3 text-sm text-muted-foreground">
                    Current Step
                  </p>
                  <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white lg:text-5xl">
                    {current.title}
                  </h1>
                  <p className="mt-4 text-base text-muted-foreground lg:text-lg">
                    {current.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-black/5 bg-black/[0.02] px-5 py-4 dark:border-white/5 dark:bg-white/[0.03] lg:px-10 lg:py-5">
            <div className="flex items-center justify-between gap-3">
              {/* Desktop Previous */}
              <Button
                variant="outline"
                disabled={!canGoBack}
                onClick={previousStep}
                className="hidden lg:inline-flex"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {/* Mobile Back */}
              <Button
                variant="ghost"
                disabled={!canGoBack}
                onClick={previousStep}
                className="lg:hidden"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>

              <div className="flex flex-1 items-center justify-end gap-3">
                {isOptional && (
                  <Button variant="ghost" onClick={skipStep}>
                    Skip
                  </Button>
                )}

                <Button
                  onClick={nextStep}
                  disabled={!canGoNext}
                  className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 lg:flex-none lg:min-w-[140px]"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}