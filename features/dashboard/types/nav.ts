import { sidebarIcons } from "../config/sidebar-icons";

export type SidebarIcon = keyof typeof sidebarIcons;

export interface NavItem {
  title: string;
  url: string;
  icon: SidebarIcon;
  badge?: string;
  items?: NavItem[];
}