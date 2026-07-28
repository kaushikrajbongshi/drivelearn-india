"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import StateActions from "./StateActions";
import StateStatusBadge from "./StateStatusBadge";

import type { State } from "@/features/admin/states/types/state";

interface StateTableRowProps {
    state: State;
}

export default function StateTableRow({
    state,
}: StateTableRowProps) {
    return (
        <TableRow>
            {/* State */}
            <TableCell>
                <Link
                    href={`/admin/states/${state.id}`}
                    className="font-medium hover:underline"
                >
                    {state.name}
                </Link>
            </TableCell>

            {/* Code */}
            <TableCell>
                {state.code}
            </TableCell>

            {/* Cities */}
            <TableCell>
                {state.totalCities}
            </TableCell>

            {/* Schools */}
            <TableCell>
                {state.totalSchools}
            </TableCell>

            {/* Status */}
            <TableCell>
                <StateStatusBadge
                    status={state.status}
                />
            </TableCell>

            {/* Created */}
            <TableCell>
                {state.createdAt}
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <StateActions
                    state={state}
                />
            </TableCell>
        </TableRow>
    );
}