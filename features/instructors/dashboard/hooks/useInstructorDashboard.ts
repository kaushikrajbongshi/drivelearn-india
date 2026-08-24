import { instructorStats } from "../data/stats";
import { todaysLessons } from "../data/todays-lessons";

export function useInstructorDashboard() {
  return {
    stats: instructorStats,
    todaysLessons: todaysLessons,
  };
}
