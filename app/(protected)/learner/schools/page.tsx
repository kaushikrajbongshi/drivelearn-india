"use client";

import { useMemo, useState } from "react";

import SchoolsHeader from "@/features/learners/schools/components/SchoolsHeader";
import SchoolGrid from "@/features/learners/schools/components/SchoolGrid";
import SchoolDetailsDrawer from "@/features/learners/schools/components/SchoolDetailsDrawer";
import SchoolFiltersDialog, {
    type SchoolFilters,
} from "@/features/learners/schools/components/SchoolFiltersDialog";

import { schoolsData } from "@/features/learners/schools/data/schoolsData";
import type { DrivingSchool } from "@/features/learners/schools/types/school";

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

    /* --------------------------------
       Filter schools
    -------------------------------- */

    const filteredSchools = useMemo(() => {
        const query = search.trim().toLowerCase();

        return schoolsData.filter((school) => {
            /* Search */
            const matchesSearch =
                query.length === 0 ||
                school.name.toLowerCase().includes(query) ||
                school.address.area.toLowerCase().includes(query) ||
                school.address.city.toLowerCase().includes(query);

            /* Distance */
            const matchesDistance =
                school.distance <= appliedFilters.maxDistance;

            /* Rating */
            const matchesRating =
                school.rating >= appliedFilters.minRating;

            /* Price */
            const matchesPrice =
                school.startingPrice <= appliedFilters.maxPrice;

            /* Verified */
            const matchesVerified =
                !appliedFilters.verifiedOnly ||
                school.verified === true;

            /* Transmission */
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

    /* --------------------------------
       Apply filters
    -------------------------------- */

    const handleApplyFilters = () => {
        setAppliedFilters(filters);
        setFilterOpen(false);
    };

    /* --------------------------------
       Reset filters
    -------------------------------- */

    const handleResetFilters = () => {
        setFilters(defaultFilters);
        setAppliedFilters(defaultFilters);
    };

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-neutral-950">
            <main className="w-full">
                <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                    <div className="space-y-8">

                        {/* Header */}
                        <SchoolsHeader
                            search={search}
                            onSearchChange={setSearch}
                            location="Guwahati"
                            onFilterClick={() =>
                                setFilterOpen(true)
                            }
                        />

                        {/* Result count */}
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-500 dark:text-zinc-500">
                                {filteredSchools.length}{" "}
                                {filteredSchools.length === 1
                                    ? "school"
                                    : "schools"}{" "}
                                near you
                            </p>
                        </div>

                        {/* School cards */}
                        <SchoolGrid
                            schools={filteredSchools}
                            onSelect={setSelectedSchool}
                        />
                    </div>
                </div>
            </main>

            {/* School details */}
            <SchoolDetailsDrawer
            
                school={selectedSchool}
                open={selectedSchool !== null}
                onOpenChange={(open) => {
                    if (!open) {
                        setSelectedSchool(null);
                    }
                }}
                onEnroll={(schoolId) => {
                    console.log("Enroll at school:", schoolId);
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