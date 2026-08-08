"use client";

import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CoursePackage } from "../types/package";

interface PackageCardProps {
    pkg: CoursePackage;
    isSelected: boolean;
    onSelect: () => void;
}

export default function PackageCard({ pkg, isSelected, onSelect }: PackageCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl border p-5 transition-colors",
                isSelected
                    ? "border-emerald-600 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/10"
                    : "border-black/10 dark:border-white/10"
            )}
        >
            {pkg.isRecommended && (
                <span className="absolute -top-3 left-5 flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-500">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                </span>
            )}

            <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{pkg.name}</h3>
                {pkg.emiAvailable && (
                    <span className="text-[11px] font-medium text-neutral-400 dark:text-zinc-500">
                        EMI available
                    </span>
                )}
            </div>

            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
                ₹{pkg.price.toLocaleString("en-IN")}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-neutral-500 dark:text-zinc-400">
                <div>
                    <p className="text-neutral-400 dark:text-zinc-500">Lessons</p>
                    <p className="font-medium text-neutral-700 dark:text-zinc-200">{pkg.lessonCount}</p>
                </div>
                <div>
                    <p className="text-neutral-400 dark:text-zinc-500">Duration</p>
                    <p className="font-medium text-neutral-700 dark:text-zinc-200">{pkg.durationWeeks} weeks</p>
                </div>
                <div>
                    <p className="text-neutral-400 dark:text-zinc-500">Frequency</p>
                    <p className="font-medium text-neutral-700 dark:text-zinc-200">{pkg.sessionFrequency}</p>
                </div>
                <div>
                    <p className="text-neutral-400 dark:text-zinc-500">Vehicle</p>
                    <p className="font-medium text-neutral-700 dark:text-zinc-200">{pkg.vehicleType}</p>
                </div>
            </div>

            <div className="mt-4 h-px bg-black/5 dark:bg-white/10" />

            <ul className="mt-4 space-y-2">
                {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        {item}
                    </li>
                ))}
            </ul>

            <p className="mt-4 text-xs text-neutral-400 dark:text-zinc-500">
                Valid for {pkg.validityDays} days · {pkg.refundPolicy}
            </p>

            <button
                type="button"
                onClick={onSelect}
                className={cn(
                    "mt-5 h-11 w-full rounded-full text-sm font-semibold transition-colors",
                    isSelected
                        ? "bg-emerald-600 text-white dark:bg-emerald-500"
                        : "border border-neutral-300 text-neutral-900 hover:bg-black/[0.03] dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                )}
            >
                {isSelected ? "Selected" : "Select"}
            </button>
        </div>
    );
}