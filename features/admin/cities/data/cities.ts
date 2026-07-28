import type { City } from "../types/city";

export const cities: City[] = [
  {
    id: "CT-1001",
    name: "Guwahati",
    stateId: "ST-1001",
    stateName: "Assam",
    totalSchools: 18,
    status: "active",
    createdAt: "2026-01-05",
  },
  {
    id: "CT-1002",
    name: "Dibrugarh",
    stateId: "ST-1001",
    stateName: "Assam",
    totalSchools: 9,
    status: "active",
    createdAt: "2026-01-08",
  },
  {
    id: "CT-1003",
    name: "Bengaluru",
    stateId: "ST-1003",
    stateName: "Karnataka",
    totalSchools: 31,
    status: "active",
    createdAt: "2026-01-10",
  },
  {
    id: "CT-1004",
    name: "Mumbai",
    stateId: "ST-1004",
    stateName: "Maharashtra",
    totalSchools: 42,
    status: "active",
    createdAt: "2026-01-14",
  },
  {
    id: "CT-1005",
    name: "Chennai",
    stateId: "ST-1005",
    stateName: "Tamil Nadu",
    totalSchools: 27,
    status: "inactive",
    createdAt: "2026-01-18",
  },

  ...Array.from({ length: 15 }, (_, index) => ({
    id: `CT-${1006 + index}`,
    name: `City ${index + 6}`,
    stateId: `ST-${1001 + (index % 5)}`,
    stateName: ["Assam", "Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"][
      index % 5
    ],
    totalSchools: 5 + index * 2,
    status: (["active", "inactive"] as const)[index % 2],
    createdAt: `2026-02-${String((index % 28) + 1).padStart(2, "0")}`,
  })),
];
