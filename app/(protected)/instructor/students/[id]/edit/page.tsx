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

import { students } from "@/features/instructors/students/data/students";

interface EditStudentPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditStudentPage({
    params,
}: EditStudentPageProps) {
    const { id } = await params;

    const student = students.find(
        (item) => item.id === id
    );

    if (!student) {
        notFound();
    }

    return (
        <div className="space-y-6">
            {/* Back */}
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link
                        href={`/instructor/students/${student.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            {/* Header */}
            <DashboardPageHeader
                title="Edit Student"
                description={`Update student information for ${student.name}.`}
            />

            {/* Form Card */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        Student Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    {/* Form will be added here */}
                    <div className="rounded-lg border border-dashed p-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            Student edit form will be added here.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}