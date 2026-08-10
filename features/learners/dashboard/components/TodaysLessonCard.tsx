"use client";

import {
    ArrowRight,
    CalendarDays,
    CarFront,
    CheckCircle2,
    Clock3,
    MapPin,
    UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TodaysLessonCard() {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-emerald-50/80 px-6 py-7 dark:bg-emerald-500/[0.07] sm:px-8 sm:py-8">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-400/10" />

            <div className="relative">
                {/* Section label */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm dark:bg-white/10 dark:text-emerald-400">
                            <CalendarDays className="h-[18px] w-[18px]" />
                        </div>

                        <span className="text-sm font-medium text-neutral-800 dark:text-zinc-200">
                            Today&apos;s Lesson
                        </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Confirmed
                    </span>
                </div>

                {/* Main content */}
                <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <div className="flex items-baseline gap-3">
                            <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                                10:30
                            </h2>

                            <span className="text-lg font-medium text-neutral-500 dark:text-zinc-400">
                                AM
                            </span>
                        </div>

                        <p className="mt-2 text-lg font-medium text-neutral-900 dark:text-white">
                            Driving Practice
                        </p>

                        <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-400">
                            Today, August 10
                        </p>

                        {/* Lesson details */}
                        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-600 dark:bg-white/[0.06] dark:text-zinc-300">
                                    <UserRound className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-[11px] text-neutral-500 dark:text-zinc-500">
                                        Instructor
                                    </p>
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                        Rahul Sharma
                                    </p>
                                </div>
                            </div>

                            <div className="hidden h-10 w-px bg-emerald-900/10 dark:bg-white/10 sm:block" />

                            <div className="flex items-center gap-2.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-600 dark:bg-white/[0.06] dark:text-zinc-300">
                                    <CarFront className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-[11px] text-neutral-500 dark:text-zinc-500">
                                        Vehicle
                                    </p>
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                        Hyundai i20
                                    </p>
                                </div>
                            </div>

                            <div className="hidden h-10 w-px bg-emerald-900/10 dark:bg-white/10 md:block" />

                            <div className="flex items-center gap-2.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-600 dark:bg-white/[0.06] dark:text-zinc-300">
                                    <MapPin className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-[11px] text-neutral-500 dark:text-zinc-500">
                                        Location
                                    </p>
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                        Guwahati
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lesson action */}
                    <div className="flex justify-start lg:justify-end">
                        <Button
                            type="button"
                            className="group h-11 rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-none hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                        >
                            View Lesson Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>

                {/* Time indicator */}
                <div className="mt-7 flex items-center gap-2 border-t border-emerald-900/10 pt-4 text-xs text-neutral-500 dark:border-white/10 dark:text-zinc-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    <span>Duration: 45 minutes</span>
                </div>
            </div>
        </section>
    );
}