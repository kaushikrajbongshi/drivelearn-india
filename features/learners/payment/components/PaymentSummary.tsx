"use client";

import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { DrivingSchool } from "@/components/landing/schools/types/school";

interface PaymentSummaryProps {
    school: DrivingSchool;
    selectedCourse: DrivingSchool["courses"][number] | null;
    onContinue: () => void;
}

export default function PaymentSummary({
    school,
    selectedCourse,
    onContinue,
}: PaymentSummaryProps) {
    return (
        <aside>
            <div className="rounded-3xl border border-neutral-200/70 bg-transparent p-5 dark:border-white/10 sm:p-6 lg:sticky lg:top-6">
                <h2 className="text-lg font-semibold text-neutral-950 dark:text-white">
                    Payment summary
                </h2>

                {!selectedCourse ? (
                    <div className="mt-5 rounded-2xl border border-dashed border-neutral-200 p-5 text-center dark:border-white/10">
                        <p className="text-sm text-neutral-500 dark:text-zinc-400">
                            Select a course to continue.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Selected course */}
                        <div className="mt-5 rounded-2xl border border-neutral-200/70 p-4 dark:border-white/10">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-zinc-500">
                                Selected course
                            </p>

                            <p className="mt-2 font-medium text-neutral-950 dark:text-white">
                                {selectedCourse.name}
                            </p>

                            <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
                                {selectedCourse.duration}
                            </p>
                        </div>

                        {/* Price breakdown */}
                        <div className="mt-5 space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-neutral-500 dark:text-zinc-400">
                                    Course fee
                                </span>

                                <span className="font-medium text-neutral-950 dark:text-white">
                                    ₹{selectedCourse.price.toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-neutral-500 dark:text-zinc-400">
                                    Platform fee
                                </span>

                                <span className="text-neutral-500 dark:text-zinc-400">
                                    ₹0
                                </span>
                            </div>
                        </div>

                        <div className="my-5 h-px bg-neutral-200 dark:bg-white/10" />

                        {/* Total */}
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-neutral-950 dark:text-white">
                                Total
                            </span>

                            <span className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                                ₹{selectedCourse.price.toLocaleString("en-IN")}
                            </span>
                        </div>

                        {/* Continue */}
                        <Button
                            type="button"
                            size="lg"
                            className="mt-6 w-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
                            onClick={onContinue}
                        >
                            Continue to Payment
                        </Button>

                        {/* Security note */}
                        <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-neutral-400 dark:text-zinc-500">
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                            <p>
                                Your payment information is securely processed. You will
                                review the final payment details before completing the
                                enrollment.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}