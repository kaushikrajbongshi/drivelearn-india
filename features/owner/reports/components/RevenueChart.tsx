"use client";

import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import type { MonthlyRevenue } from "../types/report";

interface RevenueChartProps {
    data: MonthlyRevenue[];
}

export default function RevenueChart({
    data,
}: RevenueChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Monthly Revenue
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart data={data}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis />

                            <Tooltip
                                formatter={(value) => [
                                    `₹${Number(value).toLocaleString()}`,
                                    "Revenue",
                                ]}
                            />

                            <Line
                                type="monotone"
                                dataKey="revenue"
                                strokeWidth={3}
                                dot={{
                                    r: 4,
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}