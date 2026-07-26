"use client";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import type { School } from "@/features/admin/schools/types/school";

import SchoolMobileCard from "./SchoolMobileCard";
import SchoolTableRow from "./SchoolTableRow";

interface SchoolTableProps {
    schools: School[];
}

export default function SchoolTable({
    schools,
}: SchoolTableProps) {
    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-x-auto rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>School</TableHead>
                            <TableHead>Owner</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Instructors</TableHead>
                            <TableHead>Learners</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Verification</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="w-16 text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {schools.length > 0 ? (
                            schools.map((school) => (
                                <SchoolTableRow
                                    key={school.id}
                                    school={school}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <td
                                    colSpan={10}
                                    className="h-32 text-center text-muted-foreground"
                                >
                                    No schools found.
                                </td>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {schools.length > 0 ? (
                    schools.map((school) => (
                        <SchoolMobileCard
                            key={school.id}
                            school={school}
                        />
                    ))
                ) : (
                    <div className="flex h-40 items-center justify-center rounded-xl border text-sm text-muted-foreground">
                        No schools found.
                    </div>
                )}
            </div>
        </>
    );
}