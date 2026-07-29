"use client";

import Link from "next/link";
import {
    CalendarDays,
    CreditCard,
    Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import SubscriptionStatusBadge from "./SubscriptionStatusBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";

import type { Subscription } from "@/features/subscriptions/types/subscription";

interface SubscriptionMobileCardProps {
    subscription: Subscription;
}

export default function SubscriptionMobileCard({
    subscription,
}: SubscriptionMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {subscription.schoolName}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {subscription.id}
                        </p>
                    </div>

                    <SubscriptionStatusBadge
                        status={subscription.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Building2 className="size-4 text-muted-foreground" />

                        <span className="capitalize">
                            {subscription.plan} Plan
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CreditCard className="size-4 text-muted-foreground" />

                        <PaymentStatusBadge
                            status={subscription.paymentStatus}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-muted-foreground" />

                        <span>
                            Expires {subscription.expiryDate}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground capitalize">
                        {subscription.billingCycle}
                    </span>

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/subscriptions/${subscription.id}`}
                            />
                        }
                    >
                        View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}