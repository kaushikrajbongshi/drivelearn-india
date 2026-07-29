import { Badge } from "@/components/ui/badge";

import type { PaymentStatus } from "@/features/subscriptions/types/subscription";

interface PaymentStatusBadgeProps {
    status: PaymentStatus;
}

const statusMap: Record<
    PaymentStatus,
    {
        label: string;
        className: string;
    }
> = {
    paid: {
        label: "Paid",
        className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
    },

    pending: {
        label: "Pending",
        className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
    },

    failed: {
        label: "Failed",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function PaymentStatusBadge({
    status,
}: PaymentStatusBadgeProps) {
    const config = statusMap[status];

    return (
        <Badge
            variant="outline"
            className={config.className}
        >
            {config.label}
        </Badge>
    );
}