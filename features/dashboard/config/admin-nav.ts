import type { NavItem } from "../types/nav";

export const adminNav: NavItem[] = [
 
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: "layout-dashboard",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: "users",
  },
  {
    title: "Schools",
    url: "/admin/schools",
    icon: "graduation-cap",
  },
  {
    title: "States",
    url: "/admin/states",
    icon: "map",
  },
  {
    title: "Cities",
    url: "/admin/cities",
    icon: "map-pinned",
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: "file-text",
  },
  {
    title: "Subscriptions",
    url: "/admin/subscriptions",
    icon: "credit-card",
  },
  {
    title: "Support",
    url: "/admin/support",
    icon: "headset",
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: "settings",
  },
];
