"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UpcomingLesson } from "../types/dashboard";

interface UpcomingLessonCardProps {
    lesson: UpcomingLesson | null;
}

export default function UpcomingLessonCard({ lesson }: UpcomingLessonCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                <Calendar className="h-3.5 w-3.5" />
                Upcoming Lesson
            </p>

            {lesson ? (
                <>
                    <p className="mt-2 text-xs text-neutral-500 dark:text-zinc-400">{lesson.dayLabel}</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">{lesson.time}</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-zinc-300">{lesson.title}</p>

                    <div className="mt-3 space-y-1 text-xs text-neutral-500 dark:text-zinc-400">
                        <p>{lesson.instructorName}</p>
                        <p>{lesson.vehicleName}</p>
                    </div>
                </>
            ) : (
                <p className="mt-3 text-sm text-neutral-500 dark:text-zinc-400">
                    No upcoming lessons booked.
                </p>
            )}

            <Button
                variant="outline"
                className="mt-auto w-full rounded-full border-black/10 dark:border-white/15"
            >
                View My Bookings →
            </Button>
        </div>
    );
}