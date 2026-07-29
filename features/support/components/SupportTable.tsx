"use client";

import type { Ticket } from "@/features/support/types/ticket";

import SupportTableRow from "./SupportTableRow";
import SupportMobileCard from "./SupportMobileCard";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface SupportTableProps {
    tickets: Ticket[];
}

export default function SupportTable({
    tickets,
}: SupportTableProps) {
    if (tickets.length === 0) {
        return (
            <div className="rounded-xl border p-12 text-center">
                <h3 className="text-lg font-semibold">
                    No support tickets found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or filters.
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-xl border p-5 lg:block">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Ticket</TableHead>

                            <TableHead>School</TableHead>

                            <TableHead>Priority</TableHead>

                            <TableHead>Status</TableHead>

                            <TableHead>Created</TableHead>

                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tickets.map((ticket) => (
                            <SupportTableRow
                                key={ticket.id}
                                ticket={ticket}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 lg:hidden">
                {tickets.map((ticket) => (
                    <SupportMobileCard
                        key={ticket.id}
                        ticket={ticket}
                    />
                ))}
            </div>
        </>
    );
}