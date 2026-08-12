export interface Instructor {
  name: string;
  rating: number;
  lessonsCompleted: number;
}

export interface NextLesson {
  type: string;
  date: string;
  time: string;
  duration: string;
  pickup: string;
  instructor: Instructor;
}

export interface RouteStage {
  label: string;
  status: "done" | "current" | "upcoming";
}

export interface TrainingProgress {
  hoursCompleted: number;
  hoursTotal: number;
  lessonsCompleted: number;
  lessonsTotal: number;
}

export interface LearnerPackage {
  name: string;
  sessionsLeft: number;
  sessionsTotal: number;
  expiresIn: string;
}

export interface DashboardData {
  learnerName: string;
  nextLesson: NextLesson;
  routeStages: RouteStage[];
  trainingProgress: TrainingProgress;
  package: LearnerPackage;
}