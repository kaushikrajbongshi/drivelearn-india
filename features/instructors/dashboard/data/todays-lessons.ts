export type LessonStatus = "Completed" | "Pending";

export interface InstructorLesson {
  id: string;
  studentName: string;
  initials: string;
  time: string;
  course: string;
  location: string;
  status: LessonStatus;
}

export const todaysLessons: InstructorLesson[] = [
  {
    id: "lesson-001",
    studentName: "Ananya Das",
    initials: "AD",
    time: "9:00 AM",
    course: "4-Wheeler Basic",
    location: "Jaydev Vihar Yard",
    status: "Completed",
  },
  {
    id: "lesson-002",
    studentName: "Rohit Sharma",
    initials: "RS",
    time: "7:00 AM",
    course: "Highway Driving",
    location: "NH16 Bypass",
    status: "Completed",
  },
  {
    id: "lesson-003",
    studentName: "Debashish Patra",
    initials: "DP",
    time: "11:00 AM",
    course: "4-Wheeler Basic",
    location: "Jaydev Vihar Yard",
    status: "Pending",
  },
  {
    id: "lesson-004",
    studentName: "Meera Nair",
    initials: "MN",
    time: "4:00 PM",
    course: "4-Wheeler Basic",
    location: "Nayapalli Circuit",
    status: "Pending",
  },
];
