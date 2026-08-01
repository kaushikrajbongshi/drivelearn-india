"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
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

import type { MonthlyRegistrationReport } from "../types/report";

interface MonthlyRegistrationChartProps {
    data: MonthlyRegistrationReport[];
}

export default function MonthlyRegistrationChart({
    data,
}: MonthlyRegistrationChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Monthly Registrations
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <AreaChart data={data}>
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
                                    "Learners",
                                ]}
                            />

                            <Area
                                type="monotone"
                                dataKey="learners"
                                strokeWidth={3}
                                fillOpacity={0.3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}