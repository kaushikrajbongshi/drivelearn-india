"use client";

import Link from "next/link";

import { Building2, MapPin } from "lucide-react";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import BranchStatusBadge from "./BranchStatusBadge";
import BranchActions from "./BranchActions";

import type { Branch } from "../types/branch";

interface BranchTableRowProps {
    branch: Branch;
    selected?: boolean;
    onSelect: (branch: Branch) => void;
}

export default function BranchTableRow({
    branch,
    selected = false,
    onSelect,
}: BranchTableRowProps) {
    return (
        <TableRow
            data-state={selected ? "selected" : undefined}
            className={`cursor-pointer ${
                selected
                    ? "bg-primary/5 hover:bg-primary/10"
                    : ""
            }`}
            onClick={() => onSelect(branch)}
        >
            {/* Branch */}
            <TableCell>
                <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Building2 className="size-4 text-primary" />
                    </div>

                    <div className="min-w-0">
                        <Link
                            href={`/owner/branches/${branch.id}`}
                            className="font-medium hover:underline"
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >
                            {branch.name}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            {branch.code}
                        </p>
                    </div>
                </div>
            </TableCell>

            {/* Location */}
            <TableCell>
                <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />

                    <div>
                        <p className="font-medium">
                            {branch.city}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {branch.state}
                        </p>
                    </div>
                </div>
            </TableCell>

            {/* Instructors */}
            <TableCell>
                <span className="font-medium">
                    {branch.instructorCount}
                </span>
            </TableCell>

            {/* Learners */}
            <TableCell>
                <span className="font-medium">
                    {branch.learnerCount}
                </span>
            </TableCell>

            {/* Status */}
            <TableCell>
                <BranchStatusBadge
                    status={branch.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <div
                    onClick={(e) =>
                        e.stopPropagation()
                    }
                >
                    <BranchActions
                        branch={branch}
                    />
                </div>
            </TableCell>
        </TableRow>
    );
}