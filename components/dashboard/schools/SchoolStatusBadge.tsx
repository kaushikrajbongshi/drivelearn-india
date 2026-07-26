"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { SchoolStatus } from "@/features/admin/schools/types/school";

interface SchoolStatusBadgeProps {
    status: SchoolStatus;
}

const statusConfig: Record<
    SchoolStatus,
    {
        label: string;
        className: string;
    }
> = {
    active: {
        label: "Active",
        className:
            "border-green-200 bg-green-100 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400",
    },

    inactive: {
        label: "Inactive",
        className:
            "border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400",
    },

    suspended: {
        label: "Suspended",
        className:
            "border-red-200 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400",
    },
};

export default function SchoolStatusBadge({
    status,
}: SchoolStatusBadgeProps) {
    const config = statusConfig[status];

    return (
        <Badge
            variant="outline"
            className={cn(
                "rounded-full px-2.5 py-1 font-medium",
                config.className
            )}
        >
            {config.label}
        </Badge>
    );
}