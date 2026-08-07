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
    key: "choose-school",
    title: "Choose Driving School",
    description: "Select a driving school near you.",
    path: "/learner/onboarding/driving-school",
    optional: true,
  },
  {
    id: 5,
    key: "choose-course",
    title: "Select Course Package",
    description: "Choose the best course package.",
    path: "/learner/onboarding/course-package",
    optional: true,
  },
  {
    id: 6,
    key: "payment",
    title: "Payment",
    description: "Complete your enrollment payment.",
    path: "/learner/onboarding/payment",
    optional: true,
  },
  {
    id: 7,
    key: "welcome",
    title: "You're All Set",
    description: "Start your learning journey.",
    path: "/learner/onboarding/welcome",
  },
];

/**
 * Build sidebar state from current step index.
 *
 * Example:
 * currentStep = 1
 *
 * ✓ Verify Email
 * ● Verify Phone
 * ○ Complete Profile
 */
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
