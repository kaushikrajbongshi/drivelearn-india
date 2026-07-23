"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start space-y-8 max-w-2xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm"
      >
        <span className="text-sm">🚗</span>

        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          India&apos;s Trusted Driving School Marketplace
        </span>
      </motion.div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="space-y-3"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Learn Driving
          <br className="hidden sm:block" />

          with{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">
            Confidence.
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-600 dark:text-zinc-400 tracking-tight">
          Find Verified Driving Schools Near You.
        </h2>
      </motion.div>

      {/* Supporting Text */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl"
      >
        The all-in-one platform to search, compare, book, and track your
        driving journey. Empowering learners and driving schools across India
        with seamless experiences.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-2xl font-medium transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
          Find Driving Schools

          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111] hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
          Register Your School
        </button>
      </motion.div>

      {/* Trust Indicators */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="flex flex-wrap items-center gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/50 w-full"
      >
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />

          Verified Schools
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          <Award className="w-5 h-5 text-indigo-500" />

          Certified Instructors
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          <CheckCircle2 className="w-5 h-5 text-sky-500" />

          Secure Booking
        </div>
      </motion.div>

    </div>
  );
}