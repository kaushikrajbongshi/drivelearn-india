import { ownerChart } from "../data/chart";
import { ownerQuickActions } from "../data/quick-actions";
import { ownerRecentActivities } from "../data/recent-activity";
import { ownerRecentRegistrations } from "../data/recent-registrations";
import { ownerStats } from "../data/stats";

export function useOwnerDashboard() {
  return {
    stats: ownerStats,
    chart: ownerChart,
    quickActions: ownerQuickActions,
    recentActivities: ownerRecentActivities,
    recentRegistrations: ownerRecentRegistrations,
  };
}