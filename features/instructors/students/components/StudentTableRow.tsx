"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import StudentStatusBadge from "./StudentStatusBadge";
import StudentActions from "./StudentActions";

import type { Student } from "../types/student";


interface StudentTableRowProps {
    student: Student;
}

export default function StudentTableRow({
    student,
}: StudentTableRowProps) {
    return (
        <TableRow>
            {/* Name */}
            <TableCell>
                <Link
                    href={`/instructor/students/${student.id}`}
                    className="font-medium hover:underline"
                >
                    {student.name}
                </Link>

                <p className="text-sm text-muted-foreground">
                    {student.id}
                </p>
            </TableCell>

            {/* Course */}
            <TableCell>
                {student.course}
            </TableCell>

            {/* Progress */}
            <TableCell>
                <div className="flex items-center gap-3">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full rounded-full bg-primary"
                            style={{
                                width: `${student.progress}%`,
                            }}
                        />
                    </div>

                    <span className="text-sm font-medium">
                        {student.progress}%
                    </span>
                </div>
            </TableCell>

            {/* Status */}
            <TableCell>
                <StudentStatusBadge
                    status={student.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <StudentActions
                    student={student}
                />
            </TableCell>
        </TableRow>
    );
}