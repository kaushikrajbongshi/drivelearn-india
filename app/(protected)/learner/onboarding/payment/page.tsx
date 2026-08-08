"use client";

import { useRouter } from "next/navigation";

import PaymentSummaryForm from "@/features/learners/onboarding/payment/components/PaymentSummaryForm";
import type { PaymentMethod } from "@/features/learners/onboarding/payment/types/payment";
import { showToast } from "@/lib/toast";

export default function PaymentPage() {
    const router = useRouter();

    async function handlePay(method: PaymentMethod) {
        // const res = await initiatePaymentApi(method);
        // if (!res.ok) throw new Error(res.message ?? "Payment failed. Please try again.");
        // Real flow: redirect to gateway, or open its checkout widget, then
        // verify payment status server-side before advancing.

        showToast.success("Payment successful");
        router.push("/learner/onboarding/welcome");
    }

    async function handleSkip() {
        router.push("/learner/onboarding/welcome");
    }

    return <PaymentSummaryForm onPay={handlePay} onSkip={handleSkip} />;
}   