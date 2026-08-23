import type { DrivingSchool } from "@/features/learners/schools/types/school";

export interface PaymentPageData {
  school: DrivingSchool;
  selectedCourseId: string | null;
}