"use client";

import type { Learner } from "@/features/learners/types/learner";

import LearnerTableRow from "./LearnerTableRow";
import LearnerMobileCard from "./LearnerMobileCard";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface LearnerTableProps {
    learners: Learner[];
}

export default function LearnerTable({
    learners,
}: LearnerTableProps) {
    if (learners.length === 0) {
        return (
            <div className="rounded-xl border p-12 text-center">
                <h3 className="text-lg font-semibold">
                    No learners found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or filters.
                </p>
            </div>
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

                            <TableHead>School</TableHead>

                            <TableHead>Instructor</TableHead>

                            <TableHead>Course</TableHead>

                            <TableHead>Status</TableHead>

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