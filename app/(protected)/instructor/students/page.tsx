"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DataTablePagination from "@/components/common/DataTablePagination";

import StudentToolbar from "@/features/instructors/students/components/StudentToolbar";
import StudentTable from "@/features/instructors/students/components/StudentTable";

import { students } from "@/features/instructors/students/data/students";

export default function InstructorStudentsPage() {
    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("all");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const filteredStudents = useMemo(() => {
        return students.filter((student) => {
            const searchValue = search.toLowerCase();

            const matchesSearch =
                student.name
                    .toLowerCase()
                    .includes(searchValue) ||
                student.id
                    .toLowerCase()
                    .includes(searchValue) ||
                student.email
                    .toLowerCase()
                    .includes(searchValue);

            const matchesCourse =
                course === "all" ||
                student.course === course;

            const matchesStatus =
                status === "all" ||
                student.status === status;

            return (
                matchesSearch &&
                matchesCourse &&
                matchesStatus
            );
        });
    }, [search, course, status]);

    const totalPages = Math.ceil(
        filteredStudents.length / ITEMS_PER_PAGE
    );

    const paginatedStudents = useMemo(() => {
        const start =
            (page - 1) * ITEMS_PER_PAGE;

        return filteredStudents.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredStudents, page]);

    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="My Students"
                description="Manage and track students assigned to you."
            />

            <StudentToolbar
                search={search}
                course={course}
                status={status}
                onSearchChange={(value) => {
                    setSearch(value);
                    setPage(1);
                }}
                onCourseChange={(value) => {
                    setCourse(value);
                    setPage(1);
                }}
                onStatusChange={(value) => {
                    setStatus(value);
                    setPage(1);
                }}
            />

            <StudentTable
                students={paginatedStudents}
            />

            <DataTablePagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
}