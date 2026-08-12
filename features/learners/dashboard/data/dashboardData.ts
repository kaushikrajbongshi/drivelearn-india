import type { DashboardData } from "../types/dashboard";

export const dashboardData: DashboardData = {
  learnerName: "Ananya",

  nextLesson: {
    type: "City Roads",
    date: "THU 6 AUG",
    time: "7:30 AM",
    duration: "45 min",
    pickup: "Ganeshguri Circle, Guwahati",

    instructor: {
      name: "Rakesh Sharma",
      rating: 4.8,
      lessonsCompleted: 340,
    },
  },

  routeStages: [
    {
      label: "Enrolled",
      status: "done",
    },
    {
      label: "Yard",
      status: "done",
    },
    {
      label: "City Roads",
      status: "current",
    },
    {
      label: "Highway",
      status: "upcoming",
    },
    {
      label: "Test Ready",
      status: "upcoming",
    },
  ],

  trainingProgress: {
    hoursCompleted: 14,
    hoursTotal: 20,
    lessonsCompleted: 11,
    lessonsTotal: 16,
  },

  package: {
    name: "Complete Course – Sedan",
    sessionsLeft: 5,
    sessionsTotal: 16,
    expiresIn: "12 days",
  },
};
