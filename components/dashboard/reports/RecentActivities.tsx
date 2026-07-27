import {
    Activity,
    Building2,
    CreditCard,
    GraduationCap,
    UserRoundCog,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import type {
    Activity as ReportActivity,
} from "@/features/admin/reports/types/report";

interface RecentActivitiesProps {
    activities: ReportActivity[];
}

const activityIcons = [
    Building2,
    CreditCard,
    UserRoundCog,
    GraduationCap,
];

export default function RecentActivities({
    activities,
}: RecentActivitiesProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Recent Activities
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-5">
                    {activities.map((activity, index) => {
                        const Icon =
                            activityIcons[index % activityIcons.length];

                        return (
                            <div
                                key={activity.id}
                                className="flex items-start gap-4"
                            >
                                <div className="rounded-lg bg-primary/10 p-2">
                                    <Icon className="size-4 text-primary" />
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-medium">
                                        {activity.title}
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        {activity.description}
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {activities.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <Activity className="mb-3 size-8 text-muted-foreground" />

                            <p className="text-muted-foreground">
                                No recent activities.
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}