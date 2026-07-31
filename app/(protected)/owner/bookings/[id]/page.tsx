import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import InfoItem from "@/components/common/InfoItem";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import BookingStatusBadge from "@/features/owner/bookings/components/BookingStatusBadge";

import { bookings } from "@/features/owner/bookings/data/bookings";

interface BookingDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookingDetailsPage({
    params,
}: BookingDetailsPageProps) {
    const { id } = await params;

    const booking = bookings.find(
        (item) => item.id === Number(id)
    );

    if (!booking) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/owner/bookings" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={booking.learnerName}
                description="Booking Details"
            />

            <BookingStatusBadge
                status={booking.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Booking Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                label="Learner"
                                value={booking.learnerName}
                            />

                            <InfoItem
                                label="Instructor"
                                value={booking.instructorName}
                            />

                            <InfoItem
                                label="Vehicle"
                                value={booking.vehicleName}
                            />

                            <InfoItem
                                label="Lesson Type"
                                value={booking.lessonType}
                            />

                            <InfoItem
                                label="Booking Date"
                                value={booking.bookingDate}
                            />

                            <InfoItem
                                label="Time"
                                value={`${booking.startTime} - ${booking.endTime}`}
                            />

                            <InfoItem
                                label="Pickup Location"
                                value={booking.pickupLocation}
                            />

                            <InfoItem
                                label="Created"
                                value={booking.createdAt}
                            />
                        </CardContent>
                    </Card>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Button
                            className="w-full justify-start"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/owner/bookings/${booking.id}/edit`}
                                />
                            }
                        >
                            Edit Booking
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}