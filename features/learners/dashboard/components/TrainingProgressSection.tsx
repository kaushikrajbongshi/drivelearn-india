"use client";

import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { dashboardData } from "../data/dashboardData";

export default function TrainingProgressSection() {
    const { trainingProgress } = dashboardData;

    const hoursProgress = Math.round(
        (trainingProgress.hoursCompleted / trainingProgress.hoursTotal) * 100
    );

    const lessonsProgress = Math.round(
        (trainingProgress.lessonsCompleted / trainingProgress.lessonsTotal) * 100
    );

    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Progress
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Your training progress
                    </h2>
                </div>

                <Button
                    variant="ghost"
                    className="group hidden rounded-full text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>

            {/* Main stats */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {/* Hours */}
                <div>
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-neutral-400 dark:text-zinc-500" />

                            <span className="text-sm font-medium text-neutral-600 dark:text-zinc-400">
                                Training hours
                            </span>
                        </div>

                        <span className="text-sm font-medium text-neutral-500 dark:text-zinc-400">
                            {hoursProgress}%
                        </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                            {trainingProgress.hoursCompleted}
                        </span>

                        <span className="text-sm text-neutral-400 dark:text-zinc-500">
                            / {trainingProgress.hoursTotal} hrs
                        </span>
                    </div>

                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                            style={{ width: `${hoursProgress}%` }}
                        />
                    </div>
                </div>

                {/* Lessons */}
                <div className="sm:border-l sm:border-neutral-200 sm:pl-8 dark:sm:border-white/10">
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                            <span className="text-sm font-medium text-neutral-600 dark:text-zinc-400">
                                Lessons completed
                            </span>
                        </div>

                        <span className="text-sm font-medium text-neutral-500 dark:text-zinc-400">
                            {lessonsProgress}%
                        </span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                            {trainingProgress.lessonsCompleted}
                        </span>

                        <span className="text-sm text-neutral-400 dark:text-zinc-500">
                            / {trainingProgress.lessonsTotal} lessons
                        </span>
                    </div>

                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                            style={{ width: `${lessonsProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200/70 pt-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                    Keep practicing consistently to stay on track for your test.
                </p>

                <Button
                    variant="ghost"
                    className="group w-fit rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </section>
    );
}