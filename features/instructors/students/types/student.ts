export type StudentStatus =
    | "active"
    | "completed"
    | "inactive";

export interface Student {
    id: string;
    name: string;
    email: string;
    phone: string;
    course: string;
    progress: number;
    status: StudentStatus;
}