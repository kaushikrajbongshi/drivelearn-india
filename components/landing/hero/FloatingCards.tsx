"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Star,
} from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      {/* Floating Card 1: Student Progress */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          x: { duration: 0.8, delay: 0.6, type: "spring" },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute -right-2 md:-right-4 top-[10%] md:top-[15%] w-48 md:w-64 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl shadow-black/5 z-20"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                className="stroke-zinc-200 dark:stroke-zinc-800"
                strokeWidth="10%"
                fill="none"
              />

              <circle
                cx="50%"
                cy="50%"
                r="40%"
                className="stroke-indigo-600 dark:stroke-indigo-500"
                strokeWidth="10%"
                fill="none"
                strokeDasharray="250%"
                strokeDashoffset="60%"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-bold">
              75%
            </div>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-semibold text-zinc-900 dark:text-white line-clamp-1">
              Progress
            </h4>

            <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
              12/16 Lessons
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: [5, -5, 5] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          x: { duration: 0.8, delay: 0.8, type: "spring" },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="absolute -left-2 md:-left-8 bottom-[15%] md:bottom-[20%] w-56 md:w-72 p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl shadow-indigo-500/10 z-20"
      >
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-medium">
              Select Slot
            </span>
          </div>

          <span className="text-xs bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-1 rounded-full font-medium">
            Tomorrow
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="py-2 text-center text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
            09:00
          </div>

          <div className="py-2 text-center text-xs font-medium rounded-lg bg-indigo-600 text-white shadow-sm border border-indigo-500">
            11:30
          </div>

          <div className="py-2 text-center text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            14:00
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <span className="text-sm font-bold">
            ₹500
            <span className="text-xs font-normal text-zinc-500">
              {" "}
              /class
            </span>
          </span>

          <button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg">
            Confirm
          </button>
        </div>
      </motion.div>

      {/* Floating Card 3 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [-2, 2, -2] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          scale: {
            duration: 0.5,
            delay: 1.2,
            type: "spring",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
        className="absolute right-4 md:right-10 bottom-[5%] md:bottom-[10%] px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center gap-2 md:gap-3 z-30"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          AJ
        </div>

        <div>
          <div className="flex gap-1 mb-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-3 h-3 text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            &quot;Excellent instructor!&quot;
          </p>
        </div>
      </motion.div>
    </>
  );
}