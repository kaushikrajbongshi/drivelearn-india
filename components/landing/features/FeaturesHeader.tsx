"use client";

import { motion } from "framer-motion";

export default function FeaturesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-400">
        Why Choose DriveLearn India
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Everything You Need to Learn Driving,
        <span className="text-indigo-600 dark:text-indigo-400">
          {" "}All in One Platform
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
        DriveLearn India connects learners, instructors, and driving schools
        through one modern platform that simplifies booking, learning, payments,
        and progress tracking.
      </p>
    </motion.div>
  );
}