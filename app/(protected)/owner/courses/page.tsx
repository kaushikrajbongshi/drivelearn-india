"use client";

import { useMemo, useState } from "react";

import DataTablePagination from "@/components/common/DataTablePagination";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import CourseStats from "@/features/owner/courses/components/CourseStats";
import CourseTable from "@/features/owner/courses/components/CourseTable";
import CourseToolbar from "@/features/owner/courses/components/CourseToolbar";

import { courseStats } from "@/features/owner/courses/data/stats";
import { courses } from "@/features/owner/courses/data/courses";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";

export default function OwnerCoursesPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        course.code
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        course.vehicleType
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        course.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [search, status]);

  const totalPages = Math.ceil(
    filteredCourses.length / ITEMS_PER_PAGE
  );

  const paginatedCourses = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredCourses.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredCourses, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Course Management"
        description="Manage driving courses, pricing, and training programs."
      />

      <CourseStats
        stats={courseStats}
      />

      <CourseToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {courses.length === 0 ? (
        <ErrorState
          title="Something went wrong"
          description="ErrorState Shown"
        />
      ) : filteredCourses.length === 0 ? (
        <ErrorState
          title="No Matching Courses"
          description="Try changing your search or filter."
        />
      ) : (
        <>
          <CourseTable
            courses={paginatedCourses}
          />

          <DataTablePagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}