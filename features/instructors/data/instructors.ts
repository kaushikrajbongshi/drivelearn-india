import type { Instructor } from "../types/instructor";

export const instructors: Instructor[] = [
  ...Array.from({ length: 25 }, (_, index) => ({
    id: `INS-${1001 + index}`,

    avatar: `https://api.dicebear.com/9.x/initials/svg?seed=Instructor${index + 1}`,

    name: `Instructor ${index + 1}`,

    email: `instructor${index + 1}@drivelearn.com`,

    phone: `+91 98765${String(10000 + index).slice(1)}`,

    gender: (["male", "female", "other"] as const)[index % 3],

    dateOfBirth: `199${index % 10}-0${(index % 9) + 1}-15`,

    licenseNumber: `DL${2026}${1000 + index}`,

    licenseExpiry: `203${index % 5}-12-31`,

    experience: 2 + (index % 12),

    schoolId: `SCH-${1001 + (index % 10)}`,

    schoolName: `Driving School ${1 + (index % 10)}`,

    state: ["Assam", "Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"][
      index % 5
    ],

    city: ["Guwahati", "Delhi", "Bengaluru", "Mumbai", "Chennai"][index % 5],

    address: `${120 + index}, MG Road`,

    landmark: [
      "Near Railway Station",
      "Opposite City Mall",
      "Near Bus Stand",
      "Behind Police Station",
      "Near Metro Station",
    ][index % 5],

    pincode: ["781001", "110001", "560001", "400001", "600001"][index % 5],

    totalLearners: 10 + index * 3,

    status: (["active", "on_leave", "suspended"] as const)[index % 3],

    joinedAt: `2025-${String((index % 12) + 1).padStart(2, "0")}-${String(
      (index % 28) + 1,
    ).padStart(2, "0")}`,

    lastActive:
      index % 4 === 0
        ? "Today"
        : `${(index % 7) + 1} day${index % 7 === 0 ? "" : "s"} ago`,
  })),
];
