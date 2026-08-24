"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import ScheduleStatusBadge from "./ScheduleStatusBadge";
import ScheduleActions from "./ScheduleActions";

import type { Schedule } from "../types/schedule";

interface ScheduleTableRowProps {
    schedule: Schedule;
}

export default function ScheduleTableRow({
    schedule,
}: ScheduleTableRowProps) {
    return (
        <TableRow>
            {/* Time */}
            <TableCell>
                <span className="font-medium">
                    {schedule.time}
                </span>
            </TableCell>

            {/* Student */}
            <TableCell>
                <Link
                    href={`/instructor/students/${schedule.studentId}`}
                    className="font-medium hover:underline"
                >
                    {schedule.studentName}
                </Link>

                <p className="text-sm text-muted-foreground">
                    {schedule.studentId}
                </p>
            </TableCell>

            {/* Vehicle */}
            <TableCell>
                {schedule.vehicle}
            </TableCell>

            {/* Lesson Type */}
            <TableCell>
                {schedule.lessonType}
            </TableCell>

            {/* Status */}
            <TableCell>
                <ScheduleStatusBadge
                    status={schedule.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <ScheduleActions
                    schedule={schedule}
                />
            </TableCell>
        </TableRow>
    );
}