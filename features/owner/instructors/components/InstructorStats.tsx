"use client";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import type { InstructorStat } from "../types/instructor";

interface InstructorStatsProps {
    stats: InstructorStat[];
}

export default function InstructorStats({
    stats,
}: InstructorStatsProps) {
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