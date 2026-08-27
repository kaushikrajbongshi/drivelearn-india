"use client";

import type { Branch } from "../types/branch";

import BranchTableRow from "./BranchTableRow";
import BranchMobileCard from "./BranchMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import EmptyState from "@/components/common/EmptyState";

interface BranchTableProps {
    branches: Branch[];
    selectedBranch?: Branch;
    onSelectBranch: (branch: Branch) => void;
}

export default function BranchTable({
    branches,
    selectedBranch,
    onSelectBranch,
}: BranchTableProps) {
    if (branches.length === 0) {
        return (
            <EmptyState
                title="No branches found"
                description="Try adjusting your search or status filter."
            />
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl borderm lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Branch</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Instructors</TableHead>
                            <TableHead>Learners</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-12">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {branches.map((branch) => (
                            <BranchTableRow
                                key={branch.id}
                                branch={branch}
                                selected={
                                    selectedBranch?.id ===
                                    branch.id
                                }
                                onSelect={onSelectBranch}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {branches.map((branch) => (
                    <BranchMobileCard
                        key={branch.id}
                        branch={branch}
                        selected={
                            selectedBranch?.id ===
                            branch.id
                        }
                        onSelect={onSelectBranch}
                    />
                ))}
            </div>
        </>
    );
}