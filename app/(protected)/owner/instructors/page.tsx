"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DataTablePagination from "@/components/common/DataTablePagination";

import InstructorStats from "@/features/owner/instructors/components/InstructorStats";
import InstructorTable from "@/features/owner/instructors/components/InstructorTable";
import InstructorToolbar from "@/features/owner/instructors/components/InstructorToolbar";

import { instructors } from "@/features/owner/instructors/data/instructors";
import { instructorStats } from "@/features/owner/instructors/data/stats";

export default function OwnerInstructorsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredInstructors = useMemo(() => {
    return instructors.filter((instructor: any) => {
      const matchesSearch =
        instructor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        instructor.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        instructor.phone
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        instructor.specialization
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        instructor.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [search, status]);

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
        description="Manage instructors, assignments, and availability."
      />

      <InstructorStats
        stats={instructorStats}
      />

      <InstructorToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <InstructorTable
        instructors={paginatedInstructors}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}