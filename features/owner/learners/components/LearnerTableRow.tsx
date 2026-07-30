"use client";

import Link from "next/link";

import {
    Progress,
} from "@/components/ui/progress";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import LearnerActions from "./LearnerActions";

import {
    LearnerStatusBadge,
    PaymentStatusBadge,
} from "./LearnerStatusBadge";

import type { Learner } from "@/features/owner/learners/types/learner";

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
                <div>
                    <Link
                        href={`/owner/learners/${learner.id}`}
                        className="font-medium hover:underline"
                    >
                        {learner.name}
                    </Link>

                    <p className="text-sm text-muted-foreground">
                        {learner.email}
                    </p>
                </div>
            </TableCell>

            {/* Course */}
            <TableCell>
                {learner.course}
            </TableCell>

            {/* Instructor */}
            <TableCell>
                {learner.instructor}
            </TableCell>

            {/* Progress */}
            <TableCell className="min-w-40">
                <div className="space-y-2">
                    <Progress value={learner.progress} />

                    <span className="text-xs text-muted-foreground">
                        {learner.progress}%
                    </span>
                </div>
            </TableCell>

            {/* Attendance */}
            <TableCell>
                {learner.attendance}%
            </TableCell>

            {/* Payment */}
            <TableCell>
                <PaymentStatusBadge
                    status={learner.paymentStatus}
                />
            </TableCell>

            {/* Status */}
            <TableCell>
                <LearnerStatusBadge
                    status={learner.status}
                />
            </TableCell>

            {/* Joined */}
            <TableCell>
                {learner.joinedAt}
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