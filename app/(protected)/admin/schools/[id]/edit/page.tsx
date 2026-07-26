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
import SchoolForm from "@/components/dashboard/schools/SchoolForm";
import SchoolAddressSection from "@/components/dashboard/schools/SchoolAddressSection";
import SchoolConfiguration from "@/components/dashboard/schools/SchoolConfiguration";
import { schools } from "@/features/admin/schools/data/schools";
import SchoolLogoUpload from "@/components/dashboard/schools/SchoolLogoUpload";
import EditSchoolForm from "@/components/dashboard/schools/EditSchoolForm";

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