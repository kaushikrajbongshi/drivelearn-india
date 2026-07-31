import { DashboardIcon } from "@/features/dashboard/config/dashboard-icons";

export type VehicleStatus =
  | "Active"
  | "Maintenance"
  | "Inactive";

export type VehicleType =
  | "Car"
  | "Motorcycle"
  | "Truck";

export type TransmissionType =
  | "Manual"
  | "Automatic";

export type FuelType =
  | "Petrol"
  | "Diesel"
  | "Electric"
  | "CNG";

export interface Vehicle {
  id: number;
  registrationNumber: string;
  name: string;
  brand: string;
  model: string;
  type: VehicleType;
  transmission: TransmissionType;
  fuelType: FuelType;
  year: number;
  assignedInstructor: string;
  status: VehicleStatus;
  lastServiceDate: string;
  nextServiceDate: string;
}

export interface VehicleStat {
  title: string;
  value: string;
  description: string;
  icon: DashboardIcon;
}

export interface VehicleFilter {
  label: string;
  value: string;
}