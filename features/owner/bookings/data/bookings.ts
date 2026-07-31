import type { Booking } from "../types/booking";

export const bookings: Booking[] = [
  ...Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,

    learnerName: `Learner ${index + 1}`,

    instructorName: `Instructor ${1 + (index % 8)}`,

    vehicleName: [
      "Maruti Swift",
      "Hyundai i20",
      "Tata Punch",
      "Honda Shine",
      "Ashok Leyland Dost",
    ][index % 5],

    lessonType: (["Practical", "Theory", "Test Drive"] as const)[index % 3],

    bookingDate: `2026-${String((index % 12) + 1).padStart(
      2,
      "0",
    )}-${String((index % 28) + 1).padStart(2, "0")}`,

    startTime: ["08:00 AM", "09:30 AM", "11:00 AM", "02:00 PM", "04:00 PM"][
      index % 5
    ],

    endTime: ["09:00 AM", "10:30 AM", "12:00 PM", "03:00 PM", "05:00 PM"][
      index % 5
    ],

    pickupLocation: [
      "City Center",
      "Railway Station",
      "Bus Stand",
      "Airport Road",
      "Main Market",
    ][index % 5],

    status: (["Scheduled", "Ongoing", "Completed", "Cancelled"] as const)[
      index % 4
    ],

    createdAt: `2026-${String((index % 12) + 1).padStart(
      2,
      "0",
    )}-${String((index % 28) + 1).padStart(2, "0")}`,
  })),
];
