import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    Building2,
    CalendarDays,
    MapPinned,
    Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import InfoItem from "@/components/common/InfoItem";

import StateStatusBadge from "@/features/states/components/StateStatusBadge";

import { states } from "@/features/states/data/states";

interface StateDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function StateDetailsPage({
    params,
}: StateDetailsPageProps) {
    const { id } = await params;

    const state = states.find(
        (item) => item.id === id
    );

    if (!state) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/states" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={state.name}
                description="State Details"
            />

            <StateStatusBadge
                status={state.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                State Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<MapPinned className="size-4" />}
                                label="State Name"
                                value={state.name}
                            />

                            <InfoItem
                                icon={<MapPinned className="size-4" />}
                                label="State Code"
                                value={state.code}
                            />

                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="Total Cities"
                                value={state.totalCities.toString()}
                            />

                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="Total Schools"
                                value={state.totalSchools.toString()}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Created"
                                value={state.createdAt}
                            />
                        </CardContent>
                    </Card>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Button
                            className="w-full justify-start"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/admin/states/${state.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit State
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}