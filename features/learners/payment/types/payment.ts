import type { DrivingSchool } from "@/components/landing/schools/types/school";

export interface PaymentPageData {
  school: DrivingSchool;
  selectedCourseId: string | null;
}