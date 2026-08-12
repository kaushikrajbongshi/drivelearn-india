"use client";

import { ArrowUpRight, HelpCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DashboardSupport() {
    return (
        <section className="flex flex-col gap-4 border-t border-neutral-200/70 pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-zinc-500">
                <ShieldCheck className="h-4 w-4" />

                <span>Your account and learning data are secure.</span>
            </div>

            <Button
                type="button"
                variant="ghost"
                className="group w-fit rounded-full px-3 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
            >
                <HelpCircle className="mr-2 h-4 w-4" />
                Need help?
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
        </section>
    );
}