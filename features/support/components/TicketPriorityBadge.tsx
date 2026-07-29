import { Badge } from "@/components/ui/badge";

import type { TicketPriority } from "@/features/support/types/ticket";

interface TicketPriorityBadgeProps {
    priority: TicketPriority;
}

const priorityMap: Record<
    TicketPriority,
    {
        label: string;
        className: string;
    }
> = {
    low: {
        label: "Low",
        className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
    },

    medium: {
        label: "Medium",
        className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
    },

    high: {
        label: "High",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function TicketPriorityBadge({
    priority,
}: TicketPriorityBadgeProps) {
    const config = priorityMap[priority];

    return (
        <Badge
            variant="outline"
            className={config.className}
        >
            {config.label}
        </Badge>
    );
}