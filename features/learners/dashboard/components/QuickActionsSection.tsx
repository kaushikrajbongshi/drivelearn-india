"use client";

import {
    ArrowRight,
    CarFront,
    Download,
    Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const actions = [
    {
        label: "Book an extra lesson",
        description: "Schedule an additional practice session",
        icon: Plus,
    },
    {
        label: "Browse driving schools",
        description: "Explore other available schools",
        icon: CarFront,
    },
    {
        label: "Download progress card",
        description: "Save your latest training progress",
        icon: Download,
    },
];

export default function QuickActionsSection() {
    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                    Quick Actions
                </p>

                <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                    What would you like to do?
                </h2>
            </div>

            {/* Actions */}
            <div className="mt-6 divide-y divide-neutral-200/70 dark:divide-white/[0.08]">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.label}
                            type="button"
                            className="group flex w-full items-center gap-4 py-4 text-left transition-colors first:pt-0 last:pb-0 hover:text-emerald-600 dark:hover:text-emerald-400"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:border-white/10 dark:text-zinc-400 dark:group-hover:border-emerald-400/30 dark:group-hover:text-emerald-400">
                                <Icon className="h-4 w-4" />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                    {action.label}
                                </p>

                                <p className="mt-0.5 text-xs text-neutral-400 dark:text-zinc-500">
                                    {action.description}
                                </p>
                            </div>

                            <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-zinc-700" />
                        </button>
                    );
                })}
            </div>
        </section>
    );
}