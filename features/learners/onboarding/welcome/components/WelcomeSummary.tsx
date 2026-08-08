"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { OnboardingSummary } from "../types/summary";

interface WelcomeSummaryProps {
  summary: OnboardingSummary;
}

export default function WelcomeSummary({ summary }: WelcomeSummaryProps) {
  const router = useRouter();
  const { drivingSchool, coursePackage, paymentCompleted } = summary;

  const completedItems: string[] = [];
  if (drivingSchool) completedItems.push("Driving school selected");
  if (coursePackage) completedItems.push("Course package selected");
  if (paymentCompleted) completedItems.push("Payment completed");

  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-6 pb-8 text-center sm:px-0">
      {/* Success indicator */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500"
      >
        <Check className="h-8 w-8 text-white" strokeWidth={3} />
      </motion.div>

      {/* Main message */}
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        You're all set!
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
        Your learner account is ready.
      </p>

      {/* Onboarding summary */}
      <div className="mt-8 w-full space-y-2 text-left">
        <p className="flex items-center gap-2 text-sm text-neutral-700 dark:text-zinc-200">
          <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          Profile completed
        </p>

        {completedItems.length > 0 ? (
          completedItems.map((item) => (
            <p
              key={item}
              className="flex items-center gap-2 text-sm text-neutral-700 dark:text-zinc-200"
            >
              <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              {item}
            </p>
          ))
        ) : (
          <p className="flex items-center gap-2 text-sm text-neutral-700 dark:text-zinc-200">
            <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            Onboarding completed
          </p>
        )}
      </div>

      {/* Selected information — only if the optional flow was completed */}
      {(drivingSchool || coursePackage) && (
        <div className="mt-4 w-full space-y-3 rounded-xl border border-black/10 p-4 text-left dark:border-white/10">
          {drivingSchool && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-zinc-500">
                Driving School
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                {drivingSchool.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-zinc-400">
                {drivingSchool.location}
              </p>
            </div>
          )}

          {drivingSchool && coursePackage && (
            <div className="h-px bg-black/5 dark:bg-white/10" />
          )}

          {coursePackage && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 dark:text-zinc-500">
                Course
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                {coursePackage.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-zinc-400">
                {coursePackage.lessonCount} lessons
              </p>
            </div>
          )}
        </div>
      )}

      {/* Primary action */}
      <Button
        type="button"
        size="lg"
        onClick={() => router.push("/learner/dashboard")}
        className="mt-5 h-12 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
      >
        Go to Dashboard →
      </Button>
    </div>
  );
}