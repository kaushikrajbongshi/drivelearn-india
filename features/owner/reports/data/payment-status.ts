import type { PaymentStatusReport } from "../types/report";

export const paymentStatusReport: PaymentStatusReport[] = [
  {
    status: "Paid",
    count: 124,
  },
  {
    status: "Pending",
    count: 28,
  },
  {
    status: "Failed",
    count: 9,
  },
  {
    status: "Refunded",
    count: 6,
  },
];
