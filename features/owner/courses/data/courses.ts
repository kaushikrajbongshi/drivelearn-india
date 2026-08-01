import type { Course } from "../types/course";

export const courses: Course[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,

    name: [
      "LMV Beginner",
      "LMV Advanced",
      "Motorcycle Training",
      "Heavy Vehicle",
      "Refresher Course",
    ][index % 5],

    code: `CRS-${1001 + index}`,

    duration: ["15 Days", "30 Days", "45 Days", "60 Days"][index % 4],

    fee: [4500, 6500, 8000, 12000][index % 4],

    lessonCount: [10, 15, 20, 30][index % 4],

    vehicleType: ["Car", "Motorcycle", "Truck"][index % 3],

    description: `Comprehensive driving course ${index + 1}.`,

    status: (["Active", "Inactive"] as const)[index % 2],

    createdAt: `2026-${String((index % 12) + 1).padStart(
      2,
      "0",
    )}-${String((index % 28) + 1).padStart(2, "0")}`,
  })),
];
