"use client";

import { motion } from "framer-motion";

export default function StatsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        Trusted Across India
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Numbers That Speak for Themselves
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-zinc-500 dark:text-zinc-400">
        Thousands of learners and hundreds of verified driving schools trust
        DriveLearn India every day.
      </p>
    </motion.div>
  );
}