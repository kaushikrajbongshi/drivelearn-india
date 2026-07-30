import { ActionItem } from "@/components/dashboard/QuickActions";

export const ownerQuickActions: ActionItem[] = [
  {
    title: "Add Learner",
    description: "Register a new learner",
    href: "/owner/learners/new",
    icon: "manageUsers",
  },
  {
    title: "Add Instructor",
    description: "Register a new instructor",
    href: "/owner/instructors/new",
    icon: "users",
  },
  {
    title: "Schedule Lesson",
    description: "Create a new lesson booking",
    href: "/owner/bookings/new",
    icon: "calendar",
  },
  {
    title: "Add Vehicle",
    description: "Register a training vehicle",
    href: "/owner/vehicles/new",
    icon: "car",
  },
];