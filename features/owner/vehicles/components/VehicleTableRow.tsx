import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import VehicleActions from "./VehicleActions";
import VehicleStatusBadge from "./VehicleStatusBadge";

import type { Vehicle } from "../types/vehicle";

interface VehicleTableRowProps {
    vehicle: Vehicle;
}

export default function VehicleTableRow({
    vehicle,
}: VehicleTableRowProps) {
    return (
        <TableRow>
            <TableCell>
                <Link
                    href={`/owner/vehicles/${vehicle.id}`}
                    className="font-medium hover:underline"
                >
                    {vehicle.name}
                </Link>
            </TableCell>

            <TableCell>
                {vehicle.registrationNumber}
            </TableCell>

            <TableCell>
                {vehicle.brand} {vehicle.model}
            </TableCell>

            <TableCell>{vehicle.type}</TableCell>

            <TableCell>
                {vehicle.transmission}
            </TableCell>

            <TableCell>{vehicle.fuelType}</TableCell>

            <TableCell>
                {vehicle.assignedInstructor}
            </TableCell>

            <TableCell>
                <VehicleStatusBadge
                    status={vehicle.status}
                />
            </TableCell>

            <TableCell>
                {vehicle.nextServiceDate}
            </TableCell>

            <TableCell className="text-right">
                <VehicleActions
                    vehicle={vehicle}
                />
            </TableCell>
        </TableRow>
    );
}