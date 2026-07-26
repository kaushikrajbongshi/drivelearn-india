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

interface ActivityItem {
  id: number;
  title: string;
  description: string;
  time: string;
  type: ActivityType;
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

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "New learner registered",
    description: "Rahul Sharma created a new account.",
    time: "2 min ago",
    type: "user",
  },
  {
    id: 2,
    title: "School verification completed",
    description: "DriveSafe Academy has been approved.",
    time: "18 min ago",
    type: "verification",
  },
  {
    id: 3,
    title: "Premium subscription purchased",
    description: "Safe Wheels Driving School upgraded.",
    time: "1 hour ago",
    type: "subscription",
  },
  {
    id: 4,
    title: "New driving school joined",
    description: "Royal Motor Training registered.",
    time: "3 hours ago",
    type: "school",
  },
];

export default function RecentActivity() {
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
              dashboardIcons[activityConfig[activity.type].icon];

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