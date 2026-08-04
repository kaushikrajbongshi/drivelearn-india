"use client";

import { ReactNode, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Sidebar from "./Sidebar";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { onboardingSteps } from "../data/onboardingSteps";

interface OnboardingLayoutProps {
  children?: ReactNode;
}

export default function OnboardingLayout({
  children,
}: OnboardingLayoutProps) {
  /**
   * Temporary state.
   * Later this will come from pathname/router.
   */
  const [currentStep, setCurrentStep] = useState(1);

  const current = onboardingSteps[currentStep];

  const canGoBack = currentStep > 1;
  const canGoNext = currentStep < onboardingSteps.length - 1;

  const isOptional = useMemo(
    () => current.optional ?? false,
    [current]
  );

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
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-[380px] shrink-0">
        <Sidebar currentStep={currentStep} />
      </aside>

      {/* Divider */}
      <Separator
        orientation="vertical"
        className="h-full"
      />

      {/* Right Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Page */}
        <div className="flex-1 overflow-y-auto">
          {children ?? (
            <div className="flex h-full items-center justify-center px-16">
              <div className="text-center">
                <p className="mb-3 text-sm text-muted-foreground">
                  Current Step
                </p>

                <h1 className="text-5xl font-bold tracking-tight">
                  {current.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                  {current.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t bg-background px-10 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              disabled={!canGoBack}
              onClick={previousStep}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-3">
              {isOptional && (
                <Button
                  variant="ghost"
                  onClick={skipStep}
                >
                  Skip
                </Button>
              )}

              <Button
                onClick={nextStep}
                disabled={!canGoNext}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}   