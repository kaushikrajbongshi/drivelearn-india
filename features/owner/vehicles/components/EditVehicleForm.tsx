"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import VehicleForm from "./VehicleForm";

import type { Vehicle } from "../types/vehicle";

interface EditVehicleFormProps {
    vehicle: Vehicle;
}

export default function EditVehicleForm({
    vehicle,
}: EditVehicleFormProps) {
    const router = useRouter();

    const handleSubmit = (
        values: Partial<Vehicle>
    ) => {
        console.log(values);

        router.push(
            `/owner/vehicles/${vehicle.id}`
        );
    };

    return (
        <Card>
            <VehicleForm
                defaultValues={vehicle}
                onSubmit={handleSubmit}
                submitLabel="Save Changes"
            />
        </Card>
    );
}