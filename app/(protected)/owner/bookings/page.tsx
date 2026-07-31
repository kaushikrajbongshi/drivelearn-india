"use client";

import { useMemo, useState } from "react";

import DataTablePagination from "@/components/common/DataTablePagination";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import BookingStats from "@/features/owner/bookings/components/BookingStats";
import BookingTable from "@/features/owner/bookings/components/BookingTable";
import BookingToolbar from "@/features/owner/bookings/components/BookingToolbar";

import { bookingStats } from "@/features/owner/bookings/data/stats";
import { bookings } from "@/features/owner/bookings/data/bookings";

export default function OwnerBookingsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesSearch =
        booking.learnerName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.instructorName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.vehicleName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.lessonType
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.pickupLocation
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        booking.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [search, status]);

  const totalPages = Math.ceil(
    filteredBookings.length / ITEMS_PER_PAGE
  );

  const paginatedBookings = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredBookings.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredBookings, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Booking Management"
        description="Manage lesson bookings, schedules, and learner appointments."
      />

      <BookingStats
        stats={bookingStats}
      />

      <BookingToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <BookingTable
        bookings={paginatedBookings}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}