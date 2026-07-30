"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import DataTablePagination from "@/components/common/DataTablePagination";

import LearnerTable from "@/features/owner/learners/components/LearnerTable";
import LearnerToolbar from "@/features/owner/learners/components/LearnerToolbar";

import { learners } from "@/features/owner/learners/data/learners";
import LearnerStats from "@/features/owner/learners/components/LearnerStats";
import { learnerStats } from "@/features/owner/learners/data/stats";

export default function OwnerLearnersPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [paymentStatus, setPaymentStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredLearners = useMemo(() => {
    return learners.filter((learner) => {
      const matchesSearch =
        learner.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        learner.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        learner.course
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        learner.instructor
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        learner.status === status;

      const matchesPaymentStatus =
        paymentStatus === "all" ||
        learner.paymentStatus === paymentStatus;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPaymentStatus
      );
    });
  }, [search, status, paymentStatus]);

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
        description="Manage learners enrolled in your driving school."
      />
      <LearnerStats
        stats={learnerStats}
      />

      <LearnerToolbar
        search={search}
        status={status}
        paymentStatus={paymentStatus}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onPaymentStatusChange={setPaymentStatus}
      />

      <LearnerTable
        learners={paginatedLearners}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}