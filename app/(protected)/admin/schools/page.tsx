"use client";

import { useEffect, useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import UserPagination from "@/components/dashboard/users/UserPagination";

import SchoolTable from "@/components/dashboard/schools/SchoolTable";
import SchoolToolbar from "@/components/dashboard/schools/SchoolToolbar";

import { schools } from "@/features/admin/schools/data/schools";

const ITEMS_PER_PAGE = 10;

export default function AdminSchoolsPage() {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("all");
  const [verification, setVerification] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      const matchesSearch =
        school.name.toLowerCase().includes(search.toLowerCase()) ||
        school.ownerName.toLowerCase().includes(search.toLowerCase()) ||
        school.email.toLowerCase().includes(search.toLowerCase());

      const matchesState =
        state === "all" || school.state === state;

      const matchesVerification =
        verification === "all" ||
        school.verification === verification;

      const matchesStatus =
        status === "all" ||
        school.status === status;

      return (
        matchesSearch &&
        matchesState &&
        matchesVerification &&
        matchesStatus
      );
    });
  }, [search, state, verification, status]);

  useEffect(() => {
    setPage(1);
  }, [search, state, verification, status]);

  const totalPages = Math.ceil(
    filteredSchools.length / ITEMS_PER_PAGE
  );

  const paginatedSchools = filteredSchools.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="School Management"
        description="Manage driving schools, verification and subscriptions."
      />

      <SchoolToolbar
        search={search}
        state={state}
        verification={verification}
        status={status}
        onSearchChange={setSearch}
        onStateChange={setState}
        onVerificationChange={setVerification}
        onStatusChange={setStatus}
      />

      <SchoolTable schools={paginatedSchools} />

      <UserPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}