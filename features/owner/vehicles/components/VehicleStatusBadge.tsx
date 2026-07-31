import { Badge } from "@/components/ui/badge";

import type { VehicleStatus } from "../types/vehicle";

interface VehicleStatusBadgeProps {
    status: VehicleStatus;
}

const statusMap: Record<
    VehicleStatus,
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
    Maintenance: {
        label: "Maintenance",
        variant: "outline",
    },
    Inactive: {
        label: "Inactive",
        variant: "secondary",
    },
};

export default function VehicleStatusBadge({
    status,
}: VehicleStatusBadgeProps) {
    const config = statusMap[status];

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    );
}