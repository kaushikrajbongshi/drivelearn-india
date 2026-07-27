import type {
  Activity,
  DashboardStats,
  Enrollment,
  MonthlyRevenue,
  SchoolGrowth,
  TopSchool,
} from "../types/report";

export const dashboardStats: DashboardStats = {
  totalUsers: 1284,

  totalSchools: 64,

  totalInstructors: 182,

  totalLearners: 3568,

  activeSubscriptions: 48,

  monthlyRevenue: 4820,
};

export const revenueData: MonthlyRevenue[] = [
  { month: "Jan", revenue: 1800 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 2400 },
  { month: "Apr", revenue: 2600 },
  { month: "May", revenue: 3100 },
  { month: "Jun", revenue: 3600 },
  { month: "Jul", revenue: 4820 },
];

export const enrollmentData: Enrollment[] = [
  { month: "Jan", learners: 120 },
  { month: "Feb", learners: 180 },
  { month: "Mar", learners: 220 },
  { month: "Apr", learners: 270 },
  { month: "May", learners: 310 },
  { month: "Jun", learners: 350 },
  { month: "Jul", learners: 420 },
];

export const schoolGrowthData: SchoolGrowth[] = [
  { month: "Jan", schools: 12 },
  { month: "Feb", schools: 18 },
  { month: "Mar", schools: 24 },
  { month: "Apr", schools: 31 },
  { month: "May", schools: 42 },
  { month: "Jun", schools: 54 },
  { month: "Jul", schools: 100},
];

export const topSchools: TopSchool[] = [
  {
    id: "SCH-1001",
    name: "DriveSafe Academy",
    learners: 325,
    instructors: 18,
    revenue: 79,
  },
  {
    id: "SCH-1002",
    name: "City Driving School",
    learners: 290,
    instructors: 15,
    revenue: 79,
  },
  {
    id: "SCH-1003",
    name: "Road Masters",
    learners: 248,
    instructors: 13,
    revenue: 29,
  },
  {
    id: "SCH-1004",
    name: "Highway Academy",
    learners: 214,
    instructors: 11,
    revenue: 29,
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    title: "New school registered",
    description: "DriveSafe Academy joined the platform.",
    time: "5 minutes ago",
  },
  {
    id: "2",
    title: "Premium subscription purchased",
    description: "City Driving School upgraded to Premium.",
    time: "20 minutes ago",
  },
  {
    id: "3",
    title: "Instructor added",
    description: "John Smith joined Road Masters.",
    time: "1 hour ago",
  },
  {
    id: "4",
    title: "Learner completed training",
    description: "Rahul Sharma completed LMV course.",
    time: "3 hours ago",
  },
];
