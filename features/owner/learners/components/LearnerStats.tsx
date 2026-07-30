"use client";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import type { LearnerStat } from "@/features/owner/learners/types/learner";

interface LearnerStatsProps {
    stats: LearnerStat[];
}

export default function LearnerStats({
    stats,
}: LearnerStatsProps) {
    return (
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-4">
            {stats.map((stat) => (
                <DashboardStatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    icon={stat.icon}
                />
            ))}
        </div>
    );
}