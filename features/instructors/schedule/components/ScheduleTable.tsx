"use client";

import type { Schedule } from "../types/schedule";

import ScheduleTableRow from "./ScheduleTableRow";
import ScheduleMobileCard from "./ScheduleMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import EmptyState from "@/components/common/EmptyState";

interface ScheduleTableProps {
    schedules: Schedule[];
}

export default function ScheduleTable({
    schedules,
}: ScheduleTableProps) {
    if (schedules.length === 0) {
        return (
            <EmptyState
                title="No lessons scheduled"
                description="You don't have any driving lessons scheduled for today."
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
                            <TableHead>Time</TableHead>
                            <TableHead>Student</TableHead>
                            <TableHead>Vehicle</TableHead>
                            <TableHead>Lesson Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {schedules.map((schedule) => (
                            <ScheduleTableRow
                                key={schedule.id}
                                schedule={schedule}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {schedules.map((schedule) => (
                    <ScheduleMobileCard
                        key={schedule.id}
                        schedule={schedule}
                    />
                ))}
            </div>
        </>
    );
}