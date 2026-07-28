"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import CityActions from "./CityActions";
import CityStatusBadge from "./CityStatusBadge";

import type { City } from "@/features/admin/cities/types/city";

interface CityTableRowProps {
    city: City;
}

export default function CityTableRow({
    city,
}: CityTableRowProps) {
    return (
        <TableRow>
            {/* City */}
            <TableCell>
                <Link
                    href={`/admin/cities/${city.id}`}
                    className="font-medium hover:underline"
                >
                    {city.name}
                </Link>
            </TableCell>

            {/* State */}
            <TableCell>
                {city.stateName}
            </TableCell>

            {/* Schools */}
            <TableCell>
                {city.totalSchools}
            </TableCell>

            {/* Status */}
            <TableCell>
                <CityStatusBadge
                    status={city.status}
                />
            </TableCell>

            {/* Created */}
            <TableCell>
                {city.createdAt}
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <CityActions
                    city={city}
                />
            </TableCell>
        </TableRow>
    );
}