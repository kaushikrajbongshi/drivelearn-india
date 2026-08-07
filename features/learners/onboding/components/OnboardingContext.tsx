"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { StepId } from "../types/types";

interface OnboardingContextType {
  currentStep: StepId;
  completedSteps: Set<StepId>;
  skippedSteps: Set<StepId>;
  goNext: () => void;
  skipStep: () => void;
  isStepCompleted: (id: StepId) => boolean;
  isStepSkipped: (id: StepId) => boolean;
  isCurrentStep: (id: StepId) => boolean;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

const STEP_ORDER: StepId[] = [
  "email",
  "phone",
  "profile",
  "school",
  "package",
  "payment",
  "done",
];

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [completedSteps, setCompletedSteps] = useState<Set<StepId>>(
    new Set(["email"])
  );
  const [skippedSteps, setSkippedSteps] = useState<Set<StepId>>(new Set());
  const [currentStep, setCurrentStep] = useState<StepId>("phone");

  // Automatically mark "You're All Set!" as completed when we reach it
  useEffect(() => {
    if (currentStep === "done") {
      setCompletedSteps((prev) => new Set(prev).add("done"));
    }
  }, [currentStep]);

  const isStepCompleted = useCallback(
    (id: StepId) => completedSteps.has(id),
    [completedSteps]
  );

  const isStepSkipped = useCallback(
    (id: StepId) => skippedSteps.has(id),
    [skippedSteps]
  );

  const isCurrentStep = useCallback(
    (id: StepId) => currentStep === id,
    [currentStep]
  );

  const advance = useCallback(
    (skipped = false) => {
      if (skipped) {
        setSkippedSteps((prev) => new Set(prev).add(currentStep));
      } else {
        setCompletedSteps((prev) => new Set(prev).add(currentStep));
      }

      const idx = STEP_ORDER.indexOf(currentStep);
      if (idx < STEP_ORDER.length - 1) {
        setCurrentStep(STEP_ORDER[idx + 1]);
      }
    },
    [currentStep]
  );

  const goNext = useCallback(() => advance(false), [advance]);
  const skipStep = useCallback(() => advance(true), [advance]);

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        completedSteps,
        skippedSteps,
        goNext,
        skipStep,
        isStepCompleted,
        isStepSkipped,
        isCurrentStep,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used inside OnboardingProvider");
  return ctx;
}