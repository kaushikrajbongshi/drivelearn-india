"use client";

import { TrendingUp } from "lucide-react";
import Link from "next/link";
import type { ProgressSummary } from "../types/dashboard";

interface ProgressCardProps {
    progress: ProgressSummary;
}

export default function ProgressCard({ progress }: ProgressCardProps) {
    const circumference = 2 * Math.PI * 26;
    const offset = circumference - (progress.percentage / 100) * circumference;

    return (
        <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                <TrendingUp className="h-3.5 w-3.5" />
                Your Progress
            </p>

            <div className="mt-3 flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                    <svg className="h-16 w-16 -rotate-90" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="26" fill="none" strokeWidth="5" className="stroke-black/5 dark:stroke-white/10" />
                        <circle
                            cx="30"
                            cy="30"
                            r="26"
                            fill="none"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            className="stroke-emerald-600 dark:stroke-emerald-500"
                        />
                    </svg>
                    <span className="absolute text-sm font-bold text-neutral-900 dark:text-white">
                        {progress.percentage}%
                    </span>
                </div>

                <div className="flex-1 space-y-1.5 text-xs text-neutral-500 dark:text-zinc-400">
                    <div className="flex justify-between">
                        <span>Practical</span>
                        <span className="font-medium text-neutral-700 dark:text-zinc-200">
                            {progress.practicalCompleted}/{progress.practicalTotal}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Theory</span>
                        <span className="font-medium text-neutral-700 dark:text-zinc-200">
                            {progress.theoryCompleted}/{progress.theoryTotal}
                        </span>
                    </div>
                </div>
            </div>

            <Link
                href="/learner/progress"
                className="mt-4 text-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
                View Full Progress →
            </Link>
        </div>
    );
}