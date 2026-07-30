import { Badge } from "@/components/ui/badge";

import type { InstructorStatus } from "../types/instructor";

interface InstructorStatusBadgeProps {
    status: InstructorStatus;
}

const statusMap: Record<
    InstructorStatus,
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
    "On Leave": {
        label: "On Leave",
        variant: "outline",
    },
};

export default function InstructorStatusBadge({
    status,
}: InstructorStatusBadgeProps) {
    const config = statusMap[status];

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    );
}