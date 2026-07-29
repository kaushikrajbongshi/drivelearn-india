import { Badge } from "@/components/ui/badge";

import type { InstructorStatus } from "@/features/instructors/types/instructor";

interface InstructorStatusBadgeProps {
    status: InstructorStatus;
}

const statusMap: Record<
    InstructorStatus,
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

    on_leave: {
        label: "On Leave",
        className:
            "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300",
    },

    suspended: {
        label: "Suspended",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function InstructorStatusBadge({
    status,
}: InstructorStatusBadgeProps) {
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