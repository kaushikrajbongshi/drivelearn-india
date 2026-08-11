"use client";

import { Route as RouteIcon, Car } from "lucide-react";
import Link from "next/link";
import type { ProgressSummary } from "../types/types";

interface ProgressCardProps {
  progress: ProgressSummary;
}

export default function ProgressCard({ progress }: ProgressCardProps) {
  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden px-6 py-7 sm:px-7">
      {/* ===================== STATIC BACKGROUND ===================== */}
      {/* Strong controlled green only in top-right (No pulse animation, transparent base) */}
      <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-emerald-100/80 blur-[90px] dark:bg-emerald-400/30" />
      <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-emerald-100/50 via-transparent to-transparent dark:from-emerald-500/15" />

      {/* Soft ambient light from top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent dark:from-emerald-400/20" />

      {/* ===================== STATIC ROAD LINES ===================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-[0.15]">
        {/* Left perspective line */}
        <div className="absolute bottom-0 left-[22%] h-[85%] w-[1px] origin-bottom -rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />

        {/* Right perspective line */}
        <div className="absolute bottom-0 right-[22%] h-[85%] w-[1px] origin-bottom rotate-[22deg] bg-gradient-to-t from-emerald-400 to-transparent dark:from-emerald-300/80" />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-emerald-700 dark:text-emerald-300">
          <RouteIcon className="h-3.5 w-3.5" />
          Your Journey
        </div>

        {/* Main progress section */}
        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-2xl font-bold tabular-nums text-neutral-900 dark:text-white">
              {progress.percentage}%
            </span>

            <span className="text-[13px] text-neutral-600 dark:text-white/80">
              {progress.lessonsCompleted} of {progress.lessonsTotal} lessons
            </span>
          </div>

          {/* Route bar */}
          <div className="relative mt-5 h-7">
            {/* Dashed route */}
            <div
              className="absolute left-0 right-0 top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed border-emerald-300/60 dark:border-white/20"
              aria-hidden="true"
            />

            {/* Filled progress */}
            <div
              className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-emerald-500 transition-all duration-700 motion-reduce:transition-none dark:bg-emerald-400"
              style={{
                width: `${progress.percentage}%`,
              }}
              aria-hidden="true"
            />

            {/* ===================== ANIMATED CAR ===================== */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 motion-reduce:transition-none"
              style={{
                left: `${progress.percentage}%`,
              }}
            >
              {/* Driving trail */}
              <div className="absolute right-3 top-1/2 h-[2px] w-8 -translate-y-1/2 bg-gradient-to-r from-transparent to-emerald-400/50 dark:to-emerald-300/50" />

              {/* Car marker */}
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_0_12px_rgba(52,211,153,0.35)] dark:bg-emerald-400 dark:text-emerald-950">
                <Car
                  className="h-3.5 w-3.5 animate-[carBounce_1.8s_ease-in-out_infinite] motion-reduce:animate-none"
                  strokeWidth={2.5}
                />

                {/* Small glow */}
                <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Practical + Theory */}
        <div className="mt-7 space-y-4">
          {/* Practical */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[13px] text-neutral-600 dark:text-white/80">
                Practical
              </span>

              <span className="text-[13px] font-medium tabular-nums text-neutral-900 dark:text-white">
                {progress.practicalCompleted}
                <span className="text-neutral-500 dark:text-white/50">
                  /{progress.practicalTotal}
                </span>
              </span>
            </div>

            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-700 motion-reduce:transition-none dark:bg-emerald-400"
                style={{
                  width: `${(progress.practicalCompleted / progress.practicalTotal) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Theory */}
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[13px] text-neutral-600 dark:text-white/80">
                Theory
              </span>

              <span className="text-[13px] font-medium tabular-nums text-neutral-900 dark:text-white">
                {progress.theoryCompleted}
                <span className="text-neutral-500 dark:text-white/50">
                  /{progress.theoryTotal}
                </span>
              </span>
            </div>

            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-500/80 transition-all duration-700 motion-reduce:transition-none dark:bg-emerald-400/80"
                style={{
                  width: `${(progress.theoryCompleted / progress.theoryTotal) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Link
          href="/learner/progress"
          className="mt-auto pt-6 text-[13px] font-medium text-emerald-700 outline-none transition-colors hover:text-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus-visible:ring-offset-[#050505]"
        >
          View full progress →
        </Link>
      </div>

      {/* ===================== CAR ANIMATION ===================== */}
      <style jsx>{`
        @keyframes carBounce {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          25% {
            transform: translateY(-1px) rotate(-2deg);
          }

          50% {
            transform: translateY(0) rotate(0deg);
          }

          75% {
            transform: translateY(1px) rotate(2deg);
          }
        }
      `}</style>
    </section>
  );
}