"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DashboardChartProps {
  title: string;
  subtitle?: string;
  badge?: string;
  height?: number;
}

export default function DashboardChart({
  title,
  subtitle,
  badge,
  height = 320,
}: DashboardChartProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>{title}</CardTitle>

          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {badge && (
          <Badge variant="secondary">
            {badge}
          </Badge>
        )}
      </CardHeader>

      <CardContent>
        <div
          style={{ height }}
          className="flex w-full items-center justify-center rounded-xl border border-dashed bg-muted/30"
        >
          <div className="text-center">
            <p className="text-base font-medium">
              Chart Placeholder
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Chart library will be integrated during API implementation.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}