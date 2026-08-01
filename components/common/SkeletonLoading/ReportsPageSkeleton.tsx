"use client";

import { Skeleton } from "@/components/ui/skeleton";

import DashboardChartSkeleton from "./DashboardChartSkeleton";
import DashboardStatCardSkeleton from "./DashboardStatCardSkeleton";

export default function ReportsPageSkeleton() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-64" />

                    <Skeleton className="h-4 w-96 max-w-full" />
                </div>

                <Skeleton className="h-10 w-44 rounded-md" />
            </div>

            {/* Stats */}
            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({
                    length: 4,
                }).map((_, index) => (
                    <DashboardStatCardSkeleton
                        key={index}
                    />
                ))}
            </section>

            {/* Revenue + Payment Method */}
            <section className="grid gap-6 xl:grid-cols-2">
                <DashboardChartSkeleton />

                <DashboardChartSkeleton />
            </section>

            {/* Payment Status + Course */}
            <section className="grid gap-6 xl:grid-cols-2">
                <DashboardChartSkeleton />

                <DashboardChartSkeleton />
            </section>

            {/* Instructor + Vehicle */}
            <section className="grid gap-6 xl:grid-cols-2">
                <DashboardChartSkeleton />

                <DashboardChartSkeleton />
            </section>

            {/* Registration + Booking */}
            <section className="grid gap-6 xl:grid-cols-2">
                <DashboardChartSkeleton />

                <DashboardChartSkeleton />
            </section>
        </div>
    );
}