import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import BookingStatusBadge from "./BookingStatusBadge";

import type { Booking } from "../types/booking";

interface BookingMobileCardProps {
    booking: Booking;
}

export default function BookingMobileCard({
    booking,
}: BookingMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <Link
                            href={`/owner/bookings/${booking.id}`}
                            className="font-semibold hover:underline"
                        >
                            {booking.learnerName}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            {booking.bookingDate}
                        </p>
                    </div>

                    <BookingStatusBadge
                        status={booking.status}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">
                            Instructor
                        </p>

                        <p>{booking.instructorName}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Vehicle
                        </p>

                        <p>{booking.vehicleName}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Lesson Type
                        </p>

                        <p>{booking.lessonType}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Time
                        </p>

                        <p>
                            {booking.startTime} - {booking.endTime}
                        </p>
                    </div>

                    <div className="col-span-2">
                        <p className="text-muted-foreground">
                            Pickup Location
                        </p>

                        <p>{booking.pickupLocation}</p>
                    </div>
                </div>

                <Button
                    className="w-full"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/bookings/${booking.id}`}
                        />
                    }
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}