import type { Subscription } from "../types/subscription";

export const subscriptions: Subscription[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `SUB-${1001 + index}`,

    schoolId: `SCH-${1001 + (index % 10)}`,

    schoolName: `Driving School ${1 + (index % 10)}`,

    plan: (["free", "basic", "premium"] as const)[index % 3],

    price: [0, 29, 79][index % 3],

    billingCycle: (["monthly", "yearly"] as const)[index % 2],

    startDate: `2026-${String((index % 12) + 1).padStart(2, "0")}-01`,

    expiryDate: `2027-${String((index % 12) + 1).padStart(2, "0")}-01`,

    paymentStatus: (["paid", "pending", "failed"] as const)[index % 3],

    status: (["active", "expired", "cancelled"] as const)[index % 3],
  })),
];
