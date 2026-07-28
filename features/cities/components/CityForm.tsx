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

import type { City } from "@/features/cities/types/city";
import { states } from "@/features/states/data/states";

interface CityFormProps {
    defaultValues?: Partial<City>;
}

export default function CityForm({
    defaultValues,
}: CityFormProps) {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <div>
                    <h3 className="text-base font-semibold">
                        City Information
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Enter the city details below.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* City Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            City Name
                        </Label>

                        <Input
                            id="name"
                            placeholder="Guwahati"
                            defaultValue={defaultValues?.name}
                        />
                    </div>

                    {/* State */}
                    <div className="space-y-2">
                        <Label>
                            State
                        </Label>

                        <Select
                            defaultValue={defaultValues?.stateId}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select State" />
                            </SelectTrigger>

                            <SelectContent>
                                {states.map((state) => (
                                    <SelectItem
                                        key={state.id}
                                        value={state.id}
                                    >
                                        {state.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Status */}
                    <div className="space-y-2 md:col-span-2">
                        <Label>
                            Status
                        </Label>

                        <Select
                            defaultValue={
                                defaultValues?.status ?? "active"
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="active">
                                    Active
                                </SelectItem>

                                <SelectItem value="inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>
        </div>
    );
}