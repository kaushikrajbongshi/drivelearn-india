"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  dashboardIcons,
  type DashboardIcon,
} from "@/features/dashboard/config/dashboard-icons";

type ActivityType =
  | "user"
  | "school"
  | "subscription"
  | "verification";

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: ActivityType;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

const activityConfig: Record<
  ActivityType,
  {
    icon: DashboardIcon;
  }
> = {
  user: {
    icon: "userPlus",
  },
  school: {
    icon: "building",
  },
  subscription: {
    icon: "creditCard",
  },
  verification: {
    icon: "shieldCheck",
  },
};

export default function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>

        <Badge variant="secondary">
          {(() => {
            const Icon = dashboardIcons.activity;
            return <Icon className="mr-1 size-3.5" />;
          })()}
          Live
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => {
            const Icon =
              dashboardIcons[
                activityConfig[activity.type ?? "user"].icon
              ];

            return (
              <div
                key={activity.id}
                className="flex items-start gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}