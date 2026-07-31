"use client";

import { useState } from "react";

import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { Vehicle } from "../types/vehicle";

interface VehicleFormProps {
    defaultValues?: Partial<Vehicle>;
    onSubmit: (values: Partial<Vehicle>) => void;
    submitLabel?: string;
}

export default function VehicleForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save",
}: VehicleFormProps) {
    const [formData, setFormData] = useState<Partial<Vehicle>>({
        registrationNumber:
            defaultValues?.registrationNumber ?? "",
        name: defaultValues?.name ?? "",
        brand: defaultValues?.brand ?? "",
        model: defaultValues?.model ?? "",
        type: defaultValues?.type ?? "Car",
        transmission:
            defaultValues?.transmission ?? "Manual",
        fuelType:
            defaultValues?.fuelType ?? "Petrol",
        year: defaultValues?.year ?? new Date().getFullYear(),
        assignedInstructor:
            defaultValues?.assignedInstructor ?? "",
        status: defaultValues?.status ?? "Active",
        lastServiceDate:
            defaultValues?.lastServiceDate ?? "",
        nextServiceDate:
            defaultValues?.nextServiceDate ?? "",
    });

    const handleChange = (
        key: keyof Vehicle,
        value: string | number
    ) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);
            }}
        >
            <CardContent className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Registration Number</Label>
                        <Input
                            value={formData.registrationNumber}
                            onChange={(e) =>
                                handleChange(
                                    "registrationNumber",
                                    e.target.value
                                )
                            }
                            placeholder="AS01AB1234"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Vehicle Name</Label>
                        <Input
                            value={formData.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                            placeholder="Training Car 1"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Brand</Label>
                        <Input
                            value={formData.brand}
                            onChange={(e) =>
                                handleChange("brand", e.target.value)
                            }
                            placeholder="Maruti Suzuki"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Model</Label>
                        <Input
                            value={formData.model}
                            onChange={(e) =>
                                handleChange("model", e.target.value)
                            }
                            placeholder="Swift"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Vehicle Type</Label>

                        <Select
                            value={formData.type}
                            onValueChange={(value) =>
                                handleChange("type", value ?? "Car")
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Car">
                                    Car
                                </SelectItem>
                                <SelectItem value="Motorcycle">
                                    Motorcycle
                                </SelectItem>
                                <SelectItem value="Truck">
                                    Truck
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Transmission</Label>

                        <Select
                            value={formData.transmission}
                            onValueChange={(value) =>
                                handleChange(
                                    "transmission",
                                    value ?? "Manual"
                                )
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Manual">
                                    Manual
                                </SelectItem>
                                <SelectItem value="Automatic">
                                    Automatic
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Fuel Type</Label>

                        <Select
                            value={formData.fuelType}
                            onValueChange={(value) =>
                                handleChange("fuelType", value ?? "Petrol")
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Petrol">
                                    Petrol
                                </SelectItem>
                                <SelectItem value="Diesel">
                                    Diesel
                                </SelectItem>
                                <SelectItem value="Electric">
                                    Electric
                                </SelectItem>
                                <SelectItem value="CNG">
                                    CNG
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Manufacturing Year</Label>
                        <Input
                            type="number"
                            value={formData.year}
                            onChange={(e) =>
                                handleChange(
                                    "year",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Assigned Instructor</Label>
                        <Input
                            value={formData.assignedInstructor}
                            onChange={(e) =>
                                handleChange(
                                    "assignedInstructor",
                                    e.target.value
                                )
                            }
                            placeholder="Instructor name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Status</Label>

                        <Select
                            value={formData.status}
                            onValueChange={(value) =>
                                handleChange("status", value ?? "Active")
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Active">
                                    Active
                                </SelectItem>
                                <SelectItem value="Maintenance">
                                    Maintenance
                                </SelectItem>
                                <SelectItem value="Inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Last Service Date</Label>
                        <Input
                            type="date"
                            value={formData.lastServiceDate}
                            onChange={(e) =>
                                handleChange(
                                    "lastServiceDate",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Next Service Date</Label>
                        <Input
                            type="date"
                            value={formData.nextServiceDate}
                            onChange={(e) =>
                                handleChange(
                                    "nextServiceDate",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            </CardContent>

            <CardFooter className="justify-end mt-8">
                <button
                    type="submit"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                    {submitLabel}
                </button>
            </CardFooter>
        </form>
    );
}