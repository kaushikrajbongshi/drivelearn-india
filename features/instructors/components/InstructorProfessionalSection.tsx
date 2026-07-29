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

import type { Instructor } from "@/features/instructors/types/instructor";

interface InstructorProfessionalSectionProps {
    defaultValues?: Partial<Instructor>;
}

export default function InstructorProfessionalSection({
    defaultValues,
}: InstructorProfessionalSectionProps) {
    return (
        <section className="space-y-4">
            <div>
                <h3 className="text-base font-semibold">
                    Professional Information
                </h3>

                <p className="text-sm text-muted-foreground">
                    Manage the instructor's professional details.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {/* License Number */}
                <div className="space-y-2">
                    <Label htmlFor="license-number">
                        License Number
                    </Label>

                    <Input
                        id="license-number"
                        defaultValue={defaultValues?.licenseNumber}
                        placeholder="DL20261001"
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
                        defaultValue={defaultValues?.licenseExpiry}
                    />
                </div>

                {/* Experience */}
                <div className="space-y-2">
                    <Label htmlFor="experience">
                        Experience (Years)
                    </Label>

                    <Input
                        id="experience"
                        type="number"
                        min={0}
                        defaultValue={defaultValues?.experience}
                        placeholder="5"
                    />
                </div>

                {/* Assigned School */}
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
            </div>
        </section>
    );
}