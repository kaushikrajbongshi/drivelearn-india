"use client";

import {
    Building2,
    Car,
    Users,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface SchoolStatsProps {
    stats: {
        branches: number;
        instructors: number;
        learners: number;
        vehicles: number;
    };
}

export default function SchoolStats({
    stats,
}: SchoolStatsProps) {
    return (
        <Card>
            <CardContent className="grid grid-cols-2 p-3">
                <StatItem
                    icon={<Building2 className="size-5" />}
                    label="Branches"
                    value={stats.branches}
                    className="border-r border-b"
                />

                <StatItem
                    icon={<Users className="size-5" />}
                    label="Instructors"
                    value={stats.instructors}
                    className="border-b"
                />

                <StatItem
                    icon={<Users className="size-5" />}
                    label="Learners"
                    value={stats.learners}
                    className="border-r"
                />

                <StatItem
                    icon={<Car className="size-5" />}
                    label="Vehicles"
                    value={stats.vehicles}
                />
            </CardContent>
        </Card>
    );
}

interface StatItemProps {
    icon: React.ReactNode;
    label: string;
    value: number;
    className?: string;
}

function StatItem({
    icon,
    label,
    value,
    className,
}: StatItemProps) {
    return (
        <div
            className={`flex items-center gap-3 p-2 ${className ?? ""}`}
        >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-xl font-semibold">
                    {value}
                </p>

                <p className="text-xs text-muted-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}