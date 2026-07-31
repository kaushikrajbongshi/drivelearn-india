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

import type { Booking } from "../types/booking";

interface BookingFormProps {
    defaultValues?: Partial<Booking>;
    onSubmit: (values: Partial<Booking>) => void;
    submitLabel?: string;
}

export default function BookingForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save",
}: BookingFormProps) {
    const [formData, setFormData] =
        useState<Partial<Booking>>({
            learnerName:
                defaultValues?.learnerName ?? "",

            instructorName:
                defaultValues?.instructorName ?? "",

            vehicleName:
                defaultValues?.vehicleName ?? "",

            lessonType:
                defaultValues?.lessonType ??
                "Practical",

            bookingDate:
                defaultValues?.bookingDate ?? "",

            startTime:
                defaultValues?.startTime ?? "",

            endTime:
                defaultValues?.endTime ?? "",

            pickupLocation:
                defaultValues?.pickupLocation ??
                "",

            status:
                defaultValues?.status ??
                "Scheduled",
        });

    const handleChange = (
        key: keyof Booking,
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
                        <Label>Learner</Label>

                        <Input
                            value={formData.learnerName}
                            onChange={(e) =>
                                handleChange(
                                    "learnerName",
                                    e.target.value
                                )
                            }
                            placeholder="Learner name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Instructor</Label>

                        <Input
                            value={formData.instructorName}
                            onChange={(e) =>
                                handleChange(
                                    "instructorName",
                                    e.target.value
                                )
                            }
                            placeholder="Instructor name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Vehicle</Label>

                        <Input
                            value={formData.vehicleName}
                            onChange={(e) =>
                                handleChange(
                                    "vehicleName",
                                    e.target.value
                                )
                            }
                            placeholder="Vehicle"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Lesson Type</Label>

                        <Select
                            value={formData.lessonType}
                            onValueChange={(value) =>
                                handleChange(
                                    "lessonType",
                                    value
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Practical">
                                    Practical
                                </SelectItem>

                                <SelectItem value="Theory">
                                    Theory
                                </SelectItem>

                                <SelectItem value="Test Drive">
                                    Test Drive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Booking Date</Label>

                        <Input
                            type="date"
                            value={formData.bookingDate}
                            onChange={(e) =>
                                handleChange(
                                    "bookingDate",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Pickup Location</Label>

                        <Input
                            value={formData.pickupLocation}
                            onChange={(e) =>
                                handleChange(
                                    "pickupLocation",
                                    e.target.value
                                )
                            }
                            placeholder="Pickup location"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Start Time</Label>

                        <Input
                            type="time"
                            value={formData.startTime}
                            onChange={(e) =>
                                handleChange(
                                    "startTime",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>End Time</Label>

                        <Input
                            type="time"
                            value={formData.endTime}
                            onChange={(e) =>
                                handleChange(
                                    "endTime",
                                    e.target.value
                                )
                            }
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
                                <SelectItem value="Scheduled">
                                    Scheduled
                                </SelectItem>

                                <SelectItem value="Ongoing">
                                    Ongoing
                                </SelectItem>

                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>

                                <SelectItem value="Cancelled">
                                    Cancelled
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