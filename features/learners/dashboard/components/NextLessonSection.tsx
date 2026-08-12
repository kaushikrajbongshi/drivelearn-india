"use client";

import {
    ArrowRight,
    CalendarDays,
    Clock,
    MapPin,
    Navigation,
    Star,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { dashboardData } from "../data/dashboardData";

export default function NextLessonSection() {
    const { nextLesson } = dashboardData;

    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Next Lesson
                    </span>
                </div>

                <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500 dark:border-white/10 dark:text-zinc-400">
                    {nextLesson.type}
                </span>
            </div>

            {/* Main */}
            <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                    {/* Date & time */}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                            {nextLesson.date}
                        </h2>

                        <span className="text-xl font-medium text-neutral-500 dark:text-zinc-400">
                            {nextLesson.time}
                        </span>
                    </div>

                    {/* Details */}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {nextLesson.duration} session
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {nextLesson.pickup}
                        </span>
                    </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3 lg:min-w-[230px] lg:justify-end">
                    <Avatar className="h-11 w-11 border border-neutral-200 dark:border-white/10">
                        <AvatarFallback className="bg-transparent text-sm font-semibold text-neutral-700 dark:text-zinc-200">
                            {nextLesson.instructor.name
                                .split(" ")
                                .map((name) => name[0])
                                .join("")
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {nextLesson.instructor.name}
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500 dark:text-zinc-400">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            {nextLesson.instructor.rating}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 border-t border-neutral-200/70 pt-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                    Be ready 10 minutes before your scheduled lesson.
                </p>

                <div className="flex gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        className="h-10 rounded-full border-neutral-200 bg-transparent px-4 text-sm shadow-none hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
                    >
                        <Navigation className="mr-2 h-4 w-4" />
                        Directions
                    </Button>

                    <Button
                        type="button"
                        className="group h-10 rounded-full bg-emerald-600 px-5 text-sm font-medium text-white shadow-none hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    >
                        Reschedule
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
}