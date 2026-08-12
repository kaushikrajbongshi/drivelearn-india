"use client";

import { Check, Circle, CarFront } from "lucide-react";

import { dashboardData } from "../data/dashboardData";

export default function LicenseRouteSection() {
    const { routeStages } = dashboardData;

    const currentIndex = routeStages.findIndex(
        (stage) => stage.status === "current"
    );

    const progress =
        currentIndex >= 0
            ? (currentIndex / (routeStages.length - 1)) * 100
            : 0;

    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Your Journey
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Your route to the license
                    </h2>
                </div>

                <span className="text-xs font-medium text-neutral-400 dark:text-zinc-500">
                    Stage {currentIndex + 1} / {routeStages.length}
                </span>
            </div>

            {/* Desktop route */}
            <div className="relative mt-10 hidden md:block">
                {/* Track */}
                <div className="absolute left-[10%] right-[10%] top-5 h-px bg-neutral-200 dark:bg-white/10" />

                {/* Completed track */}
                {currentIndex > 0 && (
                    <div
                        className="absolute left-[10%] top-5 h-px bg-emerald-500 transition-all duration-700"
                        style={{
                            width: `${progress * 0.8}%`,
                        }}
                    />
                )}

                <div className="relative grid grid-cols-5">
                    {routeStages.map((stage, index) => {
                        const isDone = stage.status === "done";
                        const isCurrent = stage.status === "current";

                        return (
                            <div
                                key={stage.label}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Stage indicator */}
                                {isCurrent ? (
                                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <CarFront className="h-4 w-4" />
                                    </div>
                                ) : isDone ? (
                                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                                        <Check className="h-4 w-4" strokeWidth={2.5} />
                                    </div>
                                ) : (
                                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-transparent text-neutral-300 dark:border-white/10 dark:text-zinc-700">
                                        <Circle className="h-3.5 w-3.5 fill-current" />
                                    </div>
                                )}

                                {/* Label */}
                                <p
                                    className={`mt-3 text-xs font-medium ${isCurrent
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : isDone
                                                ? "text-neutral-700 dark:text-zinc-300"
                                                : "text-neutral-400 dark:text-zinc-600"
                                        }`}
                                >
                                    {stage.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile route */}
            <div className="mt-8 space-y-0 md:hidden">
                {routeStages.map((stage, index) => {
                    const isDone = stage.status === "done";
                    const isCurrent = stage.status === "current";
                    const isLast = index === routeStages.length - 1;

                    return (
                        <div key={stage.label} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                {isCurrent ? (
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                                        <CarFront className="h-4 w-4" />
                                    </div>
                                ) : isDone ? (
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                        <Check className="h-4 w-4" strokeWidth={2.5} />
                                    </div>
                                ) : (
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-300 dark:border-white/10 dark:text-zinc-700">
                                        <Circle className="h-3.5 w-3.5 fill-current" />
                                    </div>
                                )}

                                {!isLast && (
                                    <div
                                        className={`my-1 h-8 w-px ${isDone
                                                ? "bg-emerald-500"
                                                : "bg-neutral-200 dark:bg-white/10"
                                            }`}
                                    />
                                )}
                            </div>

                            <div className="pt-2">
                                <p
                                    className={`text-sm font-medium ${isCurrent
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : isDone
                                                ? "text-neutral-800 dark:text-zinc-200"
                                                : "text-neutral-400 dark:text-zinc-600"
                                        }`}
                                >
                                    {stage.label}
                                </p>

                                <p className="mt-0.5 text-xs text-neutral-400 dark:text-zinc-600">
                                    {isCurrent
                                        ? "You are here"
                                        : isDone
                                            ? "Completed"
                                            : "Upcoming"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}