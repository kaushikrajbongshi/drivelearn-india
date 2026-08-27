export type BranchStatus = "active" | "inactive";

export interface Branch {
    id: string;
    name: string;
    code: string;

    phone: string;
    email: string;

    address: string;
    city: string;
    state: string;
    pincode: string;

    workingHours: string;

    instructorCount: number;
    learnerCount: number;
    vehicleCount: number;

    status: BranchStatus;

    createdAt: string;
}