import type { PaymentSummary } from "../types/payment";

// TODO: replace with real data pulled from the learner's actual
// selections made in the driving-school and course-package steps
export function getPaymentSummary(): PaymentSummary {
  const school = {
    name: "City Wheels Driving Institute",
    location: "Six Mile, Guwahati, Assam",
    isVerified: true,
  };

  const coursePackage = {
    name: "Standard",
    lessonCount: 20,
    durationWeeks: 7,
    vehicleType: "Hatchback (Manual)",
    price: 7000,
  };

  const basePrice = coursePackage.price;
  const discount = 500;
  const taxesAndFees = Math.round((basePrice - discount) * 0.18);
  const finalAmount = basePrice - discount + taxesAndFees;

  return {
    school,
    coursePackage,
    pricing: { basePrice, discount, taxesAndFees, finalAmount },
  };
}
