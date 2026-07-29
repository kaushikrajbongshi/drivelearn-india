import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import ReportsToolbar from "@/features/reports/components/ReportsToolbar";
import DashboardStats from "@/features/reports/components/DashboardStats";
import RevenueChart from "@/features/reports/components/RevenueChart";
import EnrollmentChart from "@/features/reports/components/EnrollmentChart";
import SchoolGrowthChart from "@/features/reports/components/SchoolGrowthChart";
import TopSchoolsTable from "@/features/reports/components/TopSchoolsTable";
import RecentActivities from "@/features/reports/components/RecentActivities";

import {
  dashboardStats,
  enrollmentData,
  recentActivities,
  revenueData,
  schoolGrowthData,
  topSchools,
} from "@/features/reports/data/reports";

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