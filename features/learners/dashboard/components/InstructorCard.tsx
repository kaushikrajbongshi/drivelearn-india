"use client";

import { User, Star } from "lucide-react";
import Link from "next/link";
import type { InstructorSummary } from "../types/dashboard";

interface InstructorCardProps {
    instructor: InstructorSummary | null;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                <User className="h-3.5 w-3.5" />
                Your Instructor
            </p>

            {instructor ? (
                <>
                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                            {instructor.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                                {instructor.name}
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-zinc-400">{instructor.role}</p>
                        </div>
                    </div>

                    <p className="mt-3 flex items-center gap-1 text-xs text-neutral-500 dark:text-zinc-400">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-medium text-neutral-700 dark:text-zinc-200">{instructor.rating}</span>
                        ({instructor.reviewCount})
                    </p>
                </>
            ) : (
                <p className="mt-3 text-sm text-neutral-500 dark:text-zinc-400">
                    No instructor assigned yet.
                </p>
            )}

            <Link
                href="/learner/instructor"
                className="mt-auto pt-4 text-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
                View Profile →
            </Link>
        </div>
    );
}