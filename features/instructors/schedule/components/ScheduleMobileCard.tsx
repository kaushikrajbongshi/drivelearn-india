"use client";

import Link from "next/link";
import {
    CalendarDays,
    Car,
    Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import ScheduleStatusBadge from "./ScheduleStatusBadge";

import type { Schedule } from "../types/schedule";

interface ScheduleMobileCardProps {
    schedule: Schedule;
}

export default function ScheduleMobileCard({
    schedule,
}: ScheduleMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {schedule.studentName}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {schedule.studentId}
                        </p>
                    </div>

                    <ScheduleStatusBadge
                        status={schedule.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Clock className="size-4 text-muted-foreground" />
                        <span>{schedule.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Car className="size-4 text-muted-foreground" />
                        <span>{schedule.vehicle}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-muted-foreground" />
                        <span>{schedule.lessonType}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground">
                        {schedule.id}
                    </span>

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/instructor/schedule/${schedule.id}`}
                            />
                        }
                    >
                        View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}