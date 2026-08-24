import type { Schedule } from "../types/schedule";


export const schedules: Schedule[] = [
    {
        id: "LSN-1001",
        studentId: "STU-1001",
        studentName: "Rahul Sharma",
        time: "09:00 AM",
        vehicle: "Hyundai i20",
        lessonType: "Practical",
        status: "upcoming",
    },
    {
        id: "LSN-1002",
        studentId: "STU-1002",
        studentName: "Priya Das",
        time: "11:00 AM",
        vehicle: "Maruti Swift",
        lessonType: "Practical",
        status: "completed",
    },
    {
        id: "LSN-1003",
        studentId: "STU-1003",
        studentName: "Amit Kumar",
        time: "02:00 PM",
        vehicle: "Tata Punch",
        lessonType: "Test Preparation",
        status: "upcoming",
    },
    {
        id: "LSN-1004",
        studentId: "STU-1004",
        studentName: "Sneha Roy",
        time: "04:00 PM",
        vehicle: "Maruti Baleno",
        lessonType: "Practical",
        status: "upcoming",
    },
    {
        id: "LSN-1005",
        studentId: "STU-1005",
        studentName: "Arjun Das",
        time: "06:00 PM",
        vehicle: "Hyundai Grand i10",
        lessonType: "Test Preparation",
        status: "cancelled",
    },
];