import type { DashboardIcon } from "@/config/dashboard-icons";

export type PaymentStatus =
  | "Paid"
  | "Pending"
  | "Failed"
  | "Refunded";

export type PaymentMethod =
  | "Cash"
  | "UPI"
  | "Card"
  | "Bank Transfer";

export interface Payment {
  id: number;
  paymentId: string;
  learnerName: string;
  learnerEmail: string;
  courseName: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  transactionDate: string;
  dueDate: string;
  invoiceNumber: string;
  referenceNumber: string;
}

export interface PaymentStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface PaymentFilter {
  label: string;
  value: string;
}