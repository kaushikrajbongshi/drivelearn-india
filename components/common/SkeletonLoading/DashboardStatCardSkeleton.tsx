"use client";

import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

export default function DashboardStatCardSkeleton() {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-3">
                    <Skeleton className="h-4 w-28" />

                    <Skeleton className="h-8 w-20" />

                    <Skeleton className="h-3 w-40" />
                </div>

                <Skeleton className="size-14 rounded-xl" />
            </CardContent>
        </Card>
    );
}