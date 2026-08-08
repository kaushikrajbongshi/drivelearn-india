export interface CompletedSchool {
  name: string;
  location: string;
}

export interface CompletedPackage {
  name: string;
  lessonCount: number;
}

export interface OnboardingSummary {
  profileCompleted: boolean; // always true by the time this page renders
  drivingSchool: CompletedSchool | null;
  coursePackage: CompletedPackage | null;
  paymentCompleted: boolean;
}