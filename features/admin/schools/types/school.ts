export type SchoolStatus = "active" | "inactive" | "suspended";

export type SchoolVerificationStatus = "verified" | "pending" | "rejected";

export type SubscriptionPlan = "free" | "basic" | "premium";

export interface School {
  id: string;

  name: string;

  logo?: string;

  ownerName: string;

  email: string;

  phone: string;

  state: string;

  city: string;

  address: string;

  totalInstructors: number;

  totalLearners: number;

  subscription: SubscriptionPlan;

  verification: SchoolVerificationStatus;

  status: SchoolStatus;

  joinedAt: string;

  lastActive: string;

  landmark: string;
  
  pincode: string;
}
