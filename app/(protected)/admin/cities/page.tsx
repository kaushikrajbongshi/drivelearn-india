"use client";

import { useMemo, useState } from "react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import CityToolbar from "@/features/cities/components/CityToolbar";
import CityTable from "@/features/cities/components/CityTable";

import DataTablePagination from "@/components/common/DataTablePagination";

import { cities } from "@/features/cities/data/cities";

export default function CitiesPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const matchesSearch =
        city.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        city.stateName
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        city.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [search, status]);

  const totalPages = Math.ceil(
    filteredCities.length / ITEMS_PER_PAGE
  );

  const paginatedCities = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredCities.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredCities, page]);

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="City Management"
        description="Manage available cities across the platform."
      />

      <CityToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <CityTable
        cities={paginatedCities}
      />

      <DataTablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}