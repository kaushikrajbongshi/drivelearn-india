export type SubscriptionPlan = "free" | "basic" | "premium";

export type BillingCycle = "monthly" | "yearly";

export type PaymentStatus = "paid" | "pending" | "failed";

export type SubscriptionStatus = "active" | "expired" | "cancelled";

export interface Subscription {
  id: string;

  schoolId: string;
  schoolName: string;

  plan: SubscriptionPlan;

  price: number;

  billingCycle: BillingCycle;

  startDate: string;
  expiryDate: string;

  paymentStatus: PaymentStatus;

  status: SubscriptionStatus;
}
