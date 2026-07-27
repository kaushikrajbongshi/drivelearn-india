"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import LearnerToolbar from "@/components/dashboard/learners/LearnerToolbar";
import LearnerTable from "@/components/dashboard/learners/LearnerTable";
import LearnerPagination from "@/components/dashboard/learners/LearnerPagination";
import { learners } from "@/features/admin/learners/data/learners";

export default function AdminLearnersPage() {
    const [search, setSearch] = useState("");
    const [school, setSchool] = useState("all");
    const [status, setStatus] = useState("all");

    const ITEMS_PER_PAGE = 10;

    const [page, setPage] = useState(1);

    const filteredLearners = useMemo(() => {
        return learners.filter((learner) => {
            const matchesSearch =
                learner.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                learner.email
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                learner.phone.includes(search);

            const matchesSchool =
                school === "all" ||
                learner.schoolId === school;

            const matchesStatus =
                status === "all" ||
                learner.status === status;

            return (
                matchesSearch &&
                matchesSchool &&
                matchesStatus
            );
        });
    }, [search, school, status]);

    const totalPages = Math.ceil(
        filteredLearners.length / ITEMS_PER_PAGE
    );

    const paginatedLearners = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;

        return filteredLearners.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredLearners, page]);

    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="Learner Management"
                description="Manage learners across all driving schools."
            />

            <LearnerToolbar
                search={search}
                school={school}
                status={status}
                onSearchChange={setSearch}
                onSchoolChange={setSchool}
                onStatusChange={setStatus}
            />

            <LearnerTable
                learners={paginatedLearners}
            />

            <LearnerPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
}