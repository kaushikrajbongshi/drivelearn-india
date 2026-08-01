import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import EditCourseForm from "@/features/owner/courses/components/EditCourseForm";

import { courses } from "@/features/owner/courses/data/courses";

interface EditCoursePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCoursePage({
    params,
}: EditCoursePageProps) {
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
                    <Link
                        href={`/owner/courses/${course.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Course"
                description={`Update information for ${course.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Course Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditCourseForm
                        course={course}
                    />
                </CardContent>
            </Card>
        </div>
    );
}