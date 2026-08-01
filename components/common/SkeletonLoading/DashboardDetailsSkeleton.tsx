"use client";

import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function DashboardDetailsSkeleton() {
    return (
        <div className="space-y-6">
            {/* Back Button */}
            <Skeleton className="h-10 w-24" />

            {/* Page Header */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-52" />
            </div>

            {/* Status Badge */}
            <Skeleton className="h-7 w-24 rounded-full" />

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Details Card */}
                <Card className="xl:col-span-2">
                    <CardHeader>
                        <CardTitle>
                            <Skeleton className="h-6 w-52" />
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="grid gap-6 md:grid-cols-2">
                        {Array.from({
                            length: 8,
                        }).map((_, index) => (
                            <div
                                key={index}
                                className="space-y-2"
                            >
                                <Skeleton className="h-4 w-28" />

                                <Skeleton className="h-5 w-40" />
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            <Skeleton className="h-6 w-36" />
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Skeleton className="h-10 w-full rounded-md" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}