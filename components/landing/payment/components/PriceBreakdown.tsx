"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, ReceiptText } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PriceBreakdownProps {
    courseFee: number;
    platformFee?: number;
    discount?: number;
    disabled?: boolean;
}

export default function PriceBreakdown({
    courseFee,
    platformFee = 0,
    discount = 0,
    disabled = false,
}: PriceBreakdownProps) {
    const router = useRouter();

    const total = courseFee + platformFee - discount;

    const handlePay = () => {
        router.push("/schools/course/success");
    };

    return (
        <section
            className="
        rounded-2xl
        border border-neutral-200
        bg-white
        p-5
        dark:border-white/10
        dark:bg-[#151515]
        sm:p-6
      "
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <div
                    className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            bg-[#E51B23]/10
            text-[#E51B23]
          "
                >
                    <ReceiptText className="h-5 w-5" />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-neutral-950 dark:text-white">
                        Price breakdown
                    </h2>

                    <p className="text-xs text-neutral-500 dark:text-zinc-500">
                        Review your payment details
                    </p>
                </div>
            </div>

            {/* Breakdown */}
            <div className="mt-6 space-y-4">
                <PriceRow
                    label="Course fee"
                    amount={courseFee}
                />

                <PriceRow
                    label="Platform fee"
                    amount={platformFee}
                />

                {discount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 dark:text-zinc-400">
                            Discount
                        </span>

                        <span className="font-medium text-[#E51B23]">
                            -₹{discount.toLocaleString("en-IN")}
                        </span>
                    </div>
                )}
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-neutral-200 dark:bg-white/10" />

            {/* Total */}
            <div className="flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-neutral-950 dark:text-white">
                        Total payable
                    </p>

                    <p className="mt-1 text-xs text-neutral-400 dark:text-zinc-500">
                        Inclusive of applicable fees
                    </p>
                </div>

                <p className="text-2xl font-bold tracking-tight text-[#E51B23]">
                    ₹{total.toLocaleString("en-IN")}
                </p>
            </div>

            {/* Pay Button */}
            <Button
                type="button"
                size="lg"
                disabled={disabled}
                onClick={handlePay}
                className="
          mt-6 h-12 w-full gap-2
          rounded-xl
          bg-[#E51B23]
          text-white
          shadow-lg
          shadow-[#E51B23]/20
          transition-all
          hover:bg-[#c4161c]
          hover:shadow-xl
          hover:shadow-[#E51B23]/25
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
            >
                Pay ₹{total.toLocaleString("en-IN")}
                <ArrowRight className="h-4 w-4" />
            </Button>
        </section>
    );
}

function PriceRow({
    label,
    amount,
}: {
    label: string;
    amount: number;
}) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 dark:text-zinc-400">
                {label}
            </span>

            <span className="font-medium text-neutral-900 dark:text-white">
                ₹{amount.toLocaleString("en-IN")}
            </span>
        </div>
    );
}