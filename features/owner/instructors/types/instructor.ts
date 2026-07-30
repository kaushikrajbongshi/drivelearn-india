import { DashboardIcon } from "@/features/dashboard/config/dashboard-icons";

export type InstructorStatus =
  | "Active"
  | "Inactive"
  | "On Leave";

export interface Instructor {
  id: number;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  experience: number;
  specialization: string;
  assignedLearners: number;
  rating: number;
  status: InstructorStatus;
  joinedAt: string;
  avatar?: string;
}

export interface InstructorStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface InstructorFilter {
  label: string;
  value: string;
}