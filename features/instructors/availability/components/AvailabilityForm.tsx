"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DayAvailabilityRow from "./DayAvailabilityRow";

import type {
    DayAvailability,
    InstructorAvailability,
} from "../types/availability";

interface AvailabilityFormProps {
    defaultValues: InstructorAvailability;
}

export default function AvailabilityForm({
    defaultValues,
}: AvailabilityFormProps) {
    const [days, setDays] = useState<DayAvailability[]>(
        defaultValues.days
    );

    function handleDayChange(updatedDay: DayAvailability) {
        setDays((currentDays) =>
            currentDays.map((day) =>
                day.day === updatedDay.day
                    ? updatedDay
                    : day
            )
        );
    }

    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // API Call
        // Validation
        // Toast

        console.log({
            days,
        });
    }

    return (
        <Card>

            <CardContent>
                <form
                    className="space-y-1"
                    onSubmit={handleSubmit}
                >
                    <div>

                        <div>
                            {days.map((day) => (
                                <DayAvailabilityRow
                                    key={day.day}
                                    day={day}
                                    onChange={handleDayChange}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="border-t pt-2">
                        <Button type="submit">
                            Save Availability
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}