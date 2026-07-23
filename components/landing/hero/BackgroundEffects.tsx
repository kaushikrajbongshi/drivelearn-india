"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Left Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      {/* Right Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="absolute top-[20%] -right-[10%] h-[60%] w-[40%] rounded-full bg-sky-400/20 blur-[120px]"
      />
    </div>
  );
}