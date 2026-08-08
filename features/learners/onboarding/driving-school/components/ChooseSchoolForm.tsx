"use client";

import { useMemo, useState } from "react";
import { Search, Star, MapPin, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { mockSchools } from "../data/mockSchools";
import type { DrivingSchool, SchoolSortBy } from "../types/school";
import SchoolCard from "./SchoolCard";
import SchoolDetailsSheet from "./SchoolDetailsSheet";

interface ChooseSchoolFormProps {
    onContinue: (selectedSchoolId: string | null) => Promise<void> | void;
}

export default function ChooseSchoolForm({ onContinue }: ChooseSchoolFormProps) {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<SchoolSortBy>("distance");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [detailsSchool, setDetailsSchool] = useState<DrivingSchool | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // TODO: replace with getDrivingSchools() API call, likely re-fetching on filter change
    const schools = mockSchools;

    const visibleSchools = useMemo(() => {
        const filtered = schools.filter((s) =>
            `${s.name} ${s.address.city}`.toLowerCase().includes(search.toLowerCase())
        );

        return [...filtered].sort((a, b) => {
            if (sortBy === "distance") return a.distanceKm - b.distanceKm;
            if (sortBy === "rating") return b.rating - a.rating;
            return a.priceStartingFrom - b.priceStartingFrom;
        });
    }, [schools, search, sortBy]);

    const selectedSchool = schools.find((s) => s.id === selectedId) ?? null;

    async function handleSkip() {
        setIsSubmitting(true);
        try {
            await onContinue(null);
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleContinue() {
        setIsSubmitting(true);
        try {
            await onContinue(selectedId);
        } finally {
            setIsSubmitting(false);
        }
    }


    return (

        <div className="mx-auto flex h-full min-h-0 w-full max-w-md flex-col px-6 py-8 sm:px-0">
            <style>{`
        .thin-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgb(0 0 0 / 0.15);
          border-radius: 9999px;
        }
        .dark .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgb(255 255 255 / 0.15);
        }
        .thin-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(0 0 0 / 0.15) transparent;
        }
        .dark .thin-scrollbar {
          scrollbar-color: rgb(255 255 255 / 0.15) transparent;
        }
      `}</style>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Choose Driving School
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                Compare nearby schools and pick one — or skip and choose this later.
            </p>

            {/* Search */}
            <div className="relative mt-6 shrink-0">
                <Search className="pointer-events-none ml-3 absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-zinc-500" />
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by school or area"
                    className="h-11 rounded-md border-0 border-b border-neutral-300 bg-transparent pl-9 text-neutral-900 shadow-none focus-visible:border-emerald-600 focus-visible:ring-0 dark:border-white/15 dark:text-white dark:focus-visible:border-emerald-500"
                />
            </div>

            {/* Filter */}
            <div className="mt-4 flex shrink-0 items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-zinc-500">
                    {visibleSchools.length} school{visibleSchools.length !== 1 && "s"} found
                </span>

                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SchoolSortBy)}>
                    <SelectTrigger className="h-8 w-[140px] rounded-full border-neutral-200 text-xs dark:border-white/10">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="distance">Nearest first</SelectItem>
                        <SelectItem value="rating">Top rated</SelectItem>
                        <SelectItem value="price">Lowest price</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* List — the ONLY thing that scrolls */}
            <div className="mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
                {visibleSchools.length === 0 ? (
                    <p className="py-10 text-center text-sm text-neutral-500 dark:text-zinc-400">
                        No schools match your search.
                    </p>
                ) : (
                    visibleSchools.map((school) => (
                        <SchoolCard
                            key={school.id}
                            school={school}
                            isSelected={selectedId === school.id}
                            onClick={() => setDetailsSchool(school)}
                        />
                    ))
                )}
            </div>

            <SchoolDetailsSheet
                school={detailsSchool}
                isSelected={selectedId === detailsSchool?.id}
                onOpenChange={(open) => !open && setDetailsSchool(null)}
                onSelect={() => {
                    if (detailsSchool) setSelectedId(detailsSchool.id);
                    setDetailsSchool(null);
                }}
            />

            {/* Selected school summary — separate from the Continue action */}
            <div className="mt-4 shrink-0 border-t border-black/5 pt-4 dark:border-white/10">
                {selectedSchool && (
                    <div className="mb-3 flex items-start gap-3 rounded-xl border border-emerald-600/30 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                                {selectedSchool.name}
                            </p>

                            <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-neutral-500 dark:text-zinc-400">
                                <MapPin className="h-3 w-3 shrink-0" />
                                {selectedSchool.address.line}, {selectedSchool.address.city}
                            </p>

                            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-neutral-700 dark:text-zinc-200">
                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                {selectedSchool.rating}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedId(null)}
                            aria-label="Remove selection"
                            className="shrink-0 rounded-full p-1 text-neutral-400 transition-colors hover:bg-black/5 hover:text-neutral-700 dark:text-zinc-500 dark:hover:bg-white/10 dark:hover:text-zinc-200"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}

                <div className="flex items-center justify-between gap-8">
                    <button
                        type="button"
                        onClick={handleSkip}
                        disabled={isSubmitting}
                        className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:text-zinc-200"
                    >
                        Skip for now
                    </button>

                    <Button
                        type="button"
                        size="lg"
                        onClick={handleContinue}
                        disabled={isSubmitting}
                        className="h-12 flex-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                    >
                        {isSubmitting ? "Saving..." : "Continue"}
                    </Button>
                </div>
            </div>
        </div>
    );
}