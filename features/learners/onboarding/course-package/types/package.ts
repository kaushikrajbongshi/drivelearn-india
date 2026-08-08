export interface CoursePackage {
  id: string;
  schoolId: string;
  name: string;
  isRecommended?: boolean;
  lessonCount: number;
  sessionFrequency: string; // e.g. "3 sessions/week"
  durationWeeks: number;
  vehicleType: string; // e.g. "Hatchback (Manual)"
  price: number;
  emiAvailable?: boolean;
  validityDays: number;
  rtoFeeIncluded: boolean;
  pickupDropIncluded: boolean;
  refundPolicy: string;
  included: string[];
}