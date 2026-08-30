"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

export type SchoolFilters = {
    maxDistance: number;
    minRating: number;
    maxPrice: number;
    transmission: "all" | "Manual" | "Automatic";
    verifiedOnly: boolean;
};

interface SchoolFiltersDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    filters: SchoolFilters;
    onFiltersChange: React.Dispatch<React.SetStateAction<SchoolFilters>>;
    onApply: () => void;
    onReset: () => void;
}

export default function SchoolFiltersDialog({
    open,
    onOpenChange,
    filters,
    onFiltersChange,
    onApply,
    onReset,
}: SchoolFiltersDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="
                    fixed
                    right-4
                    top-4
                    left-auto
                    translate-x-0
                    translate-y-0
                    w-[calc(100%-2rem)]
                    max-w-[390px]
                    gap-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-0
                    shadow-2xl
                    dark:border-white/10
                    dark:bg-neutral-950
                "
            >
                {/* Header */}
                <div className="border-b border-neutral-200 px-5 py-4 dark:border-white/10">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-lg font-medium tracking-tight text-neutral-950 dark:text-white">
                                Filters
                            </h2>

                            <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                                Refine schools based on your preferences.
                            </p>
                        </div>


                    </div>
                </div>

                {/* Content */}
                <div className="max-h-[70vh] space-y-6 overflow-y-auto px-5 py-5">

                    {/* Maximum Distance */}
                    <div>
                        <div className="mb-3 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                    Maximum distance
                                </p>

                                <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                                    Show schools within your preferred distance.
                                </p>
                            </div>

                            <span className="shrink-0 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                {filters.maxDistance} km
                            </span>
                        </div>

                        <input
                            type="range"
                            min="1"
                            max="50"
                            step="1"
                            value={filters.maxDistance}
                            onChange={(e) =>
                                onFiltersChange((prev) => ({
                                    ...prev,
                                    maxDistance: Number(e.target.value),
                                }))
                            }
                            className="w-full accent-emerald-600"
                        />
                    </div>

                    {/* Minimum Rating */}
                    <div>
                        <div className="mb-3 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                    Minimum rating
                                </p>

                                <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                                    Only show schools with this rating or higher.
                                </p>
                            </div>

                            <span className="shrink-0 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                {filters.minRating.toFixed(1)}+
                            </span>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max="5"
                            step="0.1"
                            value={filters.minRating}
                            onChange={(e) =>
                                onFiltersChange((prev) => ({
                                    ...prev,
                                    minRating: Number(e.target.value),
                                }))
                            }
                            className="w-full accent-emerald-600"
                        />
                    </div>

                    {/* Maximum Price */}
                    <div>
                        <div className="mb-3 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                    Maximum starting price
                                </p>

                                <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                                    Show schools starting below this price.
                                </p>
                            </div>

                            <span className="shrink-0 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                ₹{filters.maxPrice.toLocaleString("en-IN")}
                            </span>
                        </div>

                        <input
                            type="range"
                            min="1000"
                            max="10000"
                            step="500"
                            value={filters.maxPrice}
                            onChange={(e) =>
                                onFiltersChange((prev) => ({
                                    ...prev,
                                    maxPrice: Number(e.target.value),
                                }))
                            }
                            className="w-full accent-emerald-600"
                        />
                    </div>

                    {/* Transmission */}
                    <div>
                        <p className="mb-3 text-sm font-medium text-neutral-900 dark:text-white">
                            Transmission
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { label: "Any", value: "all" },
                                { label: "Manual", value: "Manual" },
                                { label: "Automatic", value: "Automatic" },
                            ].map((item) => {
                                const active =
                                    filters.transmission === item.value;

                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        onClick={() =>
                                            onFiltersChange((prev) => ({
                                                ...prev,
                                                transmission:
                                                    item.value as SchoolFilters["transmission"],
                                            }))
                                        }
                                        className={`
                                            h-10
                                            rounded-full
                                            border
                                            text-xs
                                            font-medium
                                            transition
                                            ${
                                                active
                                                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                    : "border-neutral-200 bg-transparent text-neutral-600 hover:bg-neutral-50 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/[0.04]"
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Verified */}
                    <div className="flex items-start gap-3">
                        <button
                            type="button"
                            onClick={() =>
                                onFiltersChange((prev) => ({
                                    ...prev,
                                    verifiedOnly: !prev.verifiedOnly,
                                }))
                            }
                            className={`
                                mt-0.5
                                flex
                                h-4
                                w-4
                                shrink-0
                                items-center
                                justify-center
                                rounded
                                border
                                transition
                                ${
                                    filters.verifiedOnly
                                        ? "border-emerald-600 bg-emerald-600"
                                        : "border-neutral-300 dark:border-zinc-700"
                                }
                            `}
                        >
                            {filters.verifiedOnly && (
                                <span className="text-[10px] font-bold text-white">
                                    ✓
                                </span>
                            )}
                        </button>

                        <div>
                            <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                Verified schools only
                            </p>

                            <p className="mt-1 text-xs text-neutral-500 dark:text-zinc-500">
                                Only show schools verified by DriveLearn.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-neutral-200 px-5 py-4 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onReset}
                            className="
                                h-10
                                rounded-full
                                border-neutral-200
                                bg-transparent
                                px-4
                                text-xs
                                shadow-none
                                dark:border-white/10
                            "
                        >
                            <RotateCcw className="mr-2 h-3.5 w-3.5" />
                            Reset
                        </Button>

                        <Button
                            type="button"
                            onClick={onApply}
                            className="
                                h-10
                                flex-1
                                rounded-full
                                bg-emerald-600
                                text-xs
                                font-medium
                                text-white
                                shadow-none
                                hover:bg-emerald-700
                            "
                        >
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}