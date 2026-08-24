import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import TodaysLessons from "@/features/instructors/dashboard/components/TodaysLessons";
import { instructorStats } from "@/features/instructors/dashboard/data/stats";

export default function InstructorDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Good morning, Bikash"
        description="Here's your day at SafeDrive"
      />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {instructorStats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </section>

      <TodaysLessons />
    </div>
  );
}