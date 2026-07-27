"use client";

import type { Subscription } from "@/features/admin/subscriptions/types/subscription";

import SubscriptionTableRow from "./SubscriptionTableRow";
import SubscriptionMobileCard from "./SubscriptionMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface SubscriptionTableProps {
    subscriptions: Subscription[];
}

export default function SubscriptionTable({
    subscriptions,
}: SubscriptionTableProps) {
    if (subscriptions.length === 0) {
        return (
            <div className="rounded-xl border p-12 text-center">
                <h3 className="text-lg font-semibold">
                    No subscriptions found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or filters.
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>School</TableHead>

                            <TableHead>Plan</TableHead>

                            <TableHead>Billing</TableHead>

                            <TableHead>Expiry</TableHead>

                            <TableHead>Payment</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {subscriptions.map((subscription) => (
                            <SubscriptionTableRow
                                key={subscription.id}
                                subscription={subscription}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {subscriptions.map((subscription) => (
                    <SubscriptionMobileCard
                        key={subscription.id}
                        subscription={subscription}
                    />
                ))}
            </div>
        </>
    );
}