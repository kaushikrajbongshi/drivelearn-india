"use client";

import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RateLessonSection() {
    return (
        <section className="rounded-2xl border border-neutral-200 bg-transparent p-5 dark:border-white/10 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                        Recent Lesson
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        How was your lesson?
                    </h2>

                    <p className="mt-2 text-sm text-neutral-500 dark:text-zinc-400">
                        How was your lesson with Rakesh Sharma?
                    </p>

                    <p className="mt-1 text-xs text-neutral-400 dark:text-zinc-500">
                        Monday, 3 August
                    </p>
                </div>

                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                            key={rating}
                            type="button"
                            aria-label={`Rate ${rating} out of 5`}
                            className="group rounded-full p-1.5 transition-colors hover:bg-amber-50 dark:hover:bg-amber-400/10"
                        >
                            <Star className="h-6 w-6 text-neutral-300 transition-colors group-hover:fill-amber-400 group-hover:text-amber-400 dark:text-zinc-700" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-20 flex justify-end border-t border-neutral-200/70 pt-5 dark:border-white/[0.08]">
                <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-full border-neutral-200 bg-transparent px-5 text-sm shadow-none hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
                >
                    Give Feedback
                </Button>
            </div>
        </section>
    );
}