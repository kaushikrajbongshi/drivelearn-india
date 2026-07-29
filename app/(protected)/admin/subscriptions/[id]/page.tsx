import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    Building2,
    CalendarDays,
    CreditCard,
    DollarSign,
    BadgeCheck,
    Activity,
    Pencil,
    Ban,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import SubscriptionStatusBadge from "@/features/subscriptions/components/SubscriptionStatusBadge";
import PaymentStatusBadge from "@/features/subscriptions/components/PaymentStatusBadge";

import { subscriptions } from "@/features/subscriptions/data/subscriptions";

interface SubscriptionDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SubscriptionDetailsPage({
    params,
}: SubscriptionDetailsPageProps) {
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
                render={<Link href="/admin/subscriptions" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={subscription.schoolName}
                description="Subscription Details"
            />

            <div className="flex flex-wrap gap-2">
                <SubscriptionStatusBadge
                    status={subscription.status}
                />

                <PaymentStatusBadge
                    status={subscription.paymentStatus}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Subscription Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="School"
                                value={subscription.schoolName}
                            />

                            <InfoItem
                                icon={<CreditCard className="size-4" />}
                                label="Plan"
                                value={subscription.plan}
                            />

                            <InfoItem
                                icon={<Activity className="size-4" />}
                                label="Billing Cycle"
                                value={subscription.billingCycle}
                            />

                            <InfoItem
                                icon={<DollarSign className="size-4" />}
                                label="Price"
                                value={`$${subscription.price}`}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Subscription Timeline
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Start Date"
                                value={subscription.startDate}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Expiry Date"
                                value={subscription.expiryDate}
                            />

                            <InfoItem
                                icon={<BadgeCheck className="size-4" />}
                                label="Payment Status"
                                value={subscription.paymentStatus}
                            />

                            <InfoItem
                                icon={<Activity className="size-4" />}
                                label="Status"
                                value={subscription.status}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Button
                            nativeButton={false}
                            className="w-full justify-start"
                            render={
                                <Link
                                    href={`/admin/subscriptions/${subscription.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Subscription
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <Ban className="mr-2 size-4" />
                            Cancel Subscription
                        </Button>

                        <Button
                            variant="destructive"
                            className="w-full justify-start"
                        >
                            <Trash2 className="mr-2 size-4" />
                            Delete
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-muted-foreground">
                {icon}
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="font-medium capitalize">
                    {value}
                </p>
            </div>
        </div>
    );
}