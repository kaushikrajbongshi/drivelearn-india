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
import EditLearnerForm from "@/components/dashboard/learners/EditLearnerForm";

import { learners } from "@/features/admin/learners/data/learners";

interface EditLearnerPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditLearnerPage({
    params,
}: EditLearnerPageProps) {
    const { id } = await params;

    const learner = learners.find(
        (item) => item.id === id
    );

    if (!learner) {
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
                        href={`/admin/learners/${learner.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Learner"
                description={`Update information for ${learner.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Learner Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditLearnerForm
                        learner={learner}
                    />
                </CardContent>
            </Card>
        </div>
    );
}