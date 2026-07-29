import type { Learner } from "../types/learner";

export const learners: Learner[] = [
  ...Array.from({ length: 30 }, (_, index) => ({
    id: `LRN-${1001 + index}`,

    avatar: `https://api.dicebear.com/9.x/initials/svg?seed=Learner${index + 1}`,

    name: `Learner ${index + 1}`,

    email: `learner${index + 1}@drivelearn.com`,

    phone: `+91 98${String(76540000 + index).slice(-8)}`,

    gender: (["male", "female", "other"] as const)[index % 3],

    dateOfBirth: `200${index % 6}-0${(index % 9) + 1}-15`,

    learnerLicenseNumber: `LL${2026}${1000 + index}`,

    learnerLicenseExpiry: `202${7 + (index % 3)}-12-31`,

    course: ["LMV", "Motorcycle", "Commercial"][index % 3],

    schoolId: `SCH-${1001 + (index % 10)}`,

    schoolName: `Driving School ${1 + (index % 10)}`,

    instructorId: `INS-${1001 + (index % 25)}`,

    instructorName: `Instructor ${1 + (index % 25)}`,

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

    theoryProgress: (index * 13) % 101,

    practicalProgress: (index * 17) % 101,

    status: (["active", "pending", "completed", "suspended"] as const)[
      index % 4
    ],

    joinedAt: `2026-${String((index % 12) + 1).padStart(2, "0")}-${String(
      (index % 28) + 1,
    ).padStart(2, "0")}`,

    lastActive:
      index % 5 === 0
        ? "Today"
        : `${(index % 7) + 1} day${index % 7 === 0 ? "" : "s"} ago`,
  })),
];
