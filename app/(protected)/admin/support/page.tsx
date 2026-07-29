"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import SupportToolbar from "@/features/support/components/SupportToolbar";
import SupportTable from "@/features/support/components/SupportTable";
import DataTablePagination from "@/components/common/DataTablePagination";

import { tickets } from "@/features/support/data/tickets";

export default function SupportPage() {
  const [search, setSearch] = useState("");

  const [priority, setPriority] = useState("all");

  const [status, setStatus] = useState("all");

  const ITEMS_PER_PAGE = 10;

  const [page, setPage] = useState(1);

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.schoolName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        ticket.subject
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        ticket.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPriority =
        priority === "all" ||
        ticket.priority === priority;

      const matchesStatus =
        status === "all" ||
        ticket.status === status;

      return (
        matchesSearch &&
        matchesPriority &&
        matchesStatus
      );
    });
  }, [search, priority, status]);

  const totalPages = Math.ceil(
    filteredTickets.length / ITEMS_PER_PAGE
  );

  const paginatedTickets = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredTickets.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredTickets, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Support Management"
        description="Manage support requests from driving schools."
      />

      <SupportToolbar
        search={search}
        priority={priority}
        status={status}
        onSearchChange={setSearch}
        onPriorityChange={setPriority}
        onStatusChange={setStatus}
      />

      <SupportTable
        tickets={paginatedTickets}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}