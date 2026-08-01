"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import {
  dashboardIcons,
  type DashboardIcon,
} from "@/config/dashboard-icons";

// interface DashboardStatCardProps {
//   title: string;
//   value: string | number;
//   description?: string;
//   icon: DashboardIcon;
//   trend?: {
//     value: string;
//     positive?: boolean;
//   };
// }
export interface DashboardStatCardProps {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function DashboardStatCard({
  title,
  value,
  description,
  icon,
  trend,
}: DashboardStatCardProps) {
  const Icon = dashboardIcons[icon];
  const positive = trend?.positive ?? true;

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>

          <h2 className="text-3xl font-bold tracking-tight">
            {value}
          </h2>
        </div>

        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
      </CardHeader>

      {(description || trend) && (
        <CardContent className="flex items-center justify-between pt-0">
          <p className="text-xs text-muted-foreground">
            {description}
          </p>

          {trend && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                positive
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 text-red-600 dark:text-red-400"
              )}
            >
              {positive ? (
                <ArrowUpRight className="size-3.5" />
              ) : (
                <ArrowDownRight className="size-3.5" />
              )}

              <span>{trend.value}</span>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}