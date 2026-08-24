import type { InstructorProfile } from "../types/instructor-profile";


export const instructorProfile: InstructorProfile = {
    id: "INSTR-2024-00125",
    profileImage: "/profile/profile.png",
    fullName: "Rohit Sharma",
    email: "rohit.sharma@email.com",
    phone: "+91 98765 43210",
    dateOfBirth: "15 May 1990",
    gender: "male",
    address: "123 MG Road, Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    drivingSchool: "SafeDrive Training School",
    licenseNumber: "KA05 20150012345",
    licenseExpiry: "14 Jun 2030",
    yearsOfExperience: 6,
    vehicleTypes: [
        "Car",
        "Bike",
        "Heavy Vehicle",
    ],
    status: "active",
    joinedDate: "10 Jan 2024",
    updatedAt: "22 May 2025, 10:30 AM",

    documents: [
        {
            name: "Driving License",
            status: "verified",
        },
        {
            name: "Instructor Certification",
            status: "verified",
        },
        {
            name: "ID Proof",
            status: "verified",
        },
    ],
};