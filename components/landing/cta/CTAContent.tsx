"use client";

import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import CTAStats from "./CTAStats";

export default function CTAContent() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl text-center">

      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur"
      >
        🚀 Start Your Driving Journey
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl"
      >
        Ready to Learn Driving
        <br />
        <span className="bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-clip-text text-transparent">
          With Confidence?
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
      >
        Join thousands of learners who found trusted driving schools,
        experienced instructors, and flexible schedules through
        DriveLearn India.
      </motion.p>

      {/* Buttons */}
      <CTAButtons />

      {/* Stats */}
      <CTAStats />

    </div>
  );
}