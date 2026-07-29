import { Badge } from "@/components/ui/badge";

import type { LearnerStatus } from "@/features/learners/types/learner";

interface LearnerStatusBadgeProps {
    status: LearnerStatus;
}

const statusMap: Record<
    LearnerStatus,
    {
        label: string;
        className: string;
    }
> = {
    active: {
        label: "Active",
        className:
            "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
    },

    pending: {
        label: "Pending",
        className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
    },

    completed: {
        label: "Completed",
        className:
            "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
    },

    suspended: {
        label: "Suspended",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function LearnerStatusBadge({
    status,
}: LearnerStatusBadgeProps) {
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