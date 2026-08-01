"use client";

import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

interface DashboardFormSkeletonProps {
    fields?: number;
    columns?: 1 | 2;
}

export default function DashboardFormSkeleton({
    fields = 8,
    columns = 2,
}: DashboardFormSkeletonProps) {
    return (
        <Card>
            <CardContent className="pt-6">
                <div
                    className={`grid gap-6 ${columns === 2
                            ? "md:grid-cols-2"
                            : "grid-cols-1"
                        }`}
                >
                    {Array.from({
                        length: fields,
                    }).map((_, index) => (
                        <div
                            key={index}
                            className="space-y-2"
                        >
                            <Skeleton className="h-4 w-28" />

                            <Skeleton className="h-10 w-full rounded-md" />
                        </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="justify-end">
                <Skeleton className="h-10 w-36 rounded-md" />
            </CardFooter>
        </Card>
    );
}