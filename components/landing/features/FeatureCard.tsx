"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}
export default function FeatureCard({
    title,
    description,
    icon: Icon,
    index,
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
            }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
        >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-indigo-100 dark:border-zinc-700 shadow-sm">

                <Icon className="h-7 w-7 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />

            </div>

            {/* Content */}

            <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {title}
            </h3>

            <p className="leading-7 text-zinc-500 dark:text-zinc-400">
                {description}
            </p>

            {/* Learn More */}

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

                Learn More

                <ArrowUpRight className="h-4 w-4" />

            </div>
        </motion.div>
    );
}