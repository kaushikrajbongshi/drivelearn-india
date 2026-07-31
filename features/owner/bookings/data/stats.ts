import type { BookingStat } from "../types/booking";

export const bookingStats: BookingStat[] = [
  {
    title: "Total Bookings",
    value: "248",
    description: "All scheduled lessons",
    icon: "booking",
  },
  {
    title: "Today's Lessons",
    value: "18",
    description: "Scheduled for today",
    icon: "calendar",
  },
  {
    title: "Completed",
    value: "192",
    description: "Lessons completed",
    icon: "clipboardCheck",
  },
  {
    title: "Cancelled",
    value: "14",
    description: "Cancelled bookings",
    icon: "cancel",
  },
];
