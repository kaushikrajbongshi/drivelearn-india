"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PaymentHeaderProps {
    schoolName: string;
}

export default function PaymentHeader({
    schoolName,
}: PaymentHeaderProps) {
    return (
        <div className="space-y-4">
            <Link
                href="/learner/schools"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-zinc-400 dark:hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to schools
            </Link>

            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Enrollment
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                    Choose your course
                </h1>

                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-zinc-400 sm:text-base">
                    Select a course from{" "}
                    <span className="font-medium text-neutral-700 dark:text-zinc-300">
                        {schoolName}
                    </span>{" "}
                    to continue with enrollment.
                </p>
            </div>
        </div>
    );
}