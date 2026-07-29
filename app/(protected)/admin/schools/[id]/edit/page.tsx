import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import EditSchoolForm from "@/features/schools/components/EditSchoolForm";
import { schools } from "@/features/schools/data/schools";

interface EditSchoolPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditSchoolPage({
    params,
}: EditSchoolPageProps) {
    const { id } = await params;

    const school = schools.find(
        (school) => school.id === id
    );

    if (!school) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                className=" justify-start"
                render={
                    <Link
                        href={`/admin/schools`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit School"
                description={`Update information for ${school.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        School Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditSchoolForm
                        school={school}
                    />
                </CardContent>
            </Card>
        </div>
    );
}