import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import VehicleStatusBadge from "./VehicleStatusBadge";

import type { Vehicle } from "../types/vehicle";

interface VehicleMobileCardProps {
    vehicle: Vehicle;
}

export default function VehicleMobileCard({
    vehicle,
}: VehicleMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <Link
                            href={`/owner/vehicles/${vehicle.id}`}
                            className="font-semibold hover:underline"
                        >
                            {vehicle.name}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            {vehicle.registrationNumber}
                        </p>
                    </div>

                    <VehicleStatusBadge
                        status={vehicle.status}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">
                            Brand
                        </p>
                        <p>
                            {vehicle.brand} {vehicle.model}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Type
                        </p>
                        <p>{vehicle.type}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Transmission
                        </p>
                        <p>{vehicle.transmission}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Fuel
                        </p>
                        <p>{vehicle.fuelType}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Instructor
                        </p>
                        <p>{vehicle.assignedInstructor}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Next Service
                        </p>
                        <p>{vehicle.nextServiceDate}</p>
                    </div>
                </div>

                <Button
                    className="w-full"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/vehicles/${vehicle.id}`}
                        />
                    }
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}