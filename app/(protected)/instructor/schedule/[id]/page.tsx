import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
    CalendarDays,
    Car,
    Clock,
    GraduationCap,
    Pencil,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import ScheduleStatusBadge from "@/features/instructors/schedule/components/ScheduleStatusBadge";
import { schedules } from "@/features/instructors/schedule/data/schedules";

interface ScheduleDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ScheduleDetailsPage({
    params,
}: ScheduleDetailsPageProps) {
    const { id } = await params;

    const schedule = schedules.find(
        (item) => item.id === id
    );

    if (!schedule) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/instructor/schedule" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={schedule.studentName}
                description="Driving Lesson Details"
            />

            <div className="flex flex-wrap gap-2">
                <ScheduleStatusBadge
                    status={schedule.status}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Lesson Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<User className="size-4" />}
                                label="Student"
                                value={schedule.studentName}
                            />

                            <InfoItem
                                icon={
                                    <Clock className="size-4" />
                                }
                                label="Time"
                                value={schedule.time}
                            />

                            <InfoItem
                                icon={
                                    <Car className="size-4" />
                                }
                                label="Vehicle"
                                value={schedule.vehicle}
                            />

                            <InfoItem
                                icon={
                                    <GraduationCap className="size-4" />
                                }
                                label="Lesson Type"
                                value={schedule.lessonType}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Lesson Details
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={
                                    <CalendarDays className="size-4" />
                                }
                                label="Lesson ID"
                                value={schedule.id}
                            />

                            <InfoItem
                                icon={
                                    <User className="size-4" />
                                }
                                label="Student ID"
                                value={schedule.studentId}
                            />

                            <InfoItem
                                icon={
                                    <Clock className="size-4" />
                                }
                                label="Status"
                                value={schedule.status}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Button
                            nativeButton={false}
                            className="w-full justify-start"
                            render={
                                <Link
                                    href={`/instructor/schedule/${schedule.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Lesson
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/instructor/students/${schedule.studentId}`}
                                />
                            }
                        >
                            <User className="mr-2 size-4" />
                            View Student
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-muted-foreground">
                {icon}
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="font-medium capitalize">
                    {value}
                </p>
            </div>
        </div>
    );
}