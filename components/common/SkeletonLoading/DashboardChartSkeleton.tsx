"use client";

import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

interface DashboardChartSkeletonProps {
    title?: boolean;
    height?: string;
}

export default function DashboardChartSkeleton({
    title = true,
    height = "h-80",
}: DashboardChartSkeletonProps) {
    return (
        <Card>
            {title && (
                <CardHeader>
                    <Skeleton className="h-6 w-44" />
                </CardHeader>
            )}

            <CardContent>
                <div
                    className={`flex items-center justify-center ${height}`}
                >
                    <div className="relative h-full w-full">
                        {/* Y Axis */}
                        <Skeleton className="absolute left-0 top-0 h-full w-px" />

                        {/* X Axis */}
                        <Skeleton className="absolute bottom-0 left-0 h-px w-full" />

                        {/* Fake Chart */}
                        <div className="absolute inset-4 flex items-end justify-between gap-3">
                            <Skeleton className="h-20 w-full rounded-md" />
                            <Skeleton className="h-36 w-full rounded-md" />
                            <Skeleton className="h-28 w-full rounded-md" />
                            <Skeleton className="h-48 w-full rounded-md" />
                            <Skeleton className="h-32 w-full rounded-md" />
                            <Skeleton className="h-56 w-full rounded-md" />
                            <Skeleton className="h-40 w-full rounded-md" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}