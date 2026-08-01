import type { PaymentStat } from "../types/payment";

export const paymentStats: PaymentStat[] = [
  {
    title: "Total Payments",
    value: "30",
    description: "Recorded transactions",
    icon: "wallet",
  },
  {
    title: "Total Revenue",
    value: "₹1,48,500",
    description: "Collected revenue",
    icon: "indianRupee",
  },
  {
    title: "Pending Payments",
    value: "7",
    description: "Awaiting payments",
    icon: "clock3",
  },
  {
    title: "Successful Payments",
    value: "21",
    description: "Completed transactions",
    icon: "certificate",
  },
];