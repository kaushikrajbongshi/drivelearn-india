"use client";

import Link from "next/link";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import InstructorStatusBadge from "./InstructorStatusBadge";
import InstructorActions from "./InstructorActions";

import type { Instructor } from "@/features/admin/instructors/types/instructor";

interface InstructorTableRowProps {
    instructor: Instructor;
}

export default function InstructorTableRow({
    instructor,
}: InstructorTableRowProps) {
    return (
        <TableRow>
            {/* Instructor */}
            <TableCell>
                <Link
                    href={`/admin/instructors/${instructor.id}`}
                    className="flex items-center gap-3 hover:opacity-80"
                >
                    <Avatar className="size-10">
                        <AvatarImage
                            src={instructor.avatar}
                            alt={instructor.name}
                        />

                        <AvatarFallback>
                            {instructor.name
                                .split(" ")
                                .map((name) => name[0])
                                .join("")
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="font-medium">
                            {instructor.name}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {instructor.email}
                        </p>
                    </div>
                </Link>
            </TableCell>

            {/* School */}
            <TableCell>
                {instructor.schoolName}
            </TableCell>

            {/* Experience */}
            <TableCell>
                {instructor.experience} Years
            </TableCell>

            {/* Learners */}
            <TableCell>
                {instructor.totalLearners}
            </TableCell>

            {/* Status */}
            <TableCell>
                <InstructorStatusBadge
                    status={instructor.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <InstructorActions
                    instructor={instructor}
                />
            </TableCell>
        </TableRow>
    );
}