import type { VehicleStat } from "../types/vehicle";

export const vehicleStats: VehicleStat[] = [
  {
    title: "Total Vehicles",
    value: "28",
    description: "Fleet across all branches",
    icon: "car",
  },
  {
    title: "Active Vehicles",
    value: "22",
    description: "Available for training",
    icon: "active",
  },
  {
    title: "Maintenance",
    value: "4",
    description: "Currently under service",
    icon: "maintenance",
  },
  {
    title: "Available Today",
    value: "18",
    description: "Ready for bookings",
    icon: "calendar",
  },
];
