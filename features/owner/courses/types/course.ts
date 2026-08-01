import { DashboardIcon } from "@/config/dashboard-icons";

export type CourseStatus = "Active" | "Inactive";

export interface Course {
  id: number;

  name: string;

  code: string;

  duration: string;

  fee: number;

  lessonCount: number;

  vehicleType: string;

  description: string;

  status: CourseStatus;

  createdAt: string;
}

export interface CourseStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface CourseFilter {
  label: string;
  value: string;
}
