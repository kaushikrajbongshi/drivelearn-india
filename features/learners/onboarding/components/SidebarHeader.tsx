"use client";

import { motion } from "motion/react";

import Logo from "@/components/layout/navbar/Logo";

interface SidebarHeaderProps {
  completedSteps: number;
  totalSteps: number;
}

export default function SidebarHeader({
  completedSteps,
  totalSteps,
}: SidebarHeaderProps) {
  const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

  return (
    <div className="px-6 py-6">
      <Logo />

      <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          className="h-full rounded-full bg-emerald-600 dark:bg-emerald-500"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}