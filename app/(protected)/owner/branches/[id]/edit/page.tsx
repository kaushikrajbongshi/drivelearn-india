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

import BranchForm from "@/features/owner/owner-branches/components/BranchForm";
import { branches } from "@/features/owner/owner-branches/data/branches";

interface EditBranchPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditBranchPage({
    params,
}: EditBranchPageProps) {
    const { id } = await params;

    const branch = branches.find(
        (item) => item.id === id
    );

    if (!branch) {
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
                        href={`/owner/branches/${branch.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Branch"
                description={`Update information for ${branch.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Branch Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <BranchForm
                        defaultValues={branch}
                    />
                </CardContent>
            </Card>
        </div>
    );
}