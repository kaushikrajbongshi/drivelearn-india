import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import { schedules } from "@/features/instructors/schedule/data/schedules";

interface EditSchedulePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditSchedulePage({
    params,
}: EditSchedulePageProps) {
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
                    <Link
                        href={`/instructor/schedule/${schedule.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Lesson"
                description={`Update lesson for ${schedule.studentName}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Lesson Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="space-y-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Student */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Student
                                </label>

                                <input
                                    value={schedule.studentName}
                                    disabled
                                    className="flex h-9 w-full rounded-md border border-input bg-muted px-3 py-1 text-sm shadow-xs"
                                />
                            </div>

                            {/* Time */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="time"
                                    className="text-sm font-medium"
                                >
                                    Lesson Time
                                </label>

                                <input
                                    id="time"
                                    type="time"
                                    defaultValue={convertToTime(
                                        schedule.time
                                    )}
                                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs"
                                />
                            </div>

                            {/* Vehicle */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="vehicle"
                                    className="text-sm font-medium"
                                >
                                    Vehicle
                                </label>

                                <input
                                    id="vehicle"
                                    defaultValue={schedule.vehicle}
                                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs"
                                />
                            </div>

                            {/* Lesson Type */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="lesson-type"
                                    className="text-sm font-medium"
                                >
                                    Lesson Type
                                </label>

                                <select
                                    id="lesson-type"
                                    defaultValue={schedule.lessonType}
                                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs"
                                >
                                    <option value="Practical">
                                        Practical
                                    </option>

                                    <option value="Test Preparation">
                                        Test Preparation
                                    </option>
                                </select>
                            </div>

                            {/* Status */}
                            <div className="space-y-2 md:col-span-2">
                                <label
                                    htmlFor="status"
                                    className="text-sm font-medium"
                                >
                                    Status
                                </label>

                                <select
                                    id="status"
                                    defaultValue={schedule.status}
                                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs"
                                >
                                    <option value="upcoming">
                                        Upcoming
                                    </option>

                                    <option value="completed">
                                        Completed
                                    </option>

                                    <option value="cancelled">
                                        Cancelled
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                nativeButton={false}
                                render={
                                    <Link
                                        href={`/instructor/schedule/${schedule.id}`}
                                    />
                                }
                            >
                                Cancel
                            </Button>

                            <Button type="submit">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

function convertToTime(time: string) {
    const [value, modifier] = time.split(" ");

    let [hours, minutes] = value.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
        hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
        hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${String(
        minutes
    ).padStart(2, "0")}`;
}