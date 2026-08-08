"use client";

import { BadgeCheck, MapPin } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { getPaymentSummary } from "../data/mockPayment";
import type { PaymentMethod } from "../types/payment";
import PaymentMethodSelector from "./PaymentMethodSelector";

interface PaymentSummaryFormProps {
    onPay: (method: PaymentMethod) => Promise<void> | void;
    onSkip: () => Promise<void> | void;
}

export default function PaymentSummaryForm({ onPay, onSkip }: PaymentSummaryFormProps) {
    const { school, coursePackage, pricing } = getPaymentSummary();
    const [method, setMethod] = useState<PaymentMethod>("upi");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handlePay() {
        setIsSubmitting(true);
        try {
            await onPay(method);
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleSkip() {
        setIsSubmitting(true);
        try {
            await onSkip();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="mx-auto flex h-full w-full max-w-md flex-col px-6  sm:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Payment
            </h1>
            <p className=" text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                Review your selection and complete payment — or skip and pay later.
            </p>

            <div className="mt-4 space-y-2">
                {/* School info */}
                {school && (
                    <div className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                                {school.name}
                            </p>
                            {school.isVerified && (
                                <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    <BadgeCheck className="h-3.5 w-3.5" />
                                    Verified
                                </span>
                            )}
                        </div>
                        <p className="mt-1 flex items-center gap-1 text-xs text-neutral-500 dark:text-zinc-400">
                            <MapPin className="h-3 w-3 shrink-0" />
                            {school.location}
                        </p>
                    </div>
                )}

                {/* Selected package */}
                {coursePackage && (
                    <div className="rounded-xl border border-black/10 p-4 pt-2 dark:border-white/10">
                        <div className="flex items-baseline justify-between">
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                                {coursePackage.name} Package
                            </p>
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                                ₹{coursePackage.price.toLocaleString("en-IN")}
                            </p>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-500 dark:text-zinc-400">
                            <div>
                                <p className="text-neutral-400 dark:text-zinc-500">Lessons</p>
                                <p className="font-medium text-neutral-700 dark:text-zinc-200">
                                    {coursePackage.lessonCount}
                                </p>
                            </div>
                            <div>
                                <p className="text-neutral-400 dark:text-zinc-500">Duration</p>
                                <p className="font-medium text-neutral-700 dark:text-zinc-200">
                                    {coursePackage.durationWeeks} weeks
                                </p>
                            </div>
                            <div>
                                <p className="text-neutral-400 dark:text-zinc-500">Vehicle</p>
                                <p className="font-medium text-neutral-700 dark:text-zinc-200">
                                    {coursePackage.vehicleType}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pricing breakdown */}
                {pricing && (
                    <div className="rounded-xl border border-black/10 p-4 pt-2 dark:border-white/10">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-neutral-600 dark:text-zinc-300">
                                <span>Base price</span>
                                <span>₹{pricing.basePrice.toLocaleString("en-IN")}</span>
                            </div>

                            {pricing.discount > 0 && (
                                <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                                    <span>Discount</span>
                                    <span>−₹{pricing.discount.toLocaleString("en-IN")}</span>
                                </div>
                            )}

                            <div className="flex justify-between text-neutral-600 dark:text-zinc-300">
                                <span>Taxes & fees</span>
                                <span>₹{pricing.taxesAndFees.toLocaleString("en-IN")}</span>
                            </div>
                        </div>

                        <div className="my-3 h-px bg-black/5 dark:bg-white/10" />

                        <div className="flex items-baseline justify-between">
                            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                Total payable
                            </span>
                            <span className="text-xl font-bold text-neutral-900 dark:text-white">
                                ₹{pricing.finalAmount.toLocaleString("en-IN")}
                            </span>
                        </div>
                    </div>
                )}

                {/* Payment method */}
                <div>
                    <p className="mb-3 text-sm font-medium text-neutral-700 dark:text-zinc-200">
                        Payment Method
                    </p>
                    <PaymentMethodSelector value={method} onChange={setMethod} />
                </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/5 pt-4 dark:border-white/10">
                <button
                    type="button"
                    onClick={handleSkip}
                    disabled={isSubmitting}
                    className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                    Skip for now
                </button>

                <Button
                    type="button"
                    size="lg"
                    onClick={handlePay}
                    disabled={isSubmitting}
                    className="h-12 min-w-[160px] flex-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                    {isSubmitting ? "Processing..." : "Pay Now"}
                </Button>
            </div>
        </div>
    );
}