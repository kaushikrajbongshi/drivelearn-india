import { Badge } from "@/components/ui/badge";
import type { ScheduleStatus } from "../types/schedule";

interface ScheduleStatusBadgeProps {
    status: ScheduleStatus;
}

const statusMap: Record<
    ScheduleStatus,
    {
        label: string;
        className: string;
    }
> = {
    upcoming: {
        label: "Upcoming",
        className:
            "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
    },
    completed: {
        label: "Completed",
        className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
    },
    cancelled: {
        label: "Cancelled",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function ScheduleStatusBadge({
    status,
}: ScheduleStatusBadgeProps) {
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