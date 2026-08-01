import type { DashboardIcon } from "@/config/dashboard-icons";

export interface ReportStat {
    title: string;
    value: string;
    description: string;
    icon: DashboardIcon;
}

export interface MonthlyRevenue {
    month: string;
    revenue: number;
}

export interface PaymentMethodReport {
    method: string;
    count: number;
}

export interface PaymentStatusReport {
    status: string;
    count: number;
}

export interface CourseEnrollmentReport {
    course: string;
    enrollments: number;
}

export interface InstructorPerformanceReport {
    instructor: string;
    learners: number;
}

export interface VehicleUtilizationReport {
    vehicle: string;
    utilization: number;
}

export interface MonthlyRegistrationReport {
    month: string;
    learners: number;
}

export interface BookingTrendReport {
    month: string;
    bookings: number;
}