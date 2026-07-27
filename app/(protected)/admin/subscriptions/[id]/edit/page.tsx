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
import EditSubscriptionForm from "@/components/dashboard/subscriptions/EditSubscriptionForm";

import { subscriptions } from "@/features/admin/subscriptions/data/subscriptions";

interface EditSubscriptionPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditSubscriptionPage({
    params,
}: EditSubscriptionPageProps) {
    const { id } = await params;

    const subscription = subscriptions.find(
        (item) => item.id === id
    );

    if (!subscription) {
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
                        href={`/admin/subscriptions/${subscription.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Subscription"
                description={`Update subscription for ${subscription.schoolName}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Subscription Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditSubscriptionForm
                        subscription={subscription}
                    />
                </CardContent>
            </Card>
        </div>
    );
}