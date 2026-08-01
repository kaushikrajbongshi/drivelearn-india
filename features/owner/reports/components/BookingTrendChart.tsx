"use client";

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import type { BookingTrendReport } from "../types/report";

interface BookingTrendChartProps {
    data: BookingTrendReport[];
}

export default function BookingTrendChart({
    data,
}: BookingTrendChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Booking Trend
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
                                    Number(value),
                                    "Bookings",
                                ]}
                            />

                            <Line
                                type="monotone"
                                dataKey="bookings"
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