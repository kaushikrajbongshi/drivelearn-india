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

import EditPaymentForm from "@/features/owner/payments/components/EditPaymentForm";

import { payments } from "@/features/owner/payments/data/payments";

interface EditPaymentPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPaymentPage({
    params,
}: EditPaymentPageProps) {
    const { id } = await params;

    const payment = payments.find(
        (item) => item.id === Number(id)
    );

    if (!payment) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                variant="ghost"
                className="w-fit"
                nativeButton={false}
                render={
                    <Link
                        href={`/owner/payments/${payment.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Payment"
                description="Update payment information."
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Payment Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditPaymentForm
                        payment={payment}
                    />
                </CardContent>
            </Card>
        </div>
    );
}