import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import VehicleMobileCard from "./VehicleMobileCard";
import VehicleTableRow from "./VehicleTableRow";

import type { Vehicle } from "../types/vehicle";

interface VehicleTableProps {
    vehicles: Vehicle[];
}

export default function VehicleTable({
    vehicles,
}: VehicleTableProps) {
    if (!vehicles.length) {
        return (
            <EmptyState
                title="No vehicles found"
                description="Try adjusting your search or filters."
            />
        );
    }

    return (
        <>
            {/* Mobile */}
            <div className="grid gap-4 lg:hidden">
                {vehicles.map((vehicle) => (
                    <VehicleMobileCard
                        key={vehicle.id}
                        vehicle={vehicle}
                    />
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl p-5 border lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Vehicle</TableHead>
                            <TableHead>Registration</TableHead>
                            <TableHead>Brand / Model</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Transmission</TableHead>
                            <TableHead>Fuel</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Next Service</TableHead>
                            <TableHead className="w-[60px]" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {vehicles.map((vehicle) => (
                            <VehicleTableRow
                                key={vehicle.id}
                                vehicle={vehicle}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}