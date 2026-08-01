import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentRegistrations from "@/components/dashboard/RecentRegistrations";

import { useOwnerDashboard } from "@/features/owner/dashboard/hooks/useOwnerDashboard";

export default function OwnerDashboardPage() {
  const {
    stats,
    chart,
    quickActions,
    recentActivities,
    recentRegistrations,
  } = useOwnerDashboard();

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Owner Dashboard"
        description="Monitor your driving school's performance and daily operations."
      />

      {/* Statistics */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Chart + Quick Actions */}
      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardChart
            title={chart.title}
            subtitle={chart.subtitle}
            badge={chart.badge}
          />
        </div>

        <QuickActions
          actions={quickActions}
          buttonText="New Action"
        />
      </section>

      {/* Bottom Section */}
      <section className="grid gap-6 xl:grid-cols-2">
        <RecentRegistrations registrations={recentRegistrations} />
        <RecentActivity activities={recentActivities} />
      </section>
    </div>
  );
}

