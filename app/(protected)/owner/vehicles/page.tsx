"use client";

import { useMemo, useState } from "react";

import DataTablePagination from "@/components/common/DataTablePagination";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import VehicleStats from "@/features/owner/vehicles/components/VehicleStats";
import VehicleTable from "@/features/owner/vehicles/components/VehicleTable";
import VehicleToolbar from "@/features/owner/vehicles/components/VehicleToolbar";

import { vehicleStats } from "@/features/owner/vehicles/data/stats";
import { vehicles } from "@/features/owner/vehicles/data/vehicles";

export default function OwnerVehiclesPage() {
    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("all");

    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 10;

    const filteredVehicles = useMemo(() => {
        return vehicles.filter((vehicle) => {
            const matchesSearch =
                vehicle.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                vehicle.registrationNumber
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                vehicle.brand
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                vehicle.model
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                vehicle.assignedInstructor
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                status === "all" ||
                vehicle.status === status;

            return (
                matchesSearch &&
                matchesStatus
            );
        });
    }, [search, status]);

    const totalPages = Math.ceil(
        filteredVehicles.length / ITEMS_PER_PAGE
    );

    const paginatedVehicles = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;

        return filteredVehicles.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredVehicles, page]);

    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="Vehicle Management"
                description="Manage training vehicles, maintenance, and assignments."
            />

            <VehicleStats
                stats={vehicleStats}
            />

            <VehicleToolbar
                search={search}
                status={status}
                onSearchChange={setSearch}
                onStatusChange={setStatus}
            />

            <VehicleTable
                vehicles={paginatedVehicles}
            />

            <DataTablePagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
}