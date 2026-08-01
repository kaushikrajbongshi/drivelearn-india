import type { Payment } from "../types/payment";

const paymentMethods = ["Cash", "UPI", "Card", "Bank Transfer"] as const;

const paymentStatuses = ["Paid", "Pending", "Failed", "Refunded"] as const;

const courses = [
  "LMV Course",
  "Motorcycle Training",
  "Advanced Driving",
  "Commercial License",
  "Defensive Driving",
];

export const payments: Payment[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,

  paymentId: `PAY-${String(1001 + index)}`,

  learnerName: `Learner ${index + 1}`,

  learnerEmail: `learner${index + 1}@drivelearn.com`,

  courseName: courses[index % courses.length],

  amount: 3500 + (index % 5) * 1500,

  paymentMethod: paymentMethods[index % paymentMethods.length],

  status: paymentStatuses[index % paymentStatuses.length],

  transactionDate: `2026-${String((index % 12) + 1).padStart(2, "0")}-${String(
    (index % 28) + 1,
  ).padStart(2, "0")}`,

  dueDate: `2026-${String(((index + 1) % 12) + 1).padStart(2, "0")}-${String(
    ((index + 5) % 28) + 1,
  ).padStart(2, "0")}`,

  invoiceNumber: `INV-${String(5001 + index)}`,

  referenceNumber: `TXN${Date.now()}${index}`,
}));
