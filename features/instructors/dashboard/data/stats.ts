import type { DashboardStatCardProps } from "@/components/dashboard/DashboardStatCard";

export const instructorStats: DashboardStatCardProps[] = [
  {
    title: "Assigned Learners",
    value: "24",
    description: "Currently Assigned",
    icon: "learners",
    trend: {
      value: "+4",
      positive: true,
    },
  },
  {
    title: "Today's Lessons",
    value: "5",
    description: "Scheduled Today",
    icon: "calendar",
    trend: {
      value: "+2",
      positive: true,
    },
  },
  {
    title: "Completed Lessons",
    value: "86",
    description: "This Month",
    icon: "schools",
    trend: {
      value: "+12",
      positive: true,
    },
  },
  {
    title: "Training Hours",
    value: "42.5",
    description: "This Month",
    icon: "revenue",
    trend: {
      value: "+8.2%",
      positive: true,
    },
  },
];
