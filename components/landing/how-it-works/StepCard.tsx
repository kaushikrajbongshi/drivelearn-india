"use client";

import { motion } from "framer-motion";
import type { Step } from "./step-types";

interface StepCardProps extends Omit<Step, "id"> {
  stepNumber: number;
  index: number;
  isLast?: boolean;
}

export default function StepCard({
  title,
  description,
  icon: Icon,
  stepNumber,
  index,
  isLast = false,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector */}
      {!isLast && (
        <div className="absolute left-[calc(50%+3rem)] top-8 hidden h-[2px] w-[calc(100%-3rem)] bg-gradient-to-r from-indigo-500/40 to-transparent xl:block" />
      )}

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 to-white shadow-lg dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">

        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />

        {/* Step Number */}
        <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-md">
          {stepNumber}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>

      <p className="max-w-xs leading-7 text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}