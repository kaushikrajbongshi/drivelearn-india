"use client";

import { Calendar, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { UpcomingLesson } from "../types/types";

interface UpcomingLessonCardProps {
  lesson: UpcomingLesson | null;
}

export default function UpcomingLessonCard({ lesson }: UpcomingLessonCardProps) {
  const initials = lesson?.instructorName
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "IN";

  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 px-6 py-7 dark:border-0 sm:px-7">
      {/* ===================== BACKGROUND ===================== */}
      <div className="absolute inset-0 bg-white dark:bg-[#050505]" />
      <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-emerald-100/80 blur-[90px] dark:bg-emerald-400/30" />
      <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-emerald-100/50 via-transparent to-transparent dark:from-emerald-500/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent dark:from-emerald-400/20" />

      {/* ===================== ROAD LINES ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-[0.15]">
        <div className="absolute bottom-0 left-[22%] h-[85%] w-[1px] origin-bottom -rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />
        <div className="absolute bottom-0 right-[22%] h-[85%] w-[1px] origin-bottom rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-emerald-700 dark:text-emerald-300">
          <Calendar className="h-3.5 w-3.5" />
          Upcoming
        </div>

        {lesson ? (
          <>
            {/* Horizontal Main Content */}
            <div className="mt-6 flex flex-1 flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* LEFT: Date & Time */}
              <div className="flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  {lesson.dayLabel}
                </p>
                <p className="mt-1 font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                  {lesson.time}
                </p>
                <p className="mt-1.5 text-[15px] font-medium text-neutral-600 dark:text-white/80">
                  {lesson.title}
                </p>
              </div>

              {/* RIGHT: Info Panel */}
              <div className="flex flex-col gap-2.5">
                {/* Instructor */}
                <div className="flex items-center gap-3 rounded-xl bg-white/60 p-2.5 pr-4 shadow-sm dark:bg-white/[0.06] dark:shadow-none">
                  <Avatar className="h-9 w-9 border-2 border-emerald-400 shadow-sm dark:border-emerald-400/50 dark:shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                    <AvatarFallback className="bg-emerald-500 text-[10px] font-bold text-white dark:bg-emerald-600">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Instructor
                    </p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">
                      {lesson.instructorName}
                    </p>
                  </div>
                </div>

                {/* Vehicle */}
                <div className="flex items-center gap-3 rounded-xl bg-white/60 p-2.5 pr-4 shadow-sm dark:bg-white/[0.06] dark:shadow-none">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                    <Car className="h-4 w-4 text-emerald-600 dark:text-emerald-300" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Vehicle
                    </p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">
                      {lesson.vehicleName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="outline"
              className="mt-6 h-10 w-full rounded-full border-emerald-200 bg-white/50 text-sm font-medium text-emerald-900 outline-none hover:bg-emerald-50 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5 dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#050505]"
            >
              View My Bookings →
            </Button>
          </>
        ) : (
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-[15px] text-neutral-500 dark:text-zinc-400">
              No upcoming lessons booked.
            </p>
            <Button
              variant="outline"
              className="mt-6 h-10 w-full rounded-full border-emerald-200 bg-white/50 text-sm font-medium text-emerald-900 outline-none hover:bg-emerald-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
            >
              Book a Lesson →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}