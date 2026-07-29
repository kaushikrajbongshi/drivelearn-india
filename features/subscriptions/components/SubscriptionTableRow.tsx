"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import SubscriptionStatusBadge from "./SubscriptionStatusBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";
import SubscriptionActions from "./SubscriptionActions";

import type { Subscription } from "@/features/subscriptions/types/subscription";

interface SubscriptionTableRowProps {
    subscription: Subscription;
}

export default function SubscriptionTableRow({
    subscription,
}: SubscriptionTableRowProps) {
    return (
        <TableRow>
            {/* School */}
            <TableCell>
                <Link
                    href={`/admin/subscriptions/${subscription.id}`}
                    className="font-medium hover:underline"
                >
                    {subscription.schoolName}
                </Link>

                <p className="text-sm text-muted-foreground">
                    {subscription.id}
                </p>
            </TableCell>

            {/* Plan */}
            <TableCell className="capitalize">
                {subscription.plan}
            </TableCell>

            {/* Billing */}
            <TableCell className="capitalize">
                {subscription.billingCycle}
            </TableCell>

            {/* Expiry */}
            <TableCell>
                {subscription.expiryDate}
            </TableCell>

            {/* Payment */}
            <TableCell>
                <PaymentStatusBadge
                    status={subscription.paymentStatus}
                />
            </TableCell>

            {/* Subscription Status */}
            <TableCell>
                <SubscriptionStatusBadge
                    status={subscription.status}
                />
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <SubscriptionActions
                    subscription={subscription}
                />
            </TableCell>
        </TableRow>
    );
}