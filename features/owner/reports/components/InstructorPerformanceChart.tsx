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

import type { InstructorPerformanceReport } from "../types/report";

interface InstructorPerformanceChartProps {
    data: InstructorPerformanceReport[];
}

export default function InstructorPerformanceChart({
    data,
}: InstructorPerformanceChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Instructor Performance
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer
                        width="90%"
                        height="100%"
                    >
                        <BarChart data={data}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="instructor"
                            />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="learners"
                                fill="#2563EB"
                                radius={[
                                    6,
                                    6,
                                    0,
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