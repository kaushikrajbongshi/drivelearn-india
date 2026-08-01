"use client";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import type { PaymentStat } from "../types/payment";

interface PaymentStatsProps {
    stats: PaymentStat[];
}

export default function PaymentStats({
    stats,
}: PaymentStatsProps) {
    return (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <DashboardStatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    icon={stat.icon}
                />
            ))}
        </section>
    );
}