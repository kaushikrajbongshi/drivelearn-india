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
import EditStateForm from "@/components/dashboard/states/EditStateForm";

import { states } from "@/features/admin/states/data/states";

interface EditStatePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditStatePage({
    params,
}: EditStatePageProps) {
    const { id } = await params;

    const state = states.find(
        (item) => item.id === id
    );

    if (!state) {
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
                        href={`/admin/states/${state.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit State"
                description={`Update information for ${state.name}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        State Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditStateForm
                        state={state}
                    />
                </CardContent>
            </Card>
        </div>
    );
}