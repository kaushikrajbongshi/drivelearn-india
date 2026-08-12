"use client";

import { dashboardData } from "../data/dashboardData";

export default function WelcomeSection() {
  return (
    <section className="border-b border-neutral-200/70 pb-8 dark:border-white/10">
      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
        Learner Dashboard
      </p>

      <div className="mt-2 flex items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
          Good morning, {dashboardData.learnerName}
        </h1>

      </div>

      <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-zinc-400 sm:text-base">
        Your test-ready day is getting closer.
      </p>
    </section>
  );
}