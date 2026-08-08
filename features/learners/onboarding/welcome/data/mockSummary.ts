import type { OnboardingSummary } from "../types/summary";

// TODO: replace with the learner's real, persisted onboarding state
export function getOnboardingSummary(): OnboardingSummary {
  return {
    profileCompleted: true,
    drivingSchool: { name: "City Wheels Driving Institute", location: "Guwahati, Assam" },
    coursePackage: { name: "Standard Package", lessonCount: 20 },
    paymentCompleted: true,
  };
}