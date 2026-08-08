"use client";

import { Star, MapPin, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DrivingSchool } from "../types/school";

interface SchoolCardProps {
    school: DrivingSchool;
    isSelected: boolean;
    onClick: () => void;
}

export default function SchoolCard({ school, isSelected, onClick }: SchoolCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-colors",
                isSelected
                    ? "border-emerald-600 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/10"
                    : "border-neutral-200 hover:border-neutral-300 dark:border-white/10 dark:hover:border-white/20"
            )}
        >
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                        {school.name}
                    </h3>
                    {isSelected && (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-500">
                            <Check className="h-3 w-3" />
                        </span>
                    )}
                </div>

                <p className="mt-1 flex items-center gap-1 truncate text-xs text-neutral-500 dark:text-zinc-400">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {school.address.line}, {school.address.city}
                </p>

                <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1 font-medium text-neutral-700 dark:text-zinc-200">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {school.rating}
                        <span className="font-normal text-neutral-400 dark:text-zinc-500">
                            ({school.reviewCount})
                        </span>
                    </span>
                    <span>{school.distanceKm} km away</span>
                    <span>From ₹{school.priceStartingFrom.toLocaleString("en-IN")}</span>
                </div>
            </div>
        </button>
    );
}