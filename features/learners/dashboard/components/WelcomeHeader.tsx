"use client";

import { Bell } from "lucide-react";

export default function WelcomeHeader() {
  return (
    <section className="flex items-end justify-between gap-6">
      <div>
        <p className="mb-2 text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
          Learner Dashboard
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
          Good morning, Suman{" "}
          <span className="inline-block">👋</span>
        </h1>

        <p className="mt-2 text-sm text-neutral-500 dark:text-zinc-400 sm:text-base">
          Ready for your next driving lesson?
        </p>
      </div>

      {/* Mobile notification */}
      <button
        type="button"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white lg:hidden"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />

        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-500" />
      </button>
    </section>
  );
}