"use client";

import Link from "next/link";
import {
    Building2,
    CalendarDays,
    MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import TicketPriorityBadge from "./TicketPriorityBadge";
import TicketStatusBadge from "./TicketStatusBadge";

import type { Ticket } from "@/features/support/types/ticket";

interface SupportMobileCardProps {
    ticket: Ticket;
}

export default function SupportMobileCard({
    ticket,
}: SupportMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {ticket.subject}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {ticket.id}
                        </p>
                    </div>

                    <TicketStatusBadge
                        status={ticket.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Building2 className="size-4 text-muted-foreground" />

                        <span>{ticket.schoolName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MessageSquare className="size-4 text-muted-foreground" />

                        <TicketPriorityBadge
                            priority={ticket.priority}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-muted-foreground" />

                        <span>{ticket.createdAt}</span>
                    </div>
                </div>

                <div className="flex justify-end border-t pt-4">
                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/support/${ticket.id}`}
                            />
                        }
                    >
                        View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}