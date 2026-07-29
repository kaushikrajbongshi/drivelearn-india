"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import InstructorPagination from "@/features/instructors/components/InstructorPagination";
import InstructorTable from "@/features/instructors/components/InstructorTable";
import InstructorToolbar from "@/features/instructors/components/InstructorToolbar";

import { instructors } from "@/features/instructors/data/instructors";

export default function AdminInstructorsPage() {
    const [search, setSearch] = useState("");
    const [school, setSchool] = useState("all");
    const [status, setStatus] = useState("all");

    const ITEMS_PER_PAGE = 10;

    const [page, setPage] = useState(1);

    const filteredInstructors = useMemo(() => {
        return instructors.filter((instructor) => {
            const matchesSearch =
                instructor.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                instructor.email
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                instructor.phone.includes(search);

            const matchesSchool =
                school === "all" ||
                instructor.schoolId === school;

            const matchesStatus =
                status === "all" ||
                instructor.status === status;

            return (
                matchesSearch &&
                matchesSchool &&
                matchesStatus
            );
        });
    }, [search, school, status]);

    const totalPages = Math.ceil(
        filteredInstructors.length / ITEMS_PER_PAGE
    );

    const paginatedInstructors = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;

        return filteredInstructors.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredInstructors, page]);

    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="Instructor Management"
                description="Manage instructors across all driving schools."
            />

            <InstructorToolbar
                search={search}
                school={school}
                status={status}
                onSearchChange={setSearch}
                onSchoolChange={setSchool}
                onStatusChange={setStatus}
            />

            <InstructorTable
                instructors={paginatedInstructors}
            />

            <InstructorPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
}