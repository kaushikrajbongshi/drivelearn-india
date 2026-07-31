import { Badge } from "@/components/ui/badge";

import type { BookingStatus } from "../types/booking";

interface BookingStatusBadgeProps {
    status: BookingStatus;
}

const statusMap: Record<
    BookingStatus,
    {
        label: string;
        variant:
        | "default"
        | "secondary"
        | "destructive"
        | "outline";
    }
> = {
    Scheduled: {
        label: "Scheduled",
        variant: "secondary",
    },

    Ongoing: {
        label: "Ongoing",
        variant: "default",
    },

    Completed: {
        label: "Completed",
        variant: "outline",
    },

    Cancelled: {
        label: "Cancelled",
        variant: "destructive",
    },
};

export default function BookingStatusBadge({
    status,
}: BookingStatusBadgeProps) {
    const config = statusMap[status];

    return (
        <Badge variant={config.variant}>
            {config.label}
        </Badge>
    );
}