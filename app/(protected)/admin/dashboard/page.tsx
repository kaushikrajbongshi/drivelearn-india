import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentRegistrations from "@/components/dashboard/RecentRegistrations";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your platform."
      />

      {/* Statistics */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total Users"
          value="12,540"
          description="Across all roles"
          icon="users"
          trend={{
            value: "+12.8%",
            positive: true,
          }}
        />

        <DashboardStatCard
          title="Driving Schools"
          value="1,284"
          description="Verified & Active"
          icon="schools"
          trend={{
            value: "+4.2%",
            positive: true,
          }}
        />

        <DashboardStatCard
          title="Learners"
          value="9,842"
          description="Registered Learners"
          icon="learners"
          trend={{
            value: "+18.6%",
            positive: true,
          }}
        />

        <DashboardStatCard
          title="Revenue"
          value="$24,860"
          description="This Month"
          icon="revenue"
          trend={{
            value: "+8.3%",
            positive: true,
          }}
        />
      </section>

      {/* Chart + Quick Actions */}
      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardChart
            title="Revenue Overview"
            subtitle="Monthly platform revenue"
            badge="Last 30 Days"
          />
        </div>

        <QuickActions />
      </section>

      {/* Bottom */}
      <section className="grid gap-6 xl:grid-cols-2">
        <RecentRegistrations />
        <RecentActivity />
      </section>
    </div>
  );
}