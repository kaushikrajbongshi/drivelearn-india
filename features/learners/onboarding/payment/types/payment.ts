export type PaymentMethod = "upi" | "card" | "netbanking";

export interface SchoolSummary {
  name: string;
  location: string;
  isVerified: boolean;
}

export interface PackageSummary {
  name: string;
  lessonCount: number;
  durationWeeks: number;
  vehicleType: string;
  price: number;
}

export interface PricingBreakdown {
  basePrice: number;
  discount: number;
  taxesAndFees: number;
  finalAmount: number;
}

export interface PaymentSummary {
  school: SchoolSummary | null;
  coursePackage: PackageSummary | null;
  pricing: PricingBreakdown | null;
}
