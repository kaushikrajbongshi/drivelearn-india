"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import type { SidebarStep } from "../types/onboarding";
import { stepIcons } from "../data/stepIcons";

interface SidebarStepsProps {
  steps: SidebarStep[];
}

export default function SidebarSteps({ steps }: SidebarStepsProps) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const Icon = stepIcons[index] ?? stepIcons[0];

        return (
          <div key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast && (
              <div className="absolute left-5 top-10 h-full w-px bg-foreground/10">
                <div
                  className={cn(
                    "w-full origin-top bg-emerald-600 transition-all duration-500 ease-in-out dark:bg-emerald-500",
                    step.status === "completed" ? "h-full" : "h-0"
                  )}
                />
              </div>
            )}

            <div className="relative z-10 flex h-10 w-10 items-center justify-center">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",

                  step.status === "completed" &&
                    "scale-100 border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-500",

                  step.status === "current" &&
                    "scale-110 border-emerald-600 bg-white text-emerald-600 ring-4 ring-emerald-600/15 dark:border-emerald-500 dark:bg-[#1c1c1c] dark:text-emerald-400 dark:ring-emerald-500/20",

                  step.status === "upcoming" &&
                    "border-black/20 bg-white/60 text-neutral-500 dark:border-white/20 dark:bg-[#1c1c1c] dark:text-neutral-400"
                )}
              >
                {step.status === "completed" ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Check className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <Icon className="h-4 w-4" />
                )}
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="flex items-center gap-2">
                <h3
                  className={cn(
                    "mt-2 text-sm font-semibold transition-colors",
                    step.status === "upcoming"
                      ? "text-neutral-500 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-white"
                  )}
                >
                  {step.title}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}