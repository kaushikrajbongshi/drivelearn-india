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

import LearnerStatusBadge from "./LearnerStatusBadge";
import LearnerActions from "./LearnerActions";

import type { Learner } from "@/features/admin/learners/types/learner";

interface LearnerTableRowProps {
    learner: Learner;
}

export default function LearnerTableRow({
    learner,
}: LearnerTableRowProps) {
    return (
        <TableRow>
            {/* Learner */}
            <TableCell>
                <Link
                    href={`/admin/learners/${learner.id}`}
                    className="flex items-center gap-3 hover:opacity-80"
                >
                    <Avatar className="size-10">
                        <AvatarImage
                            src={learner.avatar}
                            alt={learner.name}
                        />

                        <AvatarFallback>
                            {learner.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="font-medium">
                            {learner.name}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            {learner.email}
                        </p>
                    </div>
                </Link>
            </TableCell>

            {/* School */}
            <TableCell>
                {learner.schoolName}
            </TableCell>

            {/* Instructor */}
            <TableCell>
                {learner.instructorName}
            </TableCell>

            {/* Course */}
            <TableCell>
                {learner.course}
            </TableCell>

            {/* Status */}
            <TableCell>
                <LearnerStatusBadge
                    status={learner.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <LearnerActions
                    learner={learner}
                />
            </TableCell>
        </TableRow>
    );
}