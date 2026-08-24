export type InstructorStatus = "active" | "inactive";

export type InstructorGender =
    | "male"
    | "female"
    | "other";

export type InstructorDocumentStatus =
    | "verified"
    | "pending";

export interface InstructorDocument {
    name: string;
    status: InstructorDocumentStatus;
}

export interface InstructorProfile {
    id: string;
    profileImage: string;
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: InstructorGender;
    address: string;
    city: string;
    state: string;
    pincode: string;
    drivingSchool: string;
    licenseNumber: string;
    licenseExpiry: string;
    yearsOfExperience: number;
    vehicleTypes: string[];
    status: InstructorStatus;
    joinedDate: string;
    updatedAt: string;
    documents: InstructorDocument[];
}