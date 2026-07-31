import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Button } from "@/components/ui/button";

import EditVehicleForm from "@/features/owner/vehicles/components/EditVehicleForm";
import { vehicles } from "@/features/owner/vehicles/data/vehicles";

interface EditVehiclePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditVehiclePage({
    params,
}: EditVehiclePageProps) {
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
                render={
                    <Link
                        href={`/owner/vehicles/${vehicle.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back to Details
            </Button>

            <DashboardPageHeader
                title={`Edit ${vehicle.name}`}
                description="Update vehicle information."
            />

            <EditVehicleForm
                vehicle={vehicle}
            />
        </div>
    );
}