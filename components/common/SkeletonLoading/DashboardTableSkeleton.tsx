"use client";

import { Skeleton } from "@/components/ui/skeleton";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface DashboardTableSkeletonProps {
    rows?: number;
    columns?: number;
    showToolbar?: boolean;
}

export default function DashboardTableSkeleton({
    rows = 6,
    columns = 8,
    showToolbar = true,
}: DashboardTableSkeletonProps) {
    return (
        <Card>
            <CardContent className="space-y-6 p-6">
                {showToolbar && (
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <Skeleton className="h-10 w-full md:w-80" />

                        <div className="flex gap-3">
                            <Skeleton className="h-10 w-40" />
                            <Skeleton className="h-10 w-32" />
                        </div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                {Array.from({
                                    length: columns,
                                }).map((_, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-3"
                                    >
                                        <Skeleton className="h-4 w-20" />
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {Array.from({
                                length: rows,
                            }).map((_, row) => (
                                <tr
                                    key={row}
                                    className="border-b"
                                >
                                    {Array.from({
                                        length: columns,
                                    }).map(
                                        (
                                            _,
                                            column
                                        ) => (
                                            <td
                                                key={
                                                    column
                                                }
                                                className="px-4 py-4"
                                            >
                                                <Skeleton className="h-4 w-full max-w-[100px]" />
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}