"use client";


import SchoolCard from "./SchoolCard";
import type { DrivingSchool } from "../types/school";

interface SchoolGridProps {
    schools: DrivingSchool[];
    onSelect: (school: DrivingSchool) => void;
}

export default function SchoolGrid({
    schools,
    onSelect,
}: SchoolGridProps) {
    if (schools.length === 0) {
        return (
            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-neutral-200 bg-transparent px-6 text-center dark:border-white/10">
                <div>
                    <p className="text-lg font-medium text-neutral-900 dark:text-white">
                        No driving schools found
                    </p>

                    <p className="mt-2 text-sm text-neutral-500 dark:text-zinc-500">
                        Try changing your search or location.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => (
                <div key={school.id} className="min-w-0">
                    <SchoolCard
                        school={school}
                        onSelect={onSelect}
                    />
                </div>
            ))}
        </div>
    );
}