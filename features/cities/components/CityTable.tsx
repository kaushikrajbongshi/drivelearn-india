"use client";

import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import type { City } from "@/features/cities/types/city";

import CityMobileCard from "./CityMobileCard";
import CityTableRow from "./CityTableRow";

interface CityTableProps {
    cities: City[];
}

export default function CityTable({
    cities,
}: CityTableProps) {
    if (cities.length === 0) {
        return (
            <EmptyState
                title="No cities found"
                description="Try adjusting your search or filters."
            />
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>City</TableHead>

                            <TableHead>State</TableHead>

                            <TableHead>Total Schools</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Created</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {cities.map((city) => (
                            <CityTableRow
                                key={city.id}
                                city={city}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {cities.map((city) => (
                    <CityMobileCard
                        key={city.id}
                        city={city}
                    />
                ))}
            </div>
        </>
    );
}