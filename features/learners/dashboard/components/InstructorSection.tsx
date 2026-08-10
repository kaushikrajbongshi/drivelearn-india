"use client";

import {
    ArrowRight,
    MessageCircle,
    Phone,
    Star,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function InstructorSection() {
    return (
        <section className="border-t border-neutral-200/70 pt-8 dark:border-white/[0.08]">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Your Instructor
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Meet Rahul
                    </h2>
                </div>

                <Button
                    variant="ghost"
                    className="group hidden rounded-full px-3 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:flex dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                >
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>

            <div className="mt-6 flex flex-col gap-6 border-y border-neutral-200/70 py-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
                {/* Instructor */}
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 shrink-0 ring-4 ring-emerald-50 dark:ring-emerald-500/10">
                        <AvatarImage
                            src=""
                            alt="Rahul Sharma"
                        />

                        <AvatarFallback className="bg-emerald-100 text-lg font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                            RS
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                Rahul Sharma
                            </h3>

                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                                Verified
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-500">
                            Driving Instructor · 5+ years experience
                        </p>

                        <div className="mt-2 flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                            <span className="text-sm font-medium text-neutral-800 dark:text-zinc-200">
                                4.8
                            </span>

                            <span className="text-xs text-neutral-400 dark:text-zinc-600">
                                · 120+ lessons
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
                        aria-label="Call instructor"
                    >
                        <Phone className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full border-neutral-200 bg-transparent shadow-none hover:bg-neutral-50 dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
                        aria-label="Message instructor"
                    >
                        <MessageCircle className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        className="hidden h-10 rounded-full border-neutral-200 bg-transparent px-5 text-sm shadow-none hover:bg-neutral-50 sm:flex dark:border-white/[0.1] dark:hover:bg-white/[0.05]"
                    >
                        View Profile
                    </Button>
                </div>
            </div>

            {/* Mobile action */}
            <Button
                variant="ghost"
                className="group mt-4 w-full rounded-full text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
                View Profile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
        </section>
    );
}