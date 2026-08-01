import { DashboardIcon } from "@/config/dashboard-icons";

export type BookingStatus = "Scheduled" | "Ongoing" | "Completed" | "Cancelled";

export type LessonType = "Practical" | "Theory" | "Test Drive";

export interface Booking {
  id: number;

  learnerName: string;

  instructorName: string;

  vehicleName: string;

  lessonType: LessonType;

  bookingDate: string;

  startTime: string;

  endTime: string;

  pickupLocation: string;

  status: BookingStatus;

  createdAt: string;
}

export interface BookingStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface BookingFilter {
  label: string;
  value: string;
}
