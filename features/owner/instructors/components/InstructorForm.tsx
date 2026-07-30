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

import type { Instructor } from "../types/instructor";

interface InstructorFormProps {
    defaultValues?: Partial<Instructor>;
    onSubmit: (values: Partial<Instructor>) => void;
    submitLabel?: string;
}

export default function InstructorForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save",
}: InstructorFormProps) {
    const [formData, setFormData] = useState<Partial<Instructor>>({
        name: defaultValues?.name ?? "",
        email: defaultValues?.email ?? "",
        phone: defaultValues?.phone ?? "",
        licenseNumber: defaultValues?.licenseNumber ?? "",
        experience: defaultValues?.experience ?? 0,
        specialization:
            defaultValues?.specialization ?? "",
        assignedLearners:
            defaultValues?.assignedLearners ?? 0,
        rating: defaultValues?.rating ?? 0,
        status: defaultValues?.status ?? "Active",
    });

    const handleChange = (
        key: keyof Instructor,
        value: string | number | null
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
                        <Label>Name</Label>
                        <Input
                            value={formData.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                            placeholder="Instructor name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                            placeholder="Instructor email"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input
                            value={formData.phone}
                            onChange={(e) =>
                                handleChange("phone", e.target.value)
                            }
                            placeholder="+91 XXXXX XXXXX"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>License Number</Label>
                        <Input
                            value={formData.licenseNumber}
                            onChange={(e) =>
                                handleChange(
                                    "licenseNumber",
                                    e.target.value
                                )
                            }
                            placeholder="License number"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Experience (Years)</Label>
                        <Input
                            type="number"
                            value={formData.experience}
                            onChange={(e) =>
                                handleChange(
                                    "experience",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Specialization</Label>
                        <Input
                            value={formData.specialization}
                            onChange={(e) =>
                                handleChange(
                                    "specialization",
                                    e.target.value
                                )
                            }
                            placeholder="e.g. LMV"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Assigned Learners</Label>
                        <Input
                            type="number"
                            value={formData.assignedLearners}
                            onChange={(e) =>
                                handleChange(
                                    "assignedLearners",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Rating</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            value={formData.rating}
                            onChange={(e) =>
                                handleChange(
                                    "rating",
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label>Status</Label>

                        <Select
                            value={formData.status}
                            onValueChange={(value) =>
                                handleChange("status", value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Active">
                                    Active
                                </SelectItem>

                                <SelectItem value="Inactive">
                                    Inactive
                                </SelectItem>

                                <SelectItem value="On Leave">
                                    On Leave
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