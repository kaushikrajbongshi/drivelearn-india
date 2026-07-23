"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import CTAButtons from "./CTAButtons";
import CTAStats from "./CTAStats";

export default function CTACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-border/60
        bg-card/70
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 px-8 py-14 md:px-16 md:py-20">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Start Your Driving Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Ready to Find the
          <span className="text-primary"> Perfect Driving School?</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Compare verified driving schools, explore courses, book lessons
          online, and track your learning progress — all from one modern
          platform built for learners across India.
        </p>

        {/* Buttons */}
        <CTAButtons />

        {/* Stats */}
        <CTAStats />

      </div>
    </motion.div>
  );
}