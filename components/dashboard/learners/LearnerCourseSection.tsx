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

interface LearnerCourseSectionProps {
    defaultValues?: Partial<Learner>;
}

export default function LearnerCourseSection({
    defaultValues,
}: LearnerCourseSectionProps) {
    return (
        <section className="space-y-4">
            <div>
                <h3 className="text-base font-semibold">
                    Training Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Manage learner training and course details.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {/* Learner License */}
                <div className="space-y-2">
                    <Label htmlFor="license-number">
                        Learner License Number
                    </Label>

                    <Input
                        id="license-number"
                        defaultValue={
                            defaultValues?.learnerLicenseNumber
                        }
                        placeholder="LL20261001"
                    />
                </div>

                {/* License Expiry */}
                <div className="space-y-2">
                    <Label htmlFor="license-expiry">
                        License Expiry
                    </Label>

                    <Input
                        id="license-expiry"
                        type="date"
                        defaultValue={
                            defaultValues?.learnerLicenseExpiry
                        }
                    />
                </div>

                {/* Course */}
                <div className="space-y-2">
                    <Label>
                        Course
                    </Label>

                    <Select
                        defaultValue={
                            defaultValues?.course ?? "LMV"
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
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

                {/* School */}
                <div className="space-y-2">
                    <Label>
                        Assigned School
                    </Label>

                    <Select
                        defaultValue={
                            defaultValues?.schoolId ?? "SCH-1001"
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
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
                            <SelectValue />
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

                {/* Theory Progress */}
                <div className="space-y-2">
                    <Label htmlFor="theory-progress">
                        Theory Progress (%)
                    </Label>

                    <Input
                        id="theory-progress"
                        type="number"
                        min={0}
                        max={100}
                        defaultValue={
                            defaultValues?.theoryProgress
                        }
                    />
                </div>

                {/* Practical Progress */}
                <div className="space-y-2">
                    <Label htmlFor="practical-progress">
                        Practical Progress (%)
                    </Label>

                    <Input
                        id="practical-progress"
                        type="number"
                        min={0}
                        max={100}
                        defaultValue={
                            defaultValues?.practicalProgress
                        }
                    />
                </div>
            </div>
        </section>
    );
}