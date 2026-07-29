import { Badge } from "@/components/ui/badge";

import type { TicketStatus } from "@/features/support/types/ticket";

interface TicketStatusBadgeProps {
    status: TicketStatus;
}

const statusMap: Record<
    TicketStatus,
    {
        label: string;
        className: string;
    }
> = {
    open: {
        label: "Open",
        className:
            "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
    },

    "in-progress": {
        label: "In Progress",
        className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
    },

    resolved: {
        label: "Resolved",
        className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
    },

    closed: {
        label: "Closed",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function TicketStatusBadge({
    status,
}: TicketStatusBadgeProps) {
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