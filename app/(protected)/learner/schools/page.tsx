"use client";

import { useMemo, useState } from "react";

import SchoolsHeader from "@/components/landing/schools/components/SchoolsHeader";
import SchoolGrid from "@/components/landing/schools/components/SchoolGrid";
import SchoolDetailsDrawer from "@/components/landing/schools/components/SchoolDetailsDrawer";
import SchoolFiltersDialog, {
    type SchoolFilters,
} from "@/components/landing/schools/components/SchoolFiltersDialog";

import { schoolsData } from "@/components/landing/schools/data/schoolsData";
import type { DrivingSchool } from "@/components/landing/schools/types/school";

const defaultFilters: SchoolFilters = {
    maxDistance: 20,
    minRating: 0,
    maxPrice: 10000,
    transmission: "all",
    verifiedOnly: false,
};

export default function LearnerSchoolsPage() {
    const [search, setSearch] = useState("");

    const [selectedSchool, setSelectedSchool] =
        useState<DrivingSchool | null>(null);

    const [filterOpen, setFilterOpen] = useState(false);

    const [filters, setFilters] =
        useState<SchoolFilters>(defaultFilters);

    const [appliedFilters, setAppliedFilters] =
        useState<SchoolFilters>(defaultFilters);

    const filteredSchools = useMemo(() => {
        const query = search.trim().toLowerCase();

        return schoolsData.filter((school) => {
            const matchesSearch =
                !query ||
                school.name.toLowerCase().includes(query) ||
                school.address.area.toLowerCase().includes(query) ||
                school.address.city.toLowerCase().includes(query);

            const matchesDistance =
                school.distance <= appliedFilters.maxDistance;

            const matchesRating =
                school.rating >= appliedFilters.minRating;

            const matchesPrice =
                school.startingPrice <= appliedFilters.maxPrice;

            const matchesVerified =
                !appliedFilters.verifiedOnly ||
                school.verified === true;

            const matchesTransmission =
                appliedFilters.transmission === "all" ||
                school.vehicles.some(
                    (vehicle) =>
                        vehicle.transmission ===
                        appliedFilters.transmission
                );

            return (
                matchesSearch &&
                matchesDistance &&
                matchesRating &&
                matchesPrice &&
                matchesVerified &&
                matchesTransmission
            );
        });
    }, [search, appliedFilters]);

    const handleApplyFilters = () => {
        setAppliedFilters(filters);
        setFilterOpen(false);
    };

    const handleResetFilters = () => {
        setFilters(defaultFilters);
        setAppliedFilters(defaultFilters);
    };

    return (
        <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
            <main className="w-full">
                <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

                    {/* IMPORTANT:
                        This container contains BOTH
                        the sticky header AND the school grid.
                    */}
                    <div className="w-full space-y-8">

                        <SchoolsHeader
                            search={search}
                            onSearchChange={setSearch}
                            location="Guwahati"
                            onFilterClick={() => setFilterOpen(true)}
                        />

                        {/* Result Count */}
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-500 dark:text-zinc-500">
                                {filteredSchools.length}{" "}
                                {filteredSchools.length === 1
                                    ? "school"
                                    : "schools"}{" "}
                                near you
                            </p>
                        </div>

                        {/* School Grid */}
                        <SchoolGrid
                            schools={filteredSchools}
                            onSelect={setSelectedSchool}
                        />
                    </div>
                </div>
            </main>

            {/* School Details */}
            <SchoolDetailsDrawer
                school={selectedSchool}
                open={selectedSchool !== null}
                onOpenChange={(open) => {
                    if (!open) {
                        setSelectedSchool(null);
                    }
                }}
            />

            {/* Filters */}
            <SchoolFiltersDialog
                open={filterOpen}
                onOpenChange={setFilterOpen}
                filters={filters}
                onFiltersChange={setFilters}
                onApply={handleApplyFilters}
                onReset={handleResetFilters}
            />
        </div>
    );
}