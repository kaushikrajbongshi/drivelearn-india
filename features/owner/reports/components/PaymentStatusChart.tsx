"use client";

import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import type { PaymentStatusReport } from "../types/report";

interface PaymentStatusChartProps {
    data: PaymentStatusReport[];
}

const COLORS = [
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#3B82F6",
];

export default function PaymentStatusChart({
    data,
}: PaymentStatusChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Payment Status
                </CardTitle>
            </CardHeader>

<CardContent>
    <div className="h-[420px] sm:h-80">
        <ResponsiveContainer
            width="100%"
            height="100%"
        >
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="40%"
                    innerRadius="45%"
                    outerRadius="68%"
                    label={({ percent }) =>
                        `${(
                            (percent ?? 0) * 100
                        ).toFixed(0)}%`
                    }
                    labelLine
                >
                    {data.map((_, index) => (
                        <Cell
                            key={index}
                            fill={
                                COLORS[
                                    index %
                                        COLORS.length
                                ]
                            }
                        />
                    ))}
                </Pie>

                <Tooltip
                    formatter={(value) => [
                        Number(value),
                        "Transactions",
                    ]}
                />

                <Legend
                    align="center"
                    verticalAlign="bottom"
                    layout="horizontal"
                    iconType="circle"
                    wrapperStyle={{
                        paddingTop: 24,
                        fontSize: 12,
                        lineHeight: "22px",
                    }}
                    formatter={(value) => {
                        const item = data.find(
                            (d) =>
                                d.status === value
                        );

                        return `${value} (${item?.count ?? 0})`;
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    </div>
</CardContent>
        </Card>
    );
}