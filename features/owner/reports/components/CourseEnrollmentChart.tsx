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

import type { CourseEnrollmentReport } from "../types/report";

interface CourseEnrollmentChartProps {
    data: CourseEnrollmentReport[];
}

export default function CourseEnrollmentChart({
    data,
}: CourseEnrollmentChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Course Enrollments
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
                                dataKey="course"
                            />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="enrollments"
                                fill="#2563EB"
                                radius={[5, 5, 0, 0]}
                                animationDuration={800}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}