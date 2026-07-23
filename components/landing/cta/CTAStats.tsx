"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Verified Driving Schools",
  },
  {
    number: "10K+",
    label: "Happy Learners",
  },
  {
    number: "4.9★",
    label: "Average Rating",
  },
];

export default function CTAStats() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center gap-8 border-t border-white/10 pt-10 sm:flex-row sm:gap-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white">
            {stat.number}
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}