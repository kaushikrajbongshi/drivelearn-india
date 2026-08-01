import {
  DashboardIcon,
} from "@/config/dashboard-icons";

export type LearnerStatus = "Active" | "Inactive" | "Completed";

export type PaymentStatus = "Paid" | "Pending" | "Overdue";

export interface Learner {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  instructor: string;
  progress: number;
  attendance: number;
  paymentStatus: PaymentStatus;
  status: LearnerStatus;
  joinedAt: string;
  avatar?: string;
}

export interface LearnerStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface LearnerFilter {
  label: string;
  value: string;
}

export const learnerStatusVariant = {
  Active: "default",
  Inactive: "secondary",
  Completed: "outline",
} as const;

export const paymentStatusVariant = {
  Paid: "default",
  Pending: "secondary",
  Overdue: "destructive",
} as const;