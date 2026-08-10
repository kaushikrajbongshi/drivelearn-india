"use client";

import {
    ArrowRight,
    Check,
    Circle,
    GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface SetupItem {
    label: string;
    completed: boolean;
}

const setupItems: SetupItem[] = [
    {
        label: "Complete your profile",
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
    const completedCount = setupItems.filter(
        (item) => item.completed
    ).length;

    const remainingCount = setupItems.length - completedCount;

    return (
        <section className="relative overflow-hidden border-b border-neutral-200/70 pb-8 dark:border-white/[0.08]">
            {/* Soft background accent */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-emerald-100/60 blur-3xl dark:bg-emerald-500/[0.06]" />

            <div className="relative">
                {/* Header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <GraduationCap className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                Complete your setup
                            </p>

                            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                                You&apos;re almost ready to start.
                            </h2>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500 dark:text-zinc-500">
                                Finish a few optional steps to get the most out of
                                your DriveLearn experience.
                            </p>
                        </div>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-neutral-500 dark:text-zinc-500">
                        {remainingCount}{" "}
                        {remainingCount === 1 ? "step" : "steps"} remaining
                    </span>
                </div>

                {/* Progress */}
                <div className="mt-7">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                            style={{
                                width: `${(completedCount / setupItems.length) * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Steps */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {setupItems.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-3"
                        >
                            {item.completed ? (
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                                </span>
                            ) : (
                                <Circle className="h-6 w-6 shrink-0 text-neutral-300 dark:text-zinc-700" />
                            )}

                            <span
                                className={
                                    item.completed
                                        ? "text-sm text-neutral-500 line-through dark:text-zinc-500"
                                        : "text-sm font-medium text-neutral-800 dark:text-zinc-200"
                                }
                            >
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Action */}
                <div className="mt-7">
                    <Button
                        type="button"
                        className="group h-11 rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-none hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    >
                        Continue Setup
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
}