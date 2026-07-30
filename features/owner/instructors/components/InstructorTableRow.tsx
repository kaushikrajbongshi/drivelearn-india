import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import InstructorActions from "./InstructorActions";
import InstructorStatusBadge from "./InstructorStatusBadge";

import type { Instructor } from "../types/instructor";

interface InstructorTableRowProps {
    instructor: Instructor;
}

export default function InstructorTableRow({
    instructor,
}: InstructorTableRowProps) {
    return (
        <TableRow>
            <TableCell>
                <Link
                    href={`/owner/instructors/${instructor.id}`}
                    className="font-medium hover:underline"
                >
                    {instructor.name}
                </Link>
            </TableCell>

            <TableCell>{instructor.email}</TableCell>

            <TableCell>{instructor.phone}</TableCell>

            <TableCell>{instructor.specialization}</TableCell>

            <TableCell>{instructor.assignedLearners}</TableCell>

            <TableCell>{instructor.rating.toFixed(1)}</TableCell>

            <TableCell>
                <InstructorStatusBadge
                    status={instructor.status}
                />
            </TableCell>

            <TableCell>{instructor.joinedAt}</TableCell>

            <TableCell className="text-right">
                <InstructorActions
                    instructorId={instructor.id}
                />
            </TableCell>
        </TableRow>
    );
}