import { ActionItem } from "@/components/dashboard/QuickActions";

export const adminQuickActions: ActionItem[] = [
  {
    title: "Add School",
    description: "Register a new driving school",
    href: "/admin/schools/new",
    icon: "building",
  },
  {
    title: "Verify Schools",
    description: "Review pending school approvals",
    href: "/admin/schools",
    icon: "verify",
  },
  {
    title: "Manage Users",
    description: "View learners & instructors",
    href: "/admin/users",
    icon: "manageUsers",
  },
  {
    title: "Generate Report",
    description: "Create platform reports",
    href: "/admin/reports",
    icon: "report",
  },
];