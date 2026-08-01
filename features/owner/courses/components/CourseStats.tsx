"use client";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import type { CourseStat } from "../types/course";

interface CourseStatsProps {
    stats: CourseStat[];
}

export default function CourseStats({
    stats,
}: CourseStatsProps) {
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