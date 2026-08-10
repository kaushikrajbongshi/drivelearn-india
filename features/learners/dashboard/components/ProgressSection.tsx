"use client";

import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProgressSection() {
  const completedLessons = 8;
  const totalLessons = 12;
  const progress = Math.round(
    (completedLessons / totalLessons) * 100
  );

  return (
    <section className="py-2">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Your Progress
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Keep going, you&apos;re doing great.
          </h2>
        </div>

        <Button
          variant="ghost"
          className="group hidden rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
        >
          View Progress
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Progress */}
      <div className="mt-7">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              {progress}%
            </span>

            <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-500">
              {completedLessons} of {totalLessons} lessons completed
            </p>
          </div>

          <span className="hidden text-sm font-medium text-neutral-500 dark:text-zinc-400 sm:block">
            {totalLessons - completedLessons} lessons remaining
          </span>
        </div>

        {/* Progress line */}
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-7 grid gap-5 border-t border-neutral-200/70 pt-6 dark:border-white/[0.08] sm:grid-cols-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CircleCheck className="h-5 w-5 text-emerald-500" />

            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                Practical
              </p>

              <p className="text-xs text-neutral-500 dark:text-zinc-500">
                6 of 8 lessons completed
              </p>
            </div>
          </div>

          <span className="text-sm font-semibold text-neutral-900 dark:text-white">
            75%
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 sm:border-l sm:border-neutral-200/70 sm:pl-6 dark:sm:border-white/[0.08]">
          <div className="flex items-center gap-3">
            <CircleCheck className="h-5 w-5 text-emerald-500" />

            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                Theory
              </p>

              <p className="text-xs text-neutral-500 dark:text-zinc-500">
                2 of 4 lessons completed
              </p>
            </div>
          </div>

          <span className="text-sm font-semibold text-neutral-900 dark:text-white">
            50%
          </span>
        </div>
      </div>

      {/* Mobile action */}
      <Button
        variant="ghost"
        className="group mt-5 w-full rounded-full text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
      >
        View Progress
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </section>
  );
}