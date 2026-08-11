"use client";

import { Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { TodayLesson } from "../types/types";

interface TodayLessonCardProps {
  lesson: TodayLesson | null;
}

export default function TodayLessonCard({ lesson }: TodayLessonCardProps) {
  if (!lesson) {
    return (
      <section className="relative overflow-hidden rounded-3xl bg-neutral-50 px-6 py-8 dark:bg-white/[0.03]">
        <div className="relative z-10 max-w-md">
          <p className="text-sm font-medium text-neutral-500 dark:text-zinc-400">Today</p>
          <h2 className="mt-2 font-display text-xl font-bold text-neutral-900 dark:text-white">
            No lesson scheduled
          </h2>
          <p className="mt-1.5 text-[15px] text-neutral-500 dark:text-zinc-400">
            Book a slot and keep your progress moving.
          </p>
          <Button size="sm" className="mt-5 h-9 rounded-full bg-neutral-900 px-5 text-sm font-medium text-white dark:bg-white dark:text-neutral-900">
            Book a lesson
          </Button>
        </div>
      </section>
    );
  }

  const initials = lesson.instructorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-200 px-7 py-8 text-neutral-900 dark:border-0 dark:text-white sm:px-9 sm:py-9">
      {/* ===================== BACKGROUND ===================== */}
      <div className="absolute inset-0 bg-white dark:bg-[#050505]" />

      {/* Strong controlled green only in top-right */}
      <div className="absolute -right-24 -top-24 h-[320px] w-[320px] animate-[pulseGlow_6s_ease-in-out_infinite] rounded-full bg-emerald-400/15 blur-[90px] dark:bg-emerald-400/30" />
      <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-emerald-500/8 via-transparent to-transparent dark:from-emerald-500/15" />

      {/* Soft ambient light from top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent dark:from-emerald-400/20" />

      {/* ===================== ANIMATED ROAD ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15]">
        {/* Left perspective line */}
        <div className="absolute bottom-0 left-[22%] h-[85%] w-[1px] origin-bottom -rotate-[22deg] bg-gradient-to-t from-emerald-400/60 to-transparent dark:from-emerald-300/80" />

        {/* Right perspective line */}
        <div className="absolute bottom-0 right-[22%] h-[85%] w-[1px] origin-bottom rotate-[22deg] bg-gradient-to-t from-emerald-400/60 to-transparent dark:from-emerald-300/80" />
      </div>

      {/* ===================== LIGHT TRAIL ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 h-full w-32 animate-[lightTrail_9s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-emerald-400/5 to-transparent dark:via-emerald-400/10" />
      </div>

      {/* ===================== DRIVING CAR ===================== */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 h-8 overflow-hidden">
        <div className="absolute bottom-0 animate-[driveCar_14s_linear_infinite]">
          <div className="relative">
            <Car
              className="h-6 w-6 text-emerald-600 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] dark:text-emerald-300 dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              strokeWidth={1.5}
            />
            {/* tiny light trail behind car */}
            <div className="absolute top-1/2 -left-8 h-[2px] w-8 -translate-y-1/2 bg-gradient-to-r from-transparent to-emerald-400/40 dark:to-emerald-400/50" />
          </div>
        </div>
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] font-medium text-emerald-700 dark:text-emerald-300">
            <Clock className="h-3.5 w-3.5" />
            Today&apos;s Lesson
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-wider text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-200">
            {lesson.status === "confirmed" ? "CONFIRMED" : "PENDING"}
          </span>
        </div>

        {/* Time */}
        <div className="mt-7">
          <p className="font-display text-[3rem] font-bold leading-none tracking-tight text-neutral-900 dark:text-white sm:text-[3.25rem]">
            {lesson.time}
          </p>
          <p className="mt-2.5 text-lg font-medium text-neutral-700 dark:text-white/90">{lesson.title}</p>
        </div>

        {/* Instructor + Vehicle */}
        <div className="mt-9 flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-emerald-400 shadow-emerald-500/20 dark:border-emerald-400/50 dark:shadow-[0_0_20px_rgba(52,211,153,0.25)]">
              <AvatarImage src="" alt={lesson.instructorName} />
              <AvatarFallback className="bg-emerald-500 text-sm font-semibold text-white dark:bg-emerald-600">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[15px] font-medium text-neutral-900 dark:text-white">{lesson.instructorName}</p>
              <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70">Instructor</p>
            </div>
          </div>

          <div className="h-10 w-px bg-neutral-200 dark:bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 dark:border-white/10 dark:bg-white/10">
              <Car className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-300" />
            </div>
            <div>
              <p className="text-[15px] font-medium text-neutral-900 dark:text-white">{lesson.vehicleName}</p>
              <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70">Vehicle</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Button
            variant="outline"
            className=" h-10 p-5 rounded-full border-emerald-200 bg-white/50 text-sm font-medium text-emerald-900 outline-none hover:bg-emerald-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
          >
            View Lesson Details →
          </Button>
        </div>
      </div>

      {/* ===================== KEYFRAMES ===================== */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.08);
          }
        }

        @keyframes lightTrail {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(400%);
            opacity: 0;
          }
        }

        @keyframes driveCar {
          0% {
            transform: translateX(-50px) translateY(0);
          }
          20% {
            transform: translateX(20%) translateY(-2px);
          }
          40% {
            transform: translateX(40%) translateY(0);
          }
          60% {
            transform: translateX(60%) translateY(-2px);
          }
          80% {
            transform: translateX(80%) translateY(0);
          }
          100% {
            transform: translateX(calc(100% + 60px)) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}