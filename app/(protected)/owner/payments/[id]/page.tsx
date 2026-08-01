import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import InfoItem from "@/components/common/InfoItem";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import PaymentQuickActions from "@/features/owner/payments/components/PaymentQuickActions";
import PaymentStatusBadge from "@/features/owner/payments/components/PaymentStatusBadge";

import { payments } from "@/features/owner/payments/data/payments";

interface PaymentDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PaymentDetailsPage({
    params,
}: PaymentDetailsPageProps) {
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
                    <Link href="/owner/payments" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={payment.paymentId}
                description="Payment Details"
            />

            <PaymentStatusBadge
                status={payment.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Payment Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                label="Payment ID"
                                value={payment.paymentId}
                            />

                            <InfoItem
                                label="Learner Name"
                                value={payment.learnerName}
                            />

                            <InfoItem
                                label="Learner Email"
                                value={payment.learnerEmail}
                            />

                            <InfoItem
                                label="Course"
                                value={payment.courseName}
                            />

                            <InfoItem
                                label="Amount"
                                value={`₹${payment.amount.toLocaleString()}`}
                            />

                            <InfoItem
                                label="Payment Method"
                                value={payment.paymentMethod}
                            />

                            <InfoItem
                                label="Transaction Date"
                                value={payment.transactionDate}
                            />

                            <InfoItem
                                label="Due Date"
                                value={payment.dueDate}
                            />

                            <InfoItem
                                label="Invoice Number"
                                value={payment.invoiceNumber}
                            />

                            <InfoItem
                                label="Reference Number"
                                value={payment.referenceNumber}
                            />
                        </CardContent>
                    </Card>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <PaymentQuickActions
                            payment={payment}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}