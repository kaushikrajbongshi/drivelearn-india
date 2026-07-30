import type { InstructorStat } from "../types/instructor";

export const instructorStats: InstructorStat[] = [
  {
    title: "Total Instructors",
    value: "42",
    description: "Across all branches",
    icon: "instructors",
  },
  {
    title: "Active Instructors",
    value: "36",
    description: "Currently teaching",
    icon: "active",
  },
  {
    title: "On Leave",
    value: "3",
    description: "Temporarily unavailable",
    icon: "calendar",
  },
  {
    title: "Average Rating",
    value: "4.8",
    description: "Based on learner feedback",
    icon: "star",
  },
];