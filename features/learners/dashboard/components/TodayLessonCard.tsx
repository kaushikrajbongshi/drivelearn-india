"use client";

import { Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TodayLesson } from "../types/dashboard";

interface TodayLessonCardProps {
    lesson: TodayLesson | null;
}

export default function TodayLessonCard({ lesson }: TodayLessonCardProps) {
    if (!lesson) {
        return (
            <div className="flex flex-col justify-center rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
                <p className="text-sm text-neutral-500 dark:text-zinc-400">
                    No lesson scheduled for today.
                </p>
                <Button
                    size="sm"
                    className="mt-3 w-fit rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                >
                    Book a lesson
                </Button>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                <Clock className="h-3.5 w-3.5" />
                Today's Lesson
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {lesson.time}
            </p>
            <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                {lesson.title}
            </p>

            <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                {lesson.status === "confirmed" ? "Confirmed" : "Pending"}
            </span>

            <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500 dark:text-zinc-400">
                <span>{lesson.instructorName}</span>
                <span className="flex items-center gap-1">
                    <Car className="h-3.5 w-3.5" />
                    {lesson.vehicleName}
                </span>
            </div>

            <Button className="mt-4 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                View Lesson Details →
            </Button>
        </div>
    );
}