export type LessonStatus = "Completed" | "Upcoming" | "In Progress";

export type LessonType = "Practical" | "Theory";

export interface DashboardStat {
  title: string;
  value: string;
  description: string;
}

export interface TodayLesson {
  id: string;
  time: string;
  student: string;
  course: string;
  vehicleType: "2-Wheeler" | "4-Wheeler";
  type: LessonType;
  location: string;
  status: LessonStatus;
}

export interface StudentProgress {
  id: string;
  name: string;
  course: string;
  vehicleType: "2-Wheeler" | "4-Wheeler";
  progress: number;
  nextLesson: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
}
