"use client";

import { useEffect, useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import UserPagination from "@/components/dashboard/users/UserPagination";
import UserTable from "@/components/dashboard/users/UserTable";
import UserTableToolbar from "@/components/dashboard/users/UserTableToolbar";

import { users } from "@/features/admin/users/data/users";

const ITEMS_PER_PAGE = 10;

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.includes(search);

      const matchesRole =
        role === "all" || user.role === role;

      const matchesStatus =
        status === "all" || user.status === status;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [search, role, status]);

  // Reset to first page whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, role, status]);

  const totalPages = Math.ceil(
    filteredUsers.length / ITEMS_PER_PAGE
  );

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="User Management"
        description="Manage learners, instructors, owners and administrators."
      />

      <UserTableToolbar
        search={search}
        role={role}
        status={status}
        onSearchChange={setSearch}
        onRoleChange={setRole}
        onStatusChange={setStatus}
      />

      <UserTable users={paginatedUsers} />

      <UserPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}