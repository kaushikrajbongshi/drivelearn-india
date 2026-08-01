import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import InfoItem from "@/components/common/InfoItem";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import CourseStatusBadge from "@/features/owner/courses/components/CourseStatusBadge";
import { courses } from "@/features/owner/courses/data/courses";
import CourseQuickActions from "@/features/owner/courses/components/CourseQuickActions";

interface CourseDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function CourseDetailsPage({
    params,
}: CourseDetailsPageProps) {
    const { id } = await params;

    const course = courses.find(
        (item) => item.id === Number(id)
    );

    if (!course) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/owner/courses" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={course.name}
                description="Course Details"
            />

            <CourseStatusBadge
                status={course.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Course Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                label="Course Name"
                                value={course.name}
                            />

                            <InfoItem
                                label="Course Code"
                                value={course.code}
                            />

                            <InfoItem
                                label="Duration"
                                value={course.duration}
                            />

                            <InfoItem
                                label="Fee"
                                value={`₹${course.fee.toLocaleString()}`}
                            />

                            <InfoItem
                                label="Lessons"
                                value={course.lessonCount.toString()}
                            />

                            <InfoItem
                                label="Vehicle Type"
                                value={course.vehicleType}
                            />

                            <InfoItem
                                label="Created"
                                value={course.createdAt}
                            />

                            <InfoItem
                                label="Description"
                                value={course.description}
                            />
                        </CardContent>
                    </Card>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <CourseQuickActions
                            course={course}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}