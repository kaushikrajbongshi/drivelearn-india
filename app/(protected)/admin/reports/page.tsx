import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import ReportsToolbar from "@/components/dashboard/reports/ReportsToolbar";
import DashboardStats from "@/components/dashboard/reports/DashboardStats";
import RevenueChart from "@/components/dashboard/reports/RevenueChart";
import EnrollmentChart from "@/components/dashboard/reports/EnrollmentChart";
import SchoolGrowthChart from "@/components/dashboard/reports/SchoolGrowthChart";
import TopSchoolsTable from "@/components/dashboard/reports/TopSchoolsTable";
import RecentActivities from "@/components/dashboard/reports/RecentActivities";

import {
  dashboardStats,
  enrollmentData,
  recentActivities,
  revenueData,
  schoolGrowthData,
  topSchools,
} from "@/features/admin/reports/data/reports";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Reports & Analytics"
        description="Monitor platform performance and business insights."
      />

      <ReportsToolbar />

      <DashboardStats
        stats={dashboardStats}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueChart
          data={revenueData}
        />

        <EnrollmentChart
          data={enrollmentData}
        />
      </div>

      <SchoolGrowthChart
        data={schoolGrowthData}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <TopSchoolsTable
          schools={topSchools}
        />

        <RecentActivities
          activities={recentActivities}
        />
      </div>
    </div>
  );
}