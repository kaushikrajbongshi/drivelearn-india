"use client";

import { useState } from "react";

import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { Course } from "../types/course";

interface CourseFormProps {
    defaultValues?: Partial<Course>;
    onSubmit: (values: Partial<Course>) => void;
    submitLabel?: string;
}

export default function CourseForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save",
}: CourseFormProps) {
    const [formData, setFormData] =
        useState<Partial<Course>>({
            name: defaultValues?.name ?? "",
            code: defaultValues?.code ?? "",
            duration:
                defaultValues?.duration ?? "",
            fee: defaultValues?.fee ?? 0,
            lessonCount:
                defaultValues?.lessonCount ?? 0,
            vehicleType:
                defaultValues?.vehicleType ?? "Car",
            description:
                defaultValues?.description ?? "",
            status:
                defaultValues?.status ?? "Active",
        });

    const handleChange = (
        key: keyof Course,
        value: string | number | null
    ) => {
        if (value === null) return;

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
                        <Label>Course Name</Label>

                        <Input
                            value={formData.name}
                            onChange={(e) =>
                                handleChange(
                                    "name",
                                    e.target.value
                                )
                            }
                            placeholder="LMV Beginner"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Course Code</Label>

                        <Input
                            value={formData.code}
                            onChange={(e) =>
                                handleChange(
                                    "code",
                                    e.target.value
                                )
                            }
                            placeholder="CRS-1001"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Duration</Label>

                        <Input
                            value={formData.duration}
                            onChange={(e) =>
                                handleChange(
                                    "duration",
                                    e.target.value
                                )
                            }
                            placeholder="30 Days"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Fee (₹)</Label>

                        <Input
                            type="number"
                            value={formData.fee}
                            onChange={(e) =>
                                handleChange(
                                    "fee",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Total Lessons</Label>

                        <Input
                            type="number"
                            value={formData.lessonCount}
                            onChange={(e) =>
                                handleChange(
                                    "lessonCount",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Vehicle Type</Label>

                        <Select
                            value={formData.vehicleType}
                            onValueChange={(value) =>
                                handleChange(
                                    "vehicleType",
                                    value
                                )
                            }
                        >
                            <SelectTrigger>
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

                    <div className="space-y-2 md:col-span-2">
                        <Label>Description</Label>

                        <Textarea
                            value={formData.description}
                            onChange={(e) =>
                                handleChange(
                                    "description",
                                    e.target.value
                                )
                            }
                            placeholder="Course description..."
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label>Status</Label>

                        <Select
                            value={formData.status}
                            onValueChange={(value) =>
                                handleChange(
                                    "status",
                                    value
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Active">
                                    Active
                                </SelectItem>

                                <SelectItem value="Inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="justify-end">
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