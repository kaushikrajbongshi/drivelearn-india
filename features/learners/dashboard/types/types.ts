export interface TodayLesson {
  time: string;
  title: string;
  status: "confirmed" | "pending";
  instructorName: string;
  vehicleName: string;
}

export interface UpcomingLesson {
  dayLabel: string;
  time: string;
  title: string;
  instructorName: string;
  vehicleName: string;
}

export interface ProgressSummary {
  percentage: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  practicalCompleted: number;
  practicalTotal: number;
  theoryCompleted: number;
  theoryTotal: number;
}

export interface InstructorSummary {
  name: string;
  role: string;
  rating: number;
  reviewCount: number;
  avatarUrl?: string;
}

export interface VehicleSummary {
  name: string;
  transmission: "Manual" | "Automatic";
  category: string;
}

export interface Announcement {
  id: string;
  title: string;
  timeAgo: string;
  variant: "info" | "offer";
}

export interface DashboardData {
  learnerName: string;
  todayLesson: TodayLesson | null;
  upcomingLesson: UpcomingLesson | null;
  progress: ProgressSummary;
  instructor: InstructorSummary | null;
  vehicle: VehicleSummary | null;
  announcements: Announcement[];
}