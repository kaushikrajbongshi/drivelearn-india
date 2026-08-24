export type ScheduleStatus =
    | "upcoming"
    | "completed"
    | "cancelled";

export type LessonType =
    | "Practical"
    | "Test Preparation";

export interface Schedule {
    id: string;
    studentId: string;
    studentName: string;
    time: string;
    vehicle: string;
    lessonType: LessonType;
    status: ScheduleStatus;
}