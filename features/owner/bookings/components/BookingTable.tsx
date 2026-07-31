import EmptyState from "@/components/common/EmptyState";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import BookingMobileCard from "./BookingMobileCard";
import BookingTableRow from "./BookingTableRow";

import type { Booking } from "../types/booking";

interface BookingTableProps {
  bookings: Booking[];
}

export default function BookingTable({
  bookings,
}: BookingTableProps) {
  if (!bookings.length) {
    return (
      <EmptyState
        title="No bookings found"
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
              <TableHead>Learner</TableHead>

              <TableHead>Instructor</TableHead>

              <TableHead>Vehicle</TableHead>

              <TableHead>Lesson</TableHead>

              <TableHead>Date</TableHead>

              <TableHead>Time</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking) => (
              <BookingTableRow
                key={booking.id}
                booking={booking}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <div className="space-y-4 lg:hidden">
        {bookings.map((booking) => (
          <BookingMobileCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </>
  );
}