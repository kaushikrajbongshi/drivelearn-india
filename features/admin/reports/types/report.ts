export interface DashboardStats {
  totalUsers: number;
  totalSchools: number;
  totalInstructors: number;
  totalLearners: number;

  activeSubscriptions: number;

  monthlyRevenue: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface SchoolGrowth {
  month: string;
  schools: number;
}

export interface Enrollment {
  month: string;
  learners: number;
}

export interface TopSchool {
  id: string;
  name: string;

  learners: number;
  instructors: number;

  revenue: number;
}

export interface Activity {
  id: string;

  title: string;

  description: string;

  time: string;
}
