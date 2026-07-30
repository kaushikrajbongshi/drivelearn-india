"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { Learner } from "@/features/owner/learners/types/learner";

interface LearnerFormProps {
    defaultValues?: Partial<Learner>;
}

export default function LearnerForm({
    defaultValues,
}: LearnerFormProps) {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Learner Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Enter the learner details below.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Full Name
                        </Label>

                        <Input
                            id="name"
                            placeholder="Rahul Sharma"
                            defaultValue={defaultValues?.name}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            placeholder="rahul@example.com"
                            defaultValue={defaultValues?.email}
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Phone Number
                        </Label>

                        <Input
                            id="phone"
                            placeholder="+91 9876543210"
                            defaultValue={defaultValues?.phone}
                        />
                    </div>

                    {/* Course */}
                    <div className="space-y-2">
                        <Label>
                            Course
                        </Label>

                        <Select
                            defaultValue={defaultValues?.course}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Course" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="LMV">
                                    LMV
                                </SelectItem>

                                <SelectItem value="HMV">
                                    HMV
                                </SelectItem>

                                <SelectItem value="MCWG">
                                    MCWG
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Instructor */}
                    <div className="space-y-2">
                        <Label>
                            Instructor
                        </Label>

                        <Select
                            defaultValue={defaultValues?.instructor}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Instructor" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Amit Das">
                                    Amit Das
                                </SelectItem>

                                <SelectItem value="Rakesh Kumar">
                                    Rakesh Kumar
                                </SelectItem>

                                <SelectItem value="Sanjay Roy">
                                    Sanjay Roy
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                        <Label>
                            Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.status ?? "Active"
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

                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Payment Status */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Payment Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.paymentStatus ?? "Pending"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Paid">
                                    Paid
                                </SelectItem>

                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="Overdue">
                                    Overdue
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
        </div>
    );
}