"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    dashboardIcons,
    type DashboardIcon,
} from "@/features/dashboard/config/dashboard-icons";

export interface Registration {
    id: number;
    name: string;
    email: string;
    role: "Learner" | "School";
    status: "Pending" | "Approved" | "Reject";
    avatar?: string;
}

interface RecentRegistrationsProps {
    registrations: Registration[];
}

const roleIcons: Record<Registration["role"], DashboardIcon> = {
    Learner: "learners",
    School: "schools",
};

export default function RecentRegistrations({
    registrations,
}: RecentRegistrationsProps) {
    const MoreIcon = dashboardIcons.more;

    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Registrations</CardTitle>

                <Button variant="ghost" size="icon">
                    <MoreIcon className="size-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-4">
                {registrations.map((user) => {
                    const RoleIcon = dashboardIcons[roleIcons[user.role]];

                    return (
                        <div
                            key={user.id}
                            className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <Avatar className="size-10 shrink-0">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>
                                        {user.name
                                            .split(" ")
                                            .map((w) => w[0])
                                            .join("")
                                            .slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="min-w-0">
                                    <p className="truncate font-medium">{user.name}</p>

                                    <p className="truncate text-sm text-muted-foreground">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                <Badge variant="outline" className="gap-1">
                                    <RoleIcon className="size-3.5" />
                                    {user.role}
                                </Badge>

                                <Badge
                                    variant={
                                        user.status === "Approved"
                                            ? "default"
                                            : user.status === "Reject"
                                                ? "destructive"
                                                : "secondary"
                                    }
                                >
                                    {user.status}
                                </Badge>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}