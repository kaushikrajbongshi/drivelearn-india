"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { SubscriptionPlan } from "@/features/admin/schools/types/school";

interface SchoolSubscriptionBadgeProps {
  subscription: SubscriptionPlan;
}

const subscriptionConfig: Record<
  SubscriptionPlan,
  {
    label: string;
    className: string;
  }
> = {
  free: {
    label: "Free",
    className:
      "border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400",
  },

  basic: {
    label: "Basic",
    className:
      "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400",
  },

  premium: {
    label: "Premium",
    className:
      "border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400",
  },
};

export default function SchoolSubscriptionBadge({
  subscription,
}: SchoolSubscriptionBadgeProps) {
  const config = subscriptionConfig[subscription];

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