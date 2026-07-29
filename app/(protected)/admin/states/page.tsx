"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import StateToolbar from "@/features/states/components/StateToolbar";
import StateTable from "@/features/states/components/StateTable";

import DataTablePagination from "@/components/common/DataTablePagination";

import { states } from "@/features/states/data/states";

export default function StatesPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredStates = useMemo(() => {
    return states.filter((state) => {
      const matchesSearch =
        state.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        state.code
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        state.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const totalPages = Math.ceil(
    filteredStates.length / ITEMS_PER_PAGE
  );

  const paginatedStates = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredStates.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredStates, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="State Management"
        description="Manage available states across the platform."
      />

      <StateToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <StateTable
        states={paginatedStates}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}