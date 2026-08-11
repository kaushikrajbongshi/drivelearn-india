import type { DashboardData } from "../types/types";
// TODO: replace with getDashboardData() API call
export function getDashboardData(): DashboardData {
  return {
    learnerName: "Suman",
    todayLesson: {
      time: "10:30 AM",
      title: "Driving Practice",
      status: "confirmed",
      instructorName: "Rahul Sharma",
      vehicleName: "Hyundai i20",
    },
    upcomingLesson: {
      dayLabel: "Tomorrow",
      time: "10:30 AM",
      title: "Driving Practice",
      instructorName: "Rahul Sharma",
      vehicleName: "Hyundai i20",
    },
    progress: {
      percentage: 65,
      lessonsCompleted: 13,
      lessonsTotal: 20,
      practicalCompleted: 8,
      practicalTotal: 12,
      theoryCompleted: 5,
      theoryTotal: 8,
    },
    instructor: {
      name: "Rahul Sharma",
      role: "Driving Instructor",
      rating: 4.8,
      reviewCount: 128,
    },
    vehicle: {
      name: "Hyundai i20",
      transmission: "Manual",
      category: "LMV",
    },
    announcements: [
      {
        id: "1",
        title: "Holiday schedule updated",
        timeAgo: "2 hours ago",
        variant: "info",
      },
      {
        id: "2",
        title: "10% off additional lessons",
        timeAgo: "1 day ago",
        variant: "offer",
      },
    ],
  };
}