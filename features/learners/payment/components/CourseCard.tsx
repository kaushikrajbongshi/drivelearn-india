"use client";

import { Check, Clock3, Star } from "lucide-react";

import type { DrivingSchool } from "@/features/learners/schools/types/school";

interface CourseCardProps {
    course: DrivingSchool["courses"][number];
    selected: boolean;
    popular?: boolean;
    onSelect: () => void;
}

export default function CourseCard({
    course,
    selected,
    popular = false,
    onSelect,
}: CourseCardProps) {
    return (
        <div
            className={`
                relative flex h-full flex-col rounded-3xl border p-6
                transition-all duration-300 sm:p-7
                ${selected
                    ? "border-emerald-500 bg-white shadow-lg shadow-emerald-500/10 dark:border-emerald-400 dark:bg-neutral-900"
                    : popular
                        ? "border-emerald-200 bg-white shadow-md dark:border-emerald-400/30 dark:bg-neutral-900/60"
                        : "border-neutral-200 bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02]"
                }
            `}
        >
            {/* Popular badge */}
            {popular && (
                <div className="absolute right-6 top-6 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-medium text-white dark:bg-white dark:text-neutral-950">
                    Most Popular
                </div>
            )}

            {/* Course name */}
            <div className="pr-24">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
                    {course.name}
                </h3>
            </div>

            {/* Price */}
            <div className="mt-4">
                <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
                        ₹{course.price.toLocaleString("en-IN")}
                    </span>

                    <span className="pb-1 text-sm text-neutral-400 dark:text-zinc-500">
                        /course
                    </span>
                </div>
            </div>

            {/* Description */}
            <p className="mt-3 min-h-[48px] text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                {course.description}
            </p>

            {/* Select button */}
            <button
                type="button"
                onClick={onSelect}
                className={`
                    mt-6 h-11 w-full rounded-lg text-sm font-medium
                    transition-colors
                    ${selected
                        ? "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
                        : "border border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400/60 dark:text-emerald-400 dark:hover:bg-emerald-400/10"
                    }
                `}
            >
                {selected ? "Selected" : "Select Course"}
            </button>

            {/* Divider with FEATURES label */}
            <div className="mt-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 dark:text-zinc-500">
                    Features
                </span>
                <span className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
            </div>

            {/* Features */}
            <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10">
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </span>

                    <span className="text-sm text-neutral-600 dark:text-zinc-300">
                        Practical driving training
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10">
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </span>

                    <span className="text-sm text-neutral-600 dark:text-zinc-300">
                        Trained instructor
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10">
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </span>

                    <span className="text-sm text-neutral-600 dark:text-zinc-300">
                        Road safety training
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10">
                        <Clock3 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </span>

                    <span className="text-sm text-neutral-600 dark:text-zinc-300">
                        {course.duration}
                    </span>
                </div>
            </div>

            {/* Rating / selected indicator */}
            <div className="mt-auto pt-6">
                <div className="flex items-center gap-1 text-xs text-neutral-400 dark:text-zinc-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>Professional training</span>
                </div>
            </div>
        </div>
    );
}