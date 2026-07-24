import type { NavItem } from "../types/nav";

export const learnerNav: NavItem[] = [
  {
    title: "Dashboard",
    url: "/learner/dashboard",
    icon: "layout-dashboard",
  },
  {
    title: "Schools",
    url: "/learner/schools",
    icon: "graduation-cap",
  },
  {
    title: "My Bookings",
    url: "/learner/bookings",
    icon: "calendar-check",
  },
  {
    title: "Profile",
    url: "/learner/profile",
    icon: "user",
  },
  {
    title: "Notifications",
    url: "/learner/notifications",
    icon: "bell",
    badge: "3",
  },
  {
    title: "Settings",
    url: "/learner/settings",
    icon: "settings",
  },
];