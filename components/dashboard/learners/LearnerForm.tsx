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

import type { Learner } from "@/features/admin/learners/types/learner";

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
                        Basic Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Enter the learner's basic information.
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
                            defaultValue={defaultValues?.name}
                            placeholder="Amit Kumar"
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
                            defaultValue={defaultValues?.email}
                            placeholder="amit@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Phone
                        </Label>

                        <Input
                            id="phone"
                            defaultValue={defaultValues?.phone}
                            placeholder="+91 9876543210"
                        />
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                        <Label>
                            Gender
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.gender ?? "male"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="male">
                                    Male
                                </SelectItem>

                                <SelectItem value="female">
                                    Female
                                </SelectItem>

                                <SelectItem value="other">
                                    Other
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* School */}
                    <div className="space-y-2">
                        <Label>
                            Assigned School
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.schoolId ??
                                "SCH-1001"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select School" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="SCH-1001">
                                    Driving School 1
                                </SelectItem>

                                <SelectItem value="SCH-1002">
                                    Driving School 2
                                </SelectItem>

                                <SelectItem value="SCH-1003">
                                    Driving School 3
                                </SelectItem>

                                <SelectItem value="SCH-1004">
                                    Driving School 4
                                </SelectItem>

                                <SelectItem value="SCH-1005">
                                    Driving School 5
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Instructor */}
                    <div className="space-y-2">
                        <Label>
                            Assigned Instructor
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.instructorId ??
                                "INS-1001"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Instructor" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="INS-1001">
                                    Instructor 1
                                </SelectItem>

                                <SelectItem value="INS-1002">
                                    Instructor 2
                                </SelectItem>

                                <SelectItem value="INS-1003">
                                    Instructor 3
                                </SelectItem>

                                <SelectItem value="INS-1004">
                                    Instructor 4
                                </SelectItem>

                                <SelectItem value="INS-1005">
                                    Instructor 5
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Course */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Course
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.course ?? "LMV"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Course" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="LMV">
                                    Light Motor Vehicle (LMV)
                                </SelectItem>

                                <SelectItem value="Motorcycle">
                                    Motorcycle
                                </SelectItem>

                                <SelectItem value="Commercial">
                                    Commercial Vehicle
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
        </div>
    );
}