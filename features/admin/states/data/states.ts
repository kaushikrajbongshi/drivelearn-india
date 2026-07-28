import type { State } from "../types/state";

export const states: State[] = [
  {
    id: "ST-1001",
    name: "Assam",
    code: "AS",
    totalCities: 12,
    totalSchools: 24,
    status: "active",
    createdAt: "2026-01-05",
  },
  {
    id: "ST-1002",
    name: "Delhi",
    code: "DL",
    totalCities: 11,
    totalSchools: 38,
    status: "active",
    createdAt: "2026-01-08",
  },
  {
    id: "ST-1003",
    name: "Karnataka",
    code: "KA",
    totalCities: 18,
    totalSchools: 52,
    status: "active",
    createdAt: "2026-01-12",
  },
  {
    id: "ST-1004",
    name: "Maharashtra",
    code: "MH",
    totalCities: 24,
    totalSchools: 67,
    status: "active",
    createdAt: "2026-01-16",
  },
  {
    id: "ST-1005",
    name: "Tamil Nadu",
    code: "TN",
    totalCities: 16,
    totalSchools: 43,
    status: "inactive",
    createdAt: "2026-01-20",
  },

  ...Array.from({ length: 15 }, (_, index) => ({
    id: `ST-${1006 + index}`,
    name: `State ${index + 6}`,
    code: `S${index + 6}`,
    totalCities: 5 + (index % 15),
    totalSchools: 10 + index * 4,
    status: (["active", "inactive"] as const)[index % 2],
    createdAt: `2026-02-${String((index % 28) + 1).padStart(2, "0")}`,
  })),
];
