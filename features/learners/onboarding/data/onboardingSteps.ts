import type { OnboardingStep, SidebarStep } from "../types/onboarding";

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    key: "verify-email",
    title: "Verify Email",
    description: "Email verified.",
    path: "/learner/onboarding/verify-email",
  },
  {
    id: 2,
    key: "verify-phone",
    title: "Verify Phone",
    description: "Verify your mobile number.",
    path: "/learner/onboarding/verify-phone",
  },
  {
    id: 3,
    key: "complete-profile",
    title: "Complete Profile",
    description: "Tell us a little about yourself.",
    path: "/learner/onboarding/complete-profile",
  },

  {
    id: 4,
    key: "welcome",
    title: "You're All Set",
    description: "Start your learning journey.",
    path: "/learner/onboarding/welcome",
  },
];

export function getSidebarSteps(currentStep: number): SidebarStep[] {
  return onboardingSteps.map((step, index) => ({
    ...step,
    status:
      index < currentStep
        ? "completed"
        : index === currentStep
          ? "current"
          : "upcoming",
  }));
}
