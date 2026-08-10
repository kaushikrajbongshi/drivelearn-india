"use client";

import { Megaphone, Calendar, Gift } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Announcement } from "../types/dashboard";

interface AnnouncementsCardProps {
    announcements: Announcement[];
}

export default function AnnouncementsCard({ announcements }: AnnouncementsCardProps) {
    return (
        <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#1c1c1c]">
            <div className="flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-zinc-400">
                    <Megaphone className="h-3.5 w-3.5" />
                    Announcements
                </p>
                <Link
                    href="/learner/announcements"
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                    View all →
                </Link>
            </div>

            {announcements.length === 0 ? (
                <p className="mt-4 text-sm text-neutral-500 dark:text-zinc-400">No announcements right now.</p>
            ) : (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {announcements.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "flex items-start gap-3 rounded-xl p-3",
                                item.variant === "offer"
                                    ? "bg-amber-50 dark:bg-amber-500/10"
                                    : "bg-emerald-50 dark:bg-emerald-500/10"
                            )}
                        >
                            {item.variant === "offer" ? (
                                <Gift className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                            ) : (
                                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            )}
                            <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">{item.title}</p>
                                <p className="mt-0.5 text-xs text-neutral-500 dark:text-zinc-400">{item.timeAgo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}