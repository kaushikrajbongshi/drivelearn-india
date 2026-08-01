import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import CourseActions from "./CourseActions";
import CourseStatusBadge from "./CourseStatusBadge";

import type { Course } from "../types/course";

interface CourseTableRowProps {
    course: Course;
}

export default function CourseTableRow({
    course,
}: CourseTableRowProps) {
    return (
        <TableRow>
            <TableCell>
                <Link
                    href={`/owner/courses/${course.id}`}
                    className="font-medium hover:underline"
                >
                    {course.name}
                </Link>
            </TableCell>

            <TableCell>
                {course.code}
            </TableCell>

            <TableCell>
                {course.duration}
            </TableCell>

            <TableCell>
                ₹{course.fee.toLocaleString()}
            </TableCell>

            <TableCell>
                {course.lessonCount}
            </TableCell>

            <TableCell>
                {course.vehicleType}
            </TableCell>

            <TableCell>
                <CourseStatusBadge
                    status={course.status}
                />
            </TableCell>

            <TableCell>
                {course.createdAt}
            </TableCell>

            <TableCell align="right">
                <CourseActions
                    course={course}
                />
            </TableCell>
        </TableRow>
    );
}