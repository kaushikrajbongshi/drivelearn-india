"use client";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import type { UserStatus } from "@/features/admin/users/types/user";

interface UserStatusBadgeProps {
  status: UserStatus;
}

const statusConfig: Record<
  UserStatus,
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

  pending: {
    label: "Pending",
    className:
      "border-yellow-200 bg-yellow-100 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-400",
  },

  inactive: {
    label: "Inactive",
    className:
      "border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400",
  },

  blocked: {
    label: "Blocked",
    className:
      "border-red-200 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400",
  },
};

export default function UserStatusBadge({
  status,
}: UserStatusBadgeProps) {
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