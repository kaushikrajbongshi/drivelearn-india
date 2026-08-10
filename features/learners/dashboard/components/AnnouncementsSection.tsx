"use client";

import { ArrowRight, Bell, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";

const announcements = [
    {
        id: 1,
        title: "Holiday schedule updated",
        description:
            "Your driving school will remain closed on August 15.",
        date: "2 hours ago",
        type: "important",
    },
    {
        id: 2,
        title: "New lesson material available",
        description:
            "Your instructor has added new practice material.",
        date: "Yesterday",
        type: "update",
    },
    {
        id: 3,
        title: "Upcoming theory session",
        description:
            "Your next theory session is scheduled for August 13.",
        date: "2 days ago",
        type: "session",
    },
];

export default function AnnouncementsSection() {
    return (
        <section className="border-t border-neutral-200/70 pt-8 dark:border-white/[0.08]">
            {/* Header */}
            <div className="flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Stay Updated
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Announcements
                    </h2>
                </div>

                <Button
                    variant="ghost"
                    className="group hidden rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                >
                    View All
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>

            {/* Announcements */}
            <div className="mt-6 divide-y divide-neutral-200/70 dark:divide-white/[0.08]">
                {announcements.map((announcement) => (
                    <button
                        key={announcement.id}
                        type="button"
                        className="group flex w-full items-start gap-4 py-5 text-left transition-colors first:pt-0 last:pb-0 hover:bg-neutral-50/50 dark:hover:bg-white/[0.02]"
                    >
                        {/* Icon */}
                        <div
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${announcement.type === "important"
                                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                                    : "bg-neutral-100 text-neutral-500 dark:bg-white/[0.06] dark:text-zinc-400"
                                }`}
                        >
                            {announcement.type === "session" ? (
                                <CalendarDays className="h-4 w-4" />
                            ) : (
                                <Bell className="h-4 w-4" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="truncate text-sm font-semibold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                                    {announcement.title}
                                </h3>

                                <span className="shrink-0 text-xs text-neutral-400 dark:text-zinc-600">
                                    {announcement.date}
                                </span>
                            </div>

                            <p className="mt-1 text-sm leading-6 text-neutral-500 dark:text-zinc-500">
                                {announcement.description}
                            </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="mt-2 hidden h-4 w-4 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500 sm:block dark:text-zinc-700" />
                    </button>
                ))}
            </div>

            {/* Mobile action */}
            <Button
                variant="ghost"
                className="group mt-6 w-full rounded-full text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
                View All Announcements
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </section>
    );
}