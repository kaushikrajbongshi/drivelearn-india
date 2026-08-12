"use client";

import {
    ArrowRight,
    CalendarClock,
    CreditCard,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { dashboardData } from "../data/dashboardData";

export default function PackageSection() {
    const { package: learnerPackage } = dashboardData;

    const sessionsUsed =
        learnerPackage.sessionsTotal - learnerPackage.sessionsLeft;

    const progress =
        (sessionsUsed / learnerPackage.sessionsTotal) * 100;

    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Package
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Your package
                    </h2>
                </div>

                <CreditCard className="h-5 w-5 text-neutral-400 dark:text-zinc-500" />
            </div>

            {/* Package information */}
            <div className="mt-7">
                <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                    {learnerPackage.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500 dark:text-zinc-400">
                    <span>
                        {learnerPackage.sessionsLeft} of{" "}
                        {learnerPackage.sessionsTotal} sessions left
                    </span>

                    <span className="flex items-center gap-1.5">
                        <CalendarClock className="h-4 w-4" />
                        Expires in {learnerPackage.expiresIn}
                    </span>
                </div>

                {/* Progress */}
                <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-zinc-500">
                        <span>Sessions used</span>
                        <span>
                            {sessionsUsed}/{learnerPackage.sessionsTotal}
                        </span>
                    </div>

                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/[0.08]">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-7 flex flex-col gap-4 border-t border-neutral-200/70 pt-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-400 dark:text-zinc-500">
                    Renew your package before it expires to continue your training.
                </p>

                <Button
                    type="button"
                    className="group h-10 rounded-full bg-emerald-600 px-5 text-sm font-medium text-white shadow-none hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                    Renew Package
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </section>
    );
}