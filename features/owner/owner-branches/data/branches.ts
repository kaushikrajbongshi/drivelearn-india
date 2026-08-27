import type { Branch } from "../types/branch";

export const branches: Branch[] = [
    {
        id: "BR-001",
        name: "Main Branch",
        code: "BR-001",

        phone: "+91 98765 43210",
        email: "main@driveteach.com",

        address: "15, 1st Cross, 100 Feet Road, Indiranagar",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560038",

        workingHours: "7:00 AM - 8:00 PM",

        instructorCount: 8,
        learnerCount: 124,
        vehicleCount: 10,

        status: "active",

        createdAt: "15 Jan 2024",
    },
    {
        id: "BR-002",
        name: "Koramangala Branch",
        code: "BR-002",

        phone: "+91 98765 43211",
        email: "koramangala@driveteach.com",

        address: "80 Feet Road, Koramangala",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560034",

        workingHours: "7:00 AM - 8:00 PM",

        instructorCount: 5,
        learnerCount: 76,
        vehicleCount: 6,

        status: "active",

        createdAt: "20 Mar 2024",
    },
    {
        id: "BR-003",
        name: "Whitefield Branch",
        code: "BR-003",

        phone: "+91 98765 43212",
        email: "whitefield@driveteach.com",

        address: "ITPL Main Road, Whitefield",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560066",

        workingHours: "8:00 AM - 7:00 PM",

        instructorCount: 3,
        learnerCount: 42,
        vehicleCount: 4,

        status: "inactive",

        createdAt: "10 Jun 2024",
    },
];