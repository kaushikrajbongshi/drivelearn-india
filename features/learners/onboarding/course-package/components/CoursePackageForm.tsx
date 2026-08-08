"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mockPackages, getSelectedSchool } from "../data/mockPackages";
import PackageCard from "./PackageCard";

interface CoursePackageFormProps {
    onContinue: (selectedPackageId: string | null) => Promise<void> | void;
    onSkip: () => Promise<void> | void;
}

export default function CoursePackageForm({ onContinue, onSkip }: CoursePackageFormProps) {
    const school = getSelectedSchool();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // TODO: replace with getPackagesBySchool(school.id) API call
    const packages = mockPackages.filter((p) => p.schoolId === school.id);

    async function handleContinue() {
        setIsSubmitting(true);
        try {
            await onContinue(selectedId);
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleSkip() {
        setIsSubmitting(true);
        try {
            await onSkip();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="mx-auto flex h-full min-h-0 w-full max-w-2xl flex-col px-4 pb-5 sm:px-0">
            <style>{`
        .thin-scrollbar::-webkit-scrollbar { width: 5px; }
        .thin-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .thin-scrollbar::-webkit-scrollbar-thumb { background-color: rgb(0 0 0 / 0.15); border-radius: 9999px; }
        .dark .thin-scrollbar::-webkit-scrollbar-thumb { background-color: rgb(255 255 255 / 0.15); }
        .thin-scrollbar { scrollbar-width: thin; scrollbar-color: rgb(0 0 0 / 0.15) transparent; }
        .dark .thin-scrollbar { scrollbar-color: rgb(255 255 255 / 0.15) transparent; }
      `}</style>

            <div className="flex shrink-0 items-start justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                        Select Course Package
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-zinc-400">
                        Packages offered by <span className="font-medium text-neutral-700 dark:text-zinc-200">{school.name}</span>
                    </p>
                </div>

                <Link
                    href="/learner/onboarding/driving-school"
                    className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    Change school
                </Link>
            </div>

            <div className="thin-scrollbar mt-6 min-h-0 flex-1 space-y-4 overflow-y-auto pr-1 pt-3">
                {packages.length === 0 ? (
                    <p className="py-10 text-center text-sm text-neutral-500 dark:text-zinc-400">
                        No packages available for this school yet.
                    </p>
                ) : (
                    packages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            pkg={pkg}
                            isSelected={selectedId === pkg.id}
                            onSelect={() => setSelectedId(pkg.id === selectedId ? null : pkg.id)}
                        />
                    ))
                )}
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-between gap-5 border-t border-black/5 pt-4 dark:border-white/10">
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
    );
}