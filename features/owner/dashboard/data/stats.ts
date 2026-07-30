import type { DashboardStatCardProps } from "@/components/dashboard/DashboardStatCard";

export const ownerStats: DashboardStatCardProps[] = [
  {
    title: "Total Learners",
    value: "248",
    description: "Currently Enrolled",
    icon: "learners",
    trend: {
      value: "+12",
      positive: true,
    },
  },
  {
    title: "Active Instructors",
    value: "14",
    description: "Available Today",
    icon: "users",
    trend: {
      value: "+2",
      positive: true,
    },
  },
  {
    title: "Today's Bookings",
    value: "32",
    description: "Scheduled Lessons",
    icon: "schools",
    trend: {
      value: "+6",
      positive: true,
    },
  },
  {
    title: "Revenue",
    value: "$8,420",
    description: "This Month",
    icon: "revenue",
    trend: {
      value: "+9.4%",
      positive: true,
    },
  },
];
