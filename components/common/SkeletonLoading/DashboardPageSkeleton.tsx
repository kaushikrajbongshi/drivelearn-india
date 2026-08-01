"use client";

import { Skeleton } from "@/components/ui/skeleton";

import DashboardStatCardSkeleton from "./DashboardStatCardSkeleton";
import DashboardTableSkeleton from "./DashboardTableSkeleton";

interface DashboardPageSkeletonProps {
    showStats?: boolean;
    statsCount?: number;
    columns?: number;
    rows?: number;
}

export default function DashboardPageSkeleton({
    showStats = true,
    statsCount = 4,
    columns = 8,
    rows = 6,
}: DashboardPageSkeletonProps) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-64" />

                <Skeleton className="h-4 w-96 max-w-full" />
            </div>

            {/* Stats */}
            {showStats && (
                <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {Array.from({
                        length: statsCount,
                    }).map((_, index) => (
                        <DashboardStatCardSkeleton
                            key={index}
                        />
                    ))}
                </section>
            )}

            {/* Table */}
            <DashboardTableSkeleton
                columns={columns}
                rows={rows}
            />
        </div>
    );
}