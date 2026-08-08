import type { CoursePackage } from "../types/package";

// TODO: replace with getPackagesBySchool(schoolId) API call
export const mockPackages: CoursePackage[] = [
  {
    id: "pkg-basic",
    schoolId: "3",
    name: "Basic",
    lessonCount: 10,
    sessionFrequency: "2 sessions/week",
    durationWeeks: 5,
    vehicleType: "Hatchback (Manual)",
    price: 4000,
    validityDays: 45,
    rtoFeeIncluded: false,
    pickupDropIncluded: false,
    refundPolicy: "Refundable before first lesson",
    included: [
      "10 driving lessons",
      "Learner's license assistance",
      "Practice vehicle",
    ],
  },
  {
    id: "pkg-standard",
    schoolId: "3",
    name: "Standard",
    isRecommended: true,
    lessonCount: 20,
    sessionFrequency: "3 sessions/week",
    durationWeeks: 7,
    vehicleType: "Hatchback (Manual)",
    price: 7000,
    emiAvailable: true,
    validityDays: 60,
    rtoFeeIncluded: true,
    pickupDropIncluded: true,
    refundPolicy: "Refundable before first lesson",
    included: [
      "20 driving lessons",
      "RTO test fee included",
      "Pickup & drop facility",
      "Mock test before RTO exam",
    ],
  },
  {
    id: "pkg-premium",
    schoolId: "3",
    name: "Premium",
    lessonCount: 30,
    sessionFrequency: "4 sessions/week",
    durationWeeks: 8,
    vehicleType: "Sedan (Manual + Automatic)",
    price: 12000,
    emiAvailable: true,
    validityDays: 90,
    rtoFeeIncluded: true,
    pickupDropIncluded: true,
    refundPolicy: "Fully refundable within 7 days",
    included: [
      "30 driving lessons",
      "RTO test fee included",
      "Pickup & drop facility",
      "Choice of instructor gender",
      "Highway driving session",
      "Mock test before RTO exam",
    ],
  },
];

// TODO: replace with real source — URL param, session, or your onboarding
// progress API. This is a stand-in so the page compiles and is demoable.
export function getSelectedSchool() {
  return { id: "3", name: "City Wheels Driving Institute" };
}
