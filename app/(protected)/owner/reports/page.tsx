import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import ReportStats from "@/features/owner/reports/components/ReportStats";
import RevenueChart from "@/features/owner/reports/components/RevenueChart";
import PaymentMethodChart from "@/features/owner/reports/components/PaymentMethodChart";
import PaymentStatusChart from "@/features/owner/reports/components/PaymentStatusChart";
import CourseEnrollmentChart from "@/features/owner/reports/components/CourseEnrollmentChart";
import InstructorPerformanceChart from "@/features/owner/reports/components/InstructorPerformanceChart";
import VehicleUtilizationChart from "@/features/owner/reports/components/VehicleUtilizationChart";
import MonthlyRegistrationChart from "@/features/owner/reports/components/MonthlyRegistrationChart";
import BookingTrendChart from "@/features/owner/reports/components/BookingTrendChart";

import { reportStats } from "@/features/owner/reports/data/stats";
import { monthlyRevenue } from "@/features/owner/reports/data/monthly-revenue";
import { paymentMethodReport } from "@/features/owner/reports/data/payment-method";
import { paymentStatusReport } from "@/features/owner/reports/data/payment-status";
import { courseEnrollmentReport } from "@/features/owner/reports/data/course-enrollment";
import { instructorPerformanceReport } from "@/features/owner/reports/data/instructor-performance";
import { vehicleUtilizationReport } from "@/features/owner/reports/data/vehicle-utilization";
import { monthlyRegistrationReport } from "@/features/owner/reports/data/monthly-registrations";
import { bookingTrendReport } from "@/features/owner/reports/data/booking-trend";
import ExportReportDropdown from "@/features/owner/reports/components/ExportReportDropdown";

export default function OwnerReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <DashboardPageHeader
                    title="Reports & Analytics"
                    description="Monitor business performance through reports and visual analytics."
                />

                <ExportReportDropdown />
            </div>

            <ReportStats
                stats={reportStats}
            />

            <div className="grid gap-6 xl:grid-cols-2">
                <RevenueChart
                    data={monthlyRevenue}
                />

                <PaymentMethodChart
                    data={paymentMethodReport}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
                <PaymentStatusChart
                    data={paymentStatusReport}
                />

                <CourseEnrollmentChart
                    data={
                        courseEnrollmentReport
                    }
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
                <InstructorPerformanceChart
                    data={
                        instructorPerformanceReport
                    }
                />

                <VehicleUtilizationChart
                    data={
                        vehicleUtilizationReport
                    }
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
                <MonthlyRegistrationChart
                    data={
                        monthlyRegistrationReport
                    }
                />

                <BookingTrendChart
                    data={bookingTrendReport}
                />
            </div>
        </div>
    );
}