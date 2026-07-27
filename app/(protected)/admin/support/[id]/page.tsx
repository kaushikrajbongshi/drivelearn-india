import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    Building2,
    CalendarDays,
    MessageSquare,
    Pencil,
    Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import InfoItem from "@/components/common/InfoItem";

import TicketPriorityBadge from "@/components/dashboard/support/TicketPriorityBadge";
import TicketStatusBadge from "@/components/dashboard/support/TicketStatusBadge";
import TicketReplyForm from "@/components/dashboard/support/TicketReplyForm";

import { tickets } from "@/features/admin/support/data/tickets";

interface TicketDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function TicketDetailsPage({
    params,
}: TicketDetailsPageProps) {
    const { id } = await params;

    const ticket = tickets.find(
        (item) => item.id === id
    );

    if (!ticket) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/support" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={ticket.subject}
                description="Support Ticket Details"
            />

            <div className="flex flex-wrap gap-2">
                <TicketPriorityBadge
                    priority={ticket.priority}
                />

                <TicketStatusBadge
                    status={ticket.status}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Ticket Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<MessageSquare className="size-4" />}
                                label="Subject"
                                value={ticket.subject}
                            />

                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="School"
                                value={ticket.schoolName}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Created"
                                value={ticket.createdAt}
                            />

                            <InfoItem
                                icon={<Clock className="size-4" />}
                                label="Updated"
                                value={ticket.updatedAt}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Message
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="leading-7 text-muted-foreground">
                                {ticket.message}
                            </p>
                        </CardContent>
                    </Card>

                    <TicketReplyForm />
                </div>

                {/* Right */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Button className="w-full justify-start">
                            <Pencil className="mr-2 size-4" />
                            Mark as Resolved
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}