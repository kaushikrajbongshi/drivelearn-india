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

import CityStatusBadge from "@/features/cities/components/CityStatusBadge";

import { cities } from "@/features/cities/data/cities";

interface CityDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function CityDetailsPage({
    params,
}: CityDetailsPageProps) {
    const { id } = await params;

    const city = cities.find(
        (item) => item.id === id
    );

    if (!city) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/cities" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={city.name}
                description="City Details"
            />

            <CityStatusBadge
                status={city.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                City Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<MapPinned className="size-4" />}
                                label="City"
                                value={city.name}
                            />

                            <InfoItem
                                icon={<MapPinned className="size-4" />}
                                label="State"
                                value={city.stateName}
                            />

                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="Total Schools"
                                value={city.totalSchools.toString()}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Created"
                                value={city.createdAt}
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
                                    href={`/admin/cities/${city.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit City
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}