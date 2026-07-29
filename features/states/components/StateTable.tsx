"use client";

import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import type { State } from "@/features/states/types/state";

import StateMobileCard from "./StateMobileCard";
import StateTableRow from "./StateTableRow";

interface StateTableProps {
    states: State[];
}

export default function StateTable({
    states,
}: StateTableProps) {
    if (states.length === 0) {
        return (
            <EmptyState
                title="No states found"
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
                            <TableHead>State</TableHead>

                            <TableHead>Code</TableHead>

                            <TableHead>Total Cities</TableHead>

                            <TableHead>Total Schools</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Created</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {states.map((state) => (
                            <StateTableRow
                                key={state.id}
                                state={state}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {states.map((state) => (
                    <StateMobileCard
                        key={state.id}
                        state={state}
                    />
                ))}
            </div>
        </>
    );
}