"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DataTablePagination from "@/components/common/DataTablePagination";

import ScheduleToolbar from "@/features/instructors/schedule/components/ScheduleToolbar";
import ScheduleTable from "@/features/instructors/schedule/components/ScheduleTable";

import { schedules } from "@/features/instructors/schedule/data/schedules";

export default function InstructorSchedulePage() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const filteredSchedules = useMemo(() => {
        return schedules.filter((schedule) => {
            const searchValue = search.toLowerCase();

            const matchesSearch =
                schedule.studentName
                    .toLowerCase()
                    .includes(searchValue) ||
                schedule.studentId
                    .toLowerCase()
                    .includes(searchValue) ||
                schedule.vehicle
                    .toLowerCase()
                    .includes(searchValue);

            const matchesStatus =
                status === "all" ||
                schedule.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [search, status]);

    const totalPages = Math.ceil(
        filteredSchedules.length / ITEMS_PER_PAGE
    );

    const paginatedSchedules = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;

        return filteredSchedules.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredSchedules, page]);

    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="Today's Schedule"
                description="View and manage your driving lessons scheduled for today."
            />

            <ScheduleToolbar
                search={search}
                status={status}
                onSearchChange={(value) => {
                    setSearch(value);
                    setPage(1);
                }}
                onStatusChange={(value) => {
                    setStatus(value);
                    setPage(1);
                }}
            />

            <ScheduleTable
                schedules={paginatedSchedules}
            />

            {totalPages > 0 && (
                <DataTablePagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            )}
        </div>
    );
}