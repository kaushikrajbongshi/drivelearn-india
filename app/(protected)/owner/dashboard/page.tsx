import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import OwnerStats from "@/components/dashboard/owner/OwnerStats";
import EnrollmentChart from "@/components/dashboard/owner/EnrollmentChart";
import RevenueChart from "@/components/dashboard/owner/RevenueChart";
import RecentLearners from "@/components/dashboard/owner/RecentLearners";
import UpcomingLessons from "@/components/dashboard/owner/UpcomingLessons";
import QuickActions from "@/components/dashboard/owner/QuickActions";

export default function OwnerDashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your driving school."
      />

      <OwnerStats />

      <div className="grid gap-6 xl:grid-cols-2">
        <EnrollmentChart />
        <RevenueChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentLearners />
        <UpcomingLessons />
      </div>

      <QuickActions />
    </div>
  );
}