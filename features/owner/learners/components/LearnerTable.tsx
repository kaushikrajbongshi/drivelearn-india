"use client";

import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import type { Learner } from "@/features/owner/learners/types/learner";

import LearnerMobileCard from "./LearnerMobileCard";
import LearnerTableRow from "./LearnerTableRow";

interface LearnerTableProps {
    learners: Learner[];
}

export default function LearnerTable({
    learners,
}: LearnerTableProps) {
    if (learners.length === 0) {
        return (
            <EmptyState
                title="No learners found"
                description="Try adjusting your search or filters."
            />
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Learner</TableHead>

                            <TableHead>Course</TableHead>

                            <TableHead>Instructor</TableHead>

                            <TableHead className="w-44">
                                Progress
                            </TableHead>

                            <TableHead>Attendance</TableHead>

                            <TableHead>Payment</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Joined</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {learners.map((learner) => (
                            <LearnerTableRow
                                key={learner.id}
                                learner={learner}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {learners.map((learner) => (
                    <LearnerMobileCard
                        key={learner.id}
                        learner={learner}
                    />
                ))}
            </div>
        </>
    );
}