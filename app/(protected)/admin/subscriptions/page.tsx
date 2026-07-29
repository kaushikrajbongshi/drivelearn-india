"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import SubscriptionToolbar from "@/features/subscriptions/components/SubscriptionToolbar";
import SubscriptionTable from "@/features/subscriptions/components/SubscriptionTable";
import SubscriptionPagination from "@/features/subscriptions/components/SubscriptionPagination";

import { subscriptions } from "@/features/subscriptions/data/subscriptions";

export default function AdminSubscriptionsPage() {
  const [search, setSearch] = useState("");

  const [plan, setPlan] = useState("all");

  const [status, setStatus] = useState("all");

  const ITEMS_PER_PAGE = 10;

  const [page, setPage] = useState(1);

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((subscription) => {
      const matchesSearch =
        subscription.schoolName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        subscription.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPlan =
        plan === "all" ||
        subscription.plan === plan;

      const matchesStatus =
        status === "all" ||
        subscription.status === status;

      return (
        matchesSearch &&
        matchesPlan &&
        matchesStatus
      );
    });
  }, [search, plan, status]);

  const totalPages = Math.ceil(
    filteredSubscriptions.length / ITEMS_PER_PAGE
  );

  const paginatedSubscriptions = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredSubscriptions.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredSubscriptions, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Subscription Management"
        description="Manage subscription plans for driving schools."
      />

      <SubscriptionToolbar
        search={search}
        plan={plan}
        status={status}
        onSearchChange={setSearch}
        onPlanChange={setPlan}
        onStatusChange={setStatus}
      />

      <SubscriptionTable
        subscriptions={paginatedSubscriptions}
      />

      <SubscriptionPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}