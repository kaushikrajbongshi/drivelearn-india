import { Badge } from "@/components/ui/badge";

import type { CourseStatus } from "../types/course";

interface CourseStatusBadgeProps {
    status: CourseStatus;
}

const statusMap: Record<
    CourseStatus,
    {
        label: string;
        variant:
        | "default"
        | "secondary"
        | "destructive"
        | "outline";
    }
> = {
    Active: {
        label: "Active",
        variant: "default",
    },

    Inactive: {
        label: "Inactive",
        variant: "secondary",
    },
};

export default function CourseStatusBadge({
    status,
}: CourseStatusBadgeProps) {
    const config = statusMap[status];

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    );
}