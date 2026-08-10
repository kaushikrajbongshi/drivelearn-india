"use client";

import {
    ArrowRight,
    CalendarDays,
    Clock3,
    MapPin,
    UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function UpcomingLessonSection() {
    return (
        <section className="border-t border-neutral-200/70 pt-8 dark:border-white/[0.08]">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Coming Up
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Your next lesson
                    </h2>
                </div>

                <Button
                    variant="ghost"
                    className="group hidden rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                >
                    View Schedule
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>

            <div className="mt-6 flex flex-col gap-5 border-y border-neutral-200/70 py-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 dark:bg-white/[0.06] dark:text-zinc-300">
                        <CalendarDays className="h-5 w-5" />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-white">
                            Tomorrow · August 11
                        </p>

                        <p className="mt-1 text-base font-semibold text-neutral-950 dark:text-white">
                            Driving Practice
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-zinc-500">
                            <span className="inline-flex items-center gap-1.5">
                                <Clock3 className="h-3.5 w-3.5" />
                                10:30 AM · 45 min
                            </span>

                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5" />
                                Guwahati
                            </span>

                            <span className="inline-flex items-center gap-1.5">
                                <UserRound className="h-3.5 w-3.5" />
                                Rahul Sharma
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="group h-10 rounded-full border-neutral-200 bg-transparent px-5 text-sm shadow-none hover:bg-neutral-50 dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
                >
                    View Booking
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>

            <Button
                variant="ghost"
                className="group mt-4 w-full rounded-full text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
                View Schedule
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </section>
    );
}