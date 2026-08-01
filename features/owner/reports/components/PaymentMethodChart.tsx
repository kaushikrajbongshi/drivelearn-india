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

import type { PaymentMethodReport } from "../types/report";

interface PaymentMethodChartProps {
    data: PaymentMethodReport[];
}

const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
];

export default function PaymentMethodChart({
    data,
}: PaymentMethodChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Payment Methods
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
                                nameKey="method"
                                cx="50%"
                                cy="42%"
                                innerRadius="45%"
                                outerRadius="70%"
                                label={({ percent }) =>
                                    `${(
                                        (percent ?? 0) *
                                        100
                                    ).toFixed(0)}%`
                                }
                            >
                                {data.map(
                                    (
                                        _,
                                        index
                                    ) => (
                                        <Cell
                                            key={index}
                                            fill={
                                                COLORS[
                                                    index %
                                                        COLORS.length
                                                ]
                                            }
                                        />
                                    )
                                )}
                            </Pie>

                            <Tooltip
                                formatter={(
                                    value
                                ) => [
                                    Number(value),
                                    "Transactions",
                                ]}
                            />

                            <Legend
                                align="center"
                                verticalAlign="bottom"
                                layout="horizontal"
                                wrapperStyle={{
                                    paddingTop: 20,
                                    fontSize: 13,
                                }}
                                formatter={(
                                    value
                                ) => {
                                    const item =
                                        data.find(
                                            (
                                                d
                                            ) =>
                                                d.method ===
                                                value
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