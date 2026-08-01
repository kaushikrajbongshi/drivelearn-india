"use client";

import {
    Bar,
    BarChart,
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

import type { VehicleUtilizationReport } from "../types/report";

interface VehicleUtilizationChartProps {
    data: VehicleUtilizationReport[];
}

export default function VehicleUtilizationChart({
    data,
}: VehicleUtilizationChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Vehicle Utilization
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <BarChart
                            data={data}
                            layout="vertical"
                            margin={{
                                left: 20,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                type="number"
                                domain={[0, 100]}
                            />

                            <YAxis
                                type="category"
                                dataKey="vehicle"
                                width={110}
                            />

                            <Tooltip
                                formatter={(value) => [
                                    `${Number(value)}%`,
                                    "Utilization",
                                ]}
                            />

                            <Bar
                                dataKey="utilization"
                                    fill="#2563EB"
                                radius={[
                                    0,
                                    6,
                                    6,
                                    0,
                                ]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}