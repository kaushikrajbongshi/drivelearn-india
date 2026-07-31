import Link from "next/link";

import {
    TableCell,
    TableRow,
} from "@/components/ui/table";

import BookingActions from "./BookingActions";
import BookingStatusBadge from "./BookingStatusBadge";

import type { Booking } from "../types/booking";

interface BookingTableRowProps {
    booking: Booking;
}

export default function BookingTableRow({
    booking,
}: BookingTableRowProps) {
    return (
        <TableRow>
            <TableCell>
                <Link
                    href={`/owner/bookings/${booking.id}`}
                    className="font-medium hover:underline"
                >
                    {booking.learnerName}
                </Link>
            </TableCell>

            <TableCell>
                {booking.instructorName}
            </TableCell>

            <TableCell>
                {booking.vehicleName}
            </TableCell>

            <TableCell>
                {booking.lessonType}
            </TableCell>

            <TableCell>
                {booking.bookingDate}
            </TableCell>

            <TableCell>
                {booking.startTime} - {booking.endTime}
            </TableCell>

            <TableCell>
                <BookingStatusBadge
                    status={booking.status}
                />
            </TableCell>

            <TableCell align="right">
                <BookingActions
                    booking={booking}
                />
            </TableCell>
        </TableRow>
    );
}