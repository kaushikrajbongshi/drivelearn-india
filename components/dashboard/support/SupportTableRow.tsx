"use client";

import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import TicketPriorityBadge from "./TicketPriorityBadge";
import TicketStatusBadge from "./TicketStatusBadge";
import SupportActions from "./SupportActions";

import type { Ticket } from "@/features/admin/support/types/ticket";

interface SupportTableRowProps {
    ticket: Ticket;
}

export default function SupportTableRow({
    ticket,
}: SupportTableRowProps) {
    return (
        <TableRow>
            {/* Ticket */}
            <TableCell>
                <Link
                    href={`/admin/support/${ticket.id}`}
                    className="font-medium hover:underline"
                >
                    {ticket.subject}
                </Link>

                <p className="text-sm text-muted-foreground">
                    {ticket.id}
                </p>
            </TableCell>

            {/* School */}
            <TableCell>
                {ticket.schoolName}
            </TableCell>

            {/* Priority */}
            <TableCell>
                <TicketPriorityBadge
                    priority={ticket.priority}
                />
            </TableCell>

            {/* Status */}
            <TableCell>
                <TicketStatusBadge
                    status={ticket.status}
                />
            </TableCell>

            {/* Created */}
            <TableCell>
                {ticket.createdAt}
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
                <SupportActions
                    ticket={ticket}
                />
            </TableCell>
        </TableRow>
    );
}