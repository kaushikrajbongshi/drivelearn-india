import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import InfoItem from "@/components/common/InfoItem";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import VehicleStatusBadge from "@/features/owner/vehicles/components/VehicleStatusBadge";
import { vehicles } from "@/features/owner/vehicles/data/vehicles";

interface VehicleDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function VehicleDetailsPage({
    params,
}: VehicleDetailsPageProps) {
    const { id } = await params;

    const vehicle = vehicles.find(
        (item) => item.id === Number(id)
    );

    if (!vehicle) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/owner/vehicles" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back to Vehicles
            </Button>

            <DashboardPageHeader
                title={vehicle.name}
                description="Vehicle details and maintenance information."
            />

            <div className="flex flex-wrap items-center gap-3">
                <VehicleStatusBadge
                    status={vehicle.status}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>
                            Vehicle Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="grid gap-6 sm:grid-cols-2">
                        <InfoItem
                            label="Vehicle Name"
                            value={vehicle.name}
                        />

                        <InfoItem
                            label="Registration Number"
                            value={vehicle.registrationNumber}
                        />

                        <InfoItem
                            label="Brand"
                            value={vehicle.brand}
                        />

                        <InfoItem
                            label="Model"
                            value={vehicle.model}
                        />

                        <InfoItem
                            label="Vehicle Type"
                            value={vehicle.type}
                        />

                        <InfoItem
                            label="Transmission"
                            value={vehicle.transmission}
                        />

                        <InfoItem
                            label="Fuel Type"
                            value={vehicle.fuelType}
                        />

                        <InfoItem
                            label="Manufacturing Year"
                            value={String(vehicle.year)}
                        />

                        <InfoItem
                            label="Assigned Instructor"
                            value={vehicle.assignedInstructor}
                        />

                        <InfoItem
                            label="Last Service"
                            value={vehicle.lastServiceDate}
                        />

                        <InfoItem
                            label="Next Service"
                            value={vehicle.nextServiceDate}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Button
                            className="w-full"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/owner/vehicles/${vehicle.id}/edit`}
                                />
                            }
                        >
                            Edit Vehicle
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full"
                        >
                            Schedule Service
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full"
                        >
                            Assign Instructor
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}