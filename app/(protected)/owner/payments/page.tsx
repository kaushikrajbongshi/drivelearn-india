"use client";

import { useMemo, useState } from "react";

import DataTablePagination from "@/components/common/DataTablePagination";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import PaymentStats from "@/features/owner/payments/components/PaymentStats";
import PaymentTable from "@/features/owner/payments/components/PaymentTable";
import PaymentToolbar from "@/features/owner/payments/components/PaymentToolbar";

import { paymentStats } from "@/features/owner/payments/data/stats";
import { payments } from "@/features/owner/payments/data/payments";
import AddPaymentDialog from "@/features/owner/payments/components/AddPaymentDialog";

export default function OwnerPaymentsPage() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [page, setPage] =
    useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredPayments =
    useMemo(() => {
      return payments.filter(
        (payment) => {
          const matchesSearch =
            payment.paymentId
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.learnerName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.learnerEmail
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.courseName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.invoiceNumber
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =
            status === "all" ||
            payment.status ===
            status;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [search, status]);

  const totalPages = Math.ceil(
    filteredPayments.length /
    ITEMS_PER_PAGE
  );

  const paginatedPayments =
    useMemo(() => {
      const start =
        (page - 1) *
        ITEMS_PER_PAGE;

      return filteredPayments.slice(
        start,
        start +
        ITEMS_PER_PAGE
      );
    }, [
      filteredPayments,
      page,
    ]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Payments"
        description="Manage learner payments, invoices, and transaction records."
      />

      <PaymentStats
        stats={paymentStats}
      />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <PaymentToolbar
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={(value) =>
            setStatus(value ?? "all")
          }
        />

        <AddPaymentDialog />
      </div>

      <PaymentTable
        payments={
          paginatedPayments
        }
      />

      <DataTablePagination
        currentPage={page}
        totalPages={
          totalPages
        }
        onPageChange={setPage}
      />
    </div>
  );
}