"use client";

import Link from "next/link";

import {
    Building2,
    ChevronRight,
    MapPin,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import BranchStatusBadge from "./BranchStatusBadge";

import type { Branch } from "../types/branch";

interface BranchMobileCardProps {
    branch: Branch;
    selected?: boolean;
    onSelect: (branch: Branch) => void;
}

export default function BranchMobileCard({
    branch,
    selected = false,
    onSelect,
}: BranchMobileCardProps) {
    return (
        <Card
            className={`cursor-pointer transition-colors ${
                selected
                    ? "border-primary bg-primary/5"
                    : ""
            }`}
            onClick={() => onSelect(branch)}
        >
            <CardContent className="space-y-4 p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Building2 className="size-5 text-primary" />
                        </div>

                        <div className="min-w-0">
                            <h3 className="truncate font-semibold">
                                {branch.name}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {branch.code}
                            </p>
                        </div>
                    </div>

                    <BranchStatusBadge
                        status={branch.status}
                    />
                </div>

                {/* Location */}
                <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />

                    <div>
                        <p className="text-sm font-medium">
                            {branch.city}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {branch.state}
                        </p>
                    </div>
                </div>

                {/* Counts */}
                <div className="grid grid-cols-2 gap-3 border-t pt-4">
                    <div className="rounded-lg bg-muted/50 p-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="size-4" />

                            <span className="text-xs">
                                Instructors
                            </span>
                        </div>

                        <p className="mt-1 font-semibold">
                            {branch.instructorCount}
                        </p>
                    </div>

                    <div className="rounded-lg bg-muted/50 p-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="size-4" />

                            <span className="text-xs">
                                Learners
                            </span>
                        </div>

                        <p className="mt-1 font-semibold">
                            {branch.learnerCount}
                        </p>
                    </div>
                </div>

                {/* View */}
                <div className="flex justify-end border-t pt-4">
                    <Button
                        size="sm"
                        variant="outline"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/owner/branches/${branch.id}`}
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            />
                        }
                    >
                        View Details
                        <ChevronRight className="ml-1 size-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}