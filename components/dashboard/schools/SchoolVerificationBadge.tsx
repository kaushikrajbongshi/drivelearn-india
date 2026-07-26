"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import {
    dashboardIcons,
    type DashboardIcon,
} from "@/features/dashboard/config/dashboard-icons";

import type { SchoolVerificationStatus } from "@/features/admin/schools/types/school";

interface SchoolVerificationBadgeProps {
    verification: SchoolVerificationStatus;
}

const verificationConfig: Record<
    SchoolVerificationStatus,
    {
        label: string;
        icon: DashboardIcon;
        className: string;
    }
> = {
    verified: {
        label: "Verified",
        icon: "shieldCheck",
        className:
            "border-green-200 bg-green-100 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-400",
    },

    pending: {
        label: "Pending",
        icon: "activity",
        className:
            "border-yellow-200 bg-yellow-100 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-400",
    },

    rejected: {
        label: "Rejected",
        icon: "shieldBan",
        className:
            "border-red-200 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400",
    },
};

export default function SchoolVerificationBadge({
    verification,
}: SchoolVerificationBadgeProps) {
    const config = verificationConfig[verification];
    const Icon = dashboardIcons[config.icon];

    return (
        <Badge
            variant="outline"
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
                config.className
            )}
        >
            <Icon className="size-3.5" />
            <span>{config.label}</span>
        </Badge>
    );
}