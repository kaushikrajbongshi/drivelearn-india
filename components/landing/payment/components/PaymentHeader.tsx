"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface PaymentHeaderProps {
    schoolName: string;
    courseName: string;
}

export default function PaymentHeader({
    schoolName,
    courseName,
}: PaymentHeaderProps) {
    return (
        <div className="space-y-5">
            {/* Back */}
            <Link
                href="/learner/schools"
                className="
          inline-flex items-center gap-2
          text-sm font-medium
          text-neutral-500
          transition-colors
          hover:text-[#E51B23]
          dark:text-zinc-400
          dark:hover:text-[#E51B23]
        "
            >
                <ArrowLeft className="h-4 w-4" />
                Back
            </Link>

            {/* Heading */}
            <div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                    Complete your payment
                </h1>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-zinc-400 sm:text-base">
                    Complete your enrollment for{" "}
                    <span className="font-medium text-neutral-800 dark:text-zinc-200">
                        {courseName}
                    </span>{" "}
                    at{" "}
                    <span className="font-medium text-neutral-800 dark:text-zinc-200">
                        {schoolName}
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}

