"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  MapPin,
  Star,
} from "lucide-react";

const stats = [
  {
    id: 1,
    number: "500+",
    label: "Verified Driving Schools",
    icon: ShieldCheck,
  },
  {
    id: 2,
    number: "10K+",
    label: "Happy Learners",
    icon: Users,
  },
  {
    id: 3,
    number: "120+",
    label: "Cities Covered",
    icon: MapPin,
  },
  {
    id: 4,
    number: "4.9★",
    label: "Average Rating",
    icon: Star,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-50px",
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative flex flex-col items-start p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default"
          >
            {/* Hover Line */}
            <div className="absolute inset-x-0 -top-px h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-indigo-500/30 dark:bg-indigo-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-indigo-100/50 dark:border-zinc-700/50 shadow-sm group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30 transition-colors duration-300">
                <Icon
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 ease-out"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Number */}
            <div className="space-y-1">
              <h3 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {stat.number}
              </h3>

              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-sky-500/5 dark:from-sky-400/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
}