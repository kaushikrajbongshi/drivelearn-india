"use client";

import type { Instructor } from "@/features/admin/instructors/types/instructor";

import InstructorTableRow from "./InstructorTableRow";
import InstructorMobileCard from "./InstructorMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface InstructorTableProps {
    instructors: Instructor[];
}

export default function InstructorTable({
    instructors,
}: InstructorTableProps) {
    if (instructors.length === 0) {
        return (
            <div className="rounded-xl border p-12 text-center">
                <h3 className="text-lg font-semibold">
                    No instructors found
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
            <div className="hidden overflow-hidden rounded-xl border lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Instructor</TableHead>

                            <TableHead>School</TableHead>

                            <TableHead>Experience</TableHead>

                            <TableHead>Learners</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {instructors.map((instructor) => (
                            <InstructorTableRow
                                key={instructor.id}
                                instructor={instructor}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {instructors.map((instructor) => (
                    <InstructorMobileCard
                        key={instructor.id}
                        instructor={instructor}
                    />
                ))}
            </div>
        </>
    );
}