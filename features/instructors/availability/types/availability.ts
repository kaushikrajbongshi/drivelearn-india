export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface DayAvailability {
  day: DayOfWeek;
  label: string;
  enabled: boolean;
  startTime: string;
  endTime: string;
}

export interface InstructorAvailability {
  days: DayAvailability[];
}
