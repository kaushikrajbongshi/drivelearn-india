"use client";

import Link from "next/link";
import { ArrowUpRight, HelpCircle, ShieldCheck } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="border-t border-neutral-200/70 pt-8 dark:border-white/[0.08]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-400 dark:text-zinc-600">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            Your data is secure
          </span>

          <Link
            href="/learner/help"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-700 dark:hover:text-zinc-300"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Help & Support
          </Link>
        </div>

        <Link
          href="/learner/feedback"
          className="group inline-flex items-center gap-1 text-xs font-medium text-neutral-500 transition-colors hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-400"
        >
          Give feedback
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </footer>
  );
}