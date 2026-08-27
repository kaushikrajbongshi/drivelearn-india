"use client";

import { useMemo, useState } from "react";

import SchoolOverview from "./SchoolOverview";
import SchoolStats from "./SchoolStats";
import BranchToolbar from "./BranchToolbar";
import BranchTable from "./BranchTable";
import BranchDetails from "./BranchDetails";
import AddBranchDialog from "./AddBranchDialog";

import DataTablePagination from "@/components/common/DataTablePagination";

import type { Branch } from "../types/branch";

interface BranchPageContentProps {
    branches: Branch[];
}

const ITEMS_PER_PAGE = 5;

const school = {
    name: "DriveTeach Driving School",
    code: "SCH-001",
    city: "Bengaluru",
    state: "Karnataka",
    phone: "+91 98765 43210",
    email: "info@driveteach.com",
};

export default function BranchPageContent({
    branches,
}: BranchPageContentProps) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);
    const [addBranchOpen, setAddBranchOpen] =
        useState(false);

    const [selectedBranch, setSelectedBranch] =
        useState<Branch | undefined>(branches[0]);

    const filteredBranches = useMemo(() => {
        const query = search.toLowerCase().trim();

        return branches.filter((branch) => {
            const matchesSearch =
                !query ||
                branch.name
                    .toLowerCase()
                    .includes(query) ||
                branch.code
                    .toLowerCase()
                    .includes(query) ||
                branch.city
                    .toLowerCase()
                    .includes(query) ||
                branch.state
                    .toLowerCase()
                    .includes(query);

            const matchesStatus =
                status === "all" ||
                branch.status === status;

            return (
                matchesSearch &&
                matchesStatus
            );
        });
    }, [branches, search, status]);

    const totalPages = Math.ceil(
        filteredBranches.length /
            ITEMS_PER_PAGE
    );

    const paginatedBranches = useMemo(() => {
        const start =
            (page - 1) * ITEMS_PER_PAGE;

        return filteredBranches.slice(
            start,
            start + ITEMS_PER_PAGE
        );
    }, [filteredBranches, page]);

    const schoolStats = useMemo(() => {
        return {
            branches: branches.length,

            instructors: branches.reduce(
                (total, branch) =>
                    total + branch.instructorCount,
                0
            ),

            learners: branches.reduce(
                (total, branch) =>
                    total + branch.learnerCount,
                0
            ),

            vehicles: branches.reduce(
                (total, branch) =>
                    total + branch.vehicleCount,
                0
            ),
        };
    }, [branches]);

    function handleSearchChange(value: string) {
        setSearch(value);
        setPage(1);

        const query = value.toLowerCase().trim();

        if (!query) {
            setSelectedBranch(
                filteredBranches[0] ??
                    branches[0]
            );
            return;
        }

        const firstMatch = branches.find(
            (branch) =>
                branch.name
                    .toLowerCase()
                    .includes(query) ||
                branch.code
                    .toLowerCase()
                    .includes(query) ||
                branch.city
                    .toLowerCase()
                    .includes(query) ||
                branch.state
                    .toLowerCase()
                    .includes(query)
        );

        setSelectedBranch(firstMatch);
    }

    function handleStatusChange(value: string) {
        setStatus(value);
        setPage(1);

        const matchingBranches =
            branches.filter(
                (branch) =>
                    value === "all" ||
                    branch.status === value
            );

        setSelectedBranch(
            matchingBranches[0]
        );
    }

    function handlePageChange(
        nextPage: number
    ) {
        setPage(nextPage);

        const branch =
            filteredBranches[
                (nextPage - 1) *
                    ITEMS_PER_PAGE
            ];

        if (branch) {
            setSelectedBranch(branch);
        }
    }

    function handleEditBranch() {
        if (!selectedBranch) return;

        window.location.href =
            `/owner/branches/${selectedBranch.id}/edit`;
    }

    return (
        <div className="space-y-6">
            {/* School Summary */}
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <SchoolOverview
                        school={school}
                    />
                </div>

                <SchoolStats
                    stats={schoolStats}
                />
            </div>

            {/* Branch Management */}
            <div className="grid gap-6 xl:grid-cols-5">
                {/* My Branches */}
                <div className="rounded-xl border p-5 xl:col-span-3">
                    <div className="space-y-5">
                        <BranchToolbar
                            search={search}
                            status={status}
                            onSearchChange={
                                handleSearchChange
                            }
                            onStatusChange={
                                handleStatusChange
                            }
                            onAddBranch={() =>
                                setAddBranchOpen(
                                    true
                                )
                            }
                        />

                        <BranchTable
                            branches={
                                paginatedBranches
                            }
                            selectedBranch={
                                selectedBranch
                            }
                            onSelectBranch={
                                setSelectedBranch
                            }
                        />

                        {totalPages > 0 && (
                            <DataTablePagination
                                currentPage={page}
                                totalPages={
                                    totalPages
                                }
                                onPageChange={
                                    handlePageChange
                                }
                            />
                        )}
                    </div>
                </div>

                {/* Branch Details */}
                <div className="xl:col-span-2">
                    {selectedBranch ? (
                        <BranchDetails
                            branch={
                                selectedBranch
                            }
                            onEdit={
                                handleEditBranch
                            }
                        />
                    ) : (
                        <div className="flex min-h-80 items-center justify-center rounded-xl border border-dashed">
                            <p className="text-sm text-muted-foreground">
                                Select a branch to
                                view its details.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Branch */}
            <AddBranchDialog
                open={addBranchOpen}
                onOpenChange={
                    setAddBranchOpen
                }
            />
        </div>
    );
}