"use client";

import type { Student } from "../types/student";


import StudentTableRow from "./StudentTableRow";
import StudentMobileCard from "./StudentMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import EmptyState from "@/components/common/EmptyState";

interface StudentTableProps {
    students: Student[];
}

export default function StudentTable({
    students,
}: StudentTableProps) {
    if (students.length === 0) {
        return (
            <EmptyState
                title="No students found"
                description="Students assigned to you will appear here."
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
                            <TableHead>
                                Name
                            </TableHead>

                            <TableHead>
                                Course
                            </TableHead>

                            <TableHead>
                                Progress
                            </TableHead>

                            <TableHead>
                                Status
                            </TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {students.map((student) => (
                            <StudentTableRow
                                key={student.id}
                                student={student}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {students.map((student) => (
                    <StudentMobileCard
                        key={student.id}
                        student={student}
                    />
                ))}
            </div>
        </>
    );
}