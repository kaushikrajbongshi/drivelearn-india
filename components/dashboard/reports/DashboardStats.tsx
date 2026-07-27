import {
    Building2,
    CreditCard,
    DollarSign,
    GraduationCap,
    UserRoundCog,
    Users,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import type { DashboardStats as DashboardStatsType } from "@/features/admin/reports/types/report";

interface DashboardStatsProps {
    stats: DashboardStatsType;
}

export default function DashboardStats({
    stats,
}: DashboardStatsProps) {
    const cards = [
        {
            title: "Total Users",
            value: stats.totalUsers.toLocaleString(),
            icon: Users,
        },
        {
            title: "Schools",
            value: stats.totalSchools.toLocaleString(),
            icon: Building2,
        },
        {
            title: "Instructors",
            value: stats.totalInstructors.toLocaleString(),
            icon: UserRoundCog,
        },
        {
            title: "Learners",
            value: stats.totalLearners.toLocaleString(),
            icon: GraduationCap,
        },
        {
            title: "Active Plans",
            value: stats.activeSubscriptions.toLocaleString(),
            icon: CreditCard,
        },
        {
            title: "Revenue",
            value: `$${stats.monthlyRevenue.toLocaleString()}`,
            icon: DollarSign,
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <Card key={card.title}>
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl font-bold">
                                    {card.value}
                                </h2>
                            </div>

                            <div className="rounded-lg bg-primary/10 p-3">
                                <Icon className="size-6 text-primary" />
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}