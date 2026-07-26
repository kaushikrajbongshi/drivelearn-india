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
import EditInstructorForm from "@/components/dashboard/instructors/EditInstructorForm";

import { instructors } from "@/features/admin/instructors/data/instructors";

interface EditInstructorPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditInstructorPage({
    params,
}: EditInstructorPageProps) {
    const { id } = await params;

    const instructor = instructors.find(
        (item) => item.id === id
    );

    if (!instructor) {
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
                        href={`/admin/instructors/${instructor.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Instructor"
                description={`Update information for ${instructor.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Instructor Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditInstructorForm
                        instructor={instructor}
                    />
                </CardContent>
            </Card>
        </div>
    );
}