"use client";

import CTAContent from "./CTAContent";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTAContent />
      </div>
    </section>
  );
}