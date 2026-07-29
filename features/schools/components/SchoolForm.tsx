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

import type { School } from "@/features/schools/types/school";

interface SchoolFormProps {
    defaultValues?: Partial<School>;
}

export default function SchoolForm({
    defaultValues,
}: SchoolFormProps) {
    return (
        <div className="space-y-8">
            {/* Basic Information */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        Basic Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Enter the basic details to create a new driving school.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="school-name">
                            School Name
                        </Label>

                        <Input
                            id="school-name"
                            defaultValue={defaultValues?.name}
                            placeholder="DriveSafe Academy"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="owner-name">
                            Owner Name
                        </Label>

                        <Input
                            id="owner-name"
                            defaultValue={defaultValues?.ownerName}
                            placeholder="Rahul Sharma"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            defaultValue={defaultValues?.email}
                            placeholder="school@example.com"
                        />
                    </div>

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

                    <div className="space-y-2">
                        <Label>State</Label>

                        <Select defaultValue={defaultValues?.state ?? "Assam"}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Assam">Assam</SelectItem>
                                <SelectItem value="Delhi">Delhi</SelectItem>
                                <SelectItem value="Gujarat">Gujarat</SelectItem>
                                <SelectItem value="Karnataka">Karnataka</SelectItem>
                                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                                <SelectItem value="West Bengal">West Bengal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">
                            City
                        </Label>

                        <Input
                            id="city"
                            defaultValue={defaultValues?.city}
                            placeholder="Guwahati"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}