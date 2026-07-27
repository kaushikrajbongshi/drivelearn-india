"use client";

import Link from "next/link";
import {
    CheckCircle2,
    Eye,
    MessageSquare,
    MoreHorizontal,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Ticket } from "@/features/admin/support/types/ticket";

interface SupportActionsProps {
    ticket: Ticket;
}

export default function SupportActions({
    ticket,
}: SupportActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                    />
                }
            >
                <MoreHorizontal className="size-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/support/${ticket.id}`}
                        />
                    }
                >
                    <Eye className="mr-2 size-4" />
                    View Ticket
                </DropdownMenuItem>

                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/support/${ticket.id}`}
                        />
                    }
                >
                    <MessageSquare className="mr-2 size-4" />
                    Reply
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <CheckCircle2 className="mr-2 size-4" />
                    Mark as Resolved
                </DropdownMenuItem>

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete Ticket
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}