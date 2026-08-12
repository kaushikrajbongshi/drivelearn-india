"use client";

import { ArrowRight, Check, Circle } from "lucide-react";

import { Button } from "@/components/ui/button";

const setupSteps = [
    {
        label: "Complete profile",
        completed: true,
    },
    {
        label: "Choose a driving school",
        completed: false,
    },
    {
        label: "Select a course package",
        completed: false,
    },
    {
        label: "Complete payment",
        completed: false,
    },
];

export default function CompleteSetupSection() {
    const completedSteps = setupSteps.filter(
        (step) => step.completed
    ).length;

    const progress =
        (completedSteps / setupSteps.length) * 100;

    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Setup
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Complete your setup
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 dark:text-zinc-400">
                        You can complete the remaining steps whenever
                        you&apos;re ready.
                    </p>
                </div>

                <span className="text-xs font-medium text-neutral-400 dark:text-zinc-500">
                    {completedSteps}/{setupSteps.length} completed
                </span>
            </div>

            {/* Progress */}
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
                <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>

            {/* Steps */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {setupSteps.map((step) => (
                    <div
                        key={step.label}
                        className="flex items-center gap-3"
                    >
                        {step.completed ? (
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                <Check
                                    className="h-3.5 w-3.5"
                                    strokeWidth={2.5}
                                />
                            </div>
                        ) : (
                            <Circle className="h-6 w-6 shrink-0 text-neutral-300 dark:text-zinc-700" />
                        )}

                        <span
                            className={
                                step.completed
                                    ? "text-sm text-neutral-400 line-through dark:text-zinc-500"
                                    : "text-sm font-medium text-neutral-800 dark:text-zinc-200"
                            }
                        >
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Action */}
            <div className="mt-7 border-t border-neutral-200/70 pt-5 dark:border-white/[0.08]">
                <Button
                    type="button"
                    className="group h-10 rounded-full bg-emerald-600 px-5 text-sm font-medium text-white shadow-none hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                    Continue Setup
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
            </div>
        </section>
    );
}