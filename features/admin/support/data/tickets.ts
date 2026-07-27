import type { Ticket } from "../types/ticket";

export const tickets: Ticket[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `TKT-${1001 + index}`,

    schoolId: `SCH-${1001 + (index % 10)}`,

    schoolName: `Driving School ${1 + (index % 10)}`,

    subject: [
      "Payment Issue",
      "Unable to Login",
      "Subscription Upgrade",
      "Instructor Assignment",
      "Learner Enrollment",
    ][index % 5],

    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    priority: (["low", "medium", "high"] as const)[index % 3],

    status: (["open", "in-progress", "resolved", "closed"] as const)[index % 4],

    createdAt: `2026-07-${String((index % 28) + 1).padStart(2, "0")}`,

    updatedAt: `2026-07-${String((index % 28) + 2).padStart(2, "0")}`,
  })),
];
