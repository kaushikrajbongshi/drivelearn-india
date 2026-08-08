"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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

  const checkRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const completedItems: string[] = [];
  if (drivingSchool) completedItems.push("Driving school selected");
  if (coursePackage) completedItems.push("Course package selected");
  if (paymentCompleted) completedItems.push("Payment completed");

  function handleGoToDashboard() {
    const rect = checkRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    setIsTransitioning(true);
  }

  const maxRadius =
    typeof window !== "undefined"
      ? Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y)
        )
      : 0;

  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-6 py-8 text-center sm:px-0">
        {/* Success indicator — also the transition's origin point */}
        <motion.div
          ref={checkRef}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500"
        >
          <Check className="h-8 w-8 text-white" strokeWidth={3} />
        </motion.div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          You're all set!
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
          Your learner account is ready.

        </p>

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

        {(drivingSchool || coursePackage) && (
          <div className="mt-6 w-full space-y-3 rounded-xl border border-black/10 p-4 text-left dark:border-white/10">
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

        <Button
          type="button"
          size="lg"
          onClick={handleGoToDashboard}
          disabled={isTransitioning}
          className="mt-8 h-12 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Go to Dashboard →
        </Button>
      </div>

      {/* Circular reveal transition — expands from the success icon */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-600 dark:bg-emerald-500"
            initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
            animate={{ clipPath: `circle(${maxRadius}px at ${origin.x}px ${origin.y}px)` }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={() => router.push("/learner/dashboard")}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
            >
              <Check className="h-8 w-8 text-white" strokeWidth={3} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}