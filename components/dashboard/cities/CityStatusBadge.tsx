import { Badge } from "@/components/ui/badge";

import type { CityStatus } from "@/features/admin/cities/types/city";

interface CityStatusBadgeProps {
    status: CityStatus;
}

const statusMap: Record<
    CityStatus,
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

    inactive: {
        label: "Inactive",
        className:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300",
    },
};

export default function CityStatusBadge({
    status,
}: CityStatusBadgeProps) {
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