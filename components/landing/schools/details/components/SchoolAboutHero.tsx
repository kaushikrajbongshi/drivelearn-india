"use client";

import Link from "next/link";
import {
    ArrowLeft,
    BadgeCheck,
    MapPin,
    Share2,
    Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DrivingSchool } from "../../types/school";
import SchoolDetailsStats from "./SchoolDetailsStats";

interface SchoolAboutHeroProps {
    school: DrivingSchool;
}

export default function SchoolAboutHero({ school }: SchoolAboutHeroProps) {
    const handleShare = async () => {
        if (typeof navigator === "undefined") return;
        if (navigator.share) {
            await navigator.share({
                title: school.name,
                text: `Check out ${school.name}`,
                url: window.location.href,
            });
        } else {
            await navigator.clipboard?.writeText(window.location.href);
        }
    };

    return (
        <section>
            {/* Top actions */}
            <div className="mb-5 flex items-center justify-between">
                <Link
                    href="/schools"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-[#E51B23] dark:text-zinc-300 dark:hover:text-[#E51B23]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Schools
                </Link>

                <Button
                    type="button"
                    variant="outline"
                    onClick={handleShare}
                    className="h-10 gap-2 rounded-lg border-zinc-200 bg-white text-zinc-700 shadow-none hover:border-[#E51B23]/30 hover:bg-[#E51B23]/5 hover:text-[#E51B23] dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300 dark:hover:border-[#E51B23]/40 dark:hover:bg-[#E51B23]/10 dark:hover:text-[#E51B23]"
                >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                </Button>
            </div>

            {/* About Card replaces Hero Image */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#151515]">
                {/* Subtle top accent bar */}
                <div className="h-1 w-full bg-[#E51B23]" />

                <div className="p-5 sm:p-7">
                    {/* School Name + Verified */}
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                            {school.name}
                        </h1>
                        {school.verified && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E51B23]/10 px-3 py-1 text-xs font-semibold text-[#E51B23]">
                                <BadgeCheck className="h-4 w-4" />
                                Verified
                            </span>
                        )}
                    </div>

                    {/* Rating + Location */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-[#E51B23] text-[#E51B23]" />
                            <span className="font-semibold text-zinc-900 dark:text-white">
                                {school.rating.toFixed(1)}
                            </span>
                            <span>({school.reviewCount} Reviews)</span>
                        </span>
                        <span className="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-[#E51B23]" />
                            <span>
                                {school.address.area}, {school.address.city},{" "}
                                {school.address.state}
                            </span>
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                        {school.description}
                    </p>
                <SchoolDetailsStats school={school} />
                </div>
            </div>
        </section>
    );
}