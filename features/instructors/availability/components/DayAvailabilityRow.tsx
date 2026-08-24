"use client";

import type { DayAvailability } from "../types/availability";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface DayAvailabilityRowProps {
    day: DayAvailability;
    onChange: (day: DayAvailability) => void;
}

export default function DayAvailabilityRow({
    day,
    onChange,
}: DayAvailabilityRowProps) {
    return (
        <div className="flex flex-col gap-4 border-b py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
                <Checkbox
                    checked={day.enabled}
                    onCheckedChange={(checked) =>
                        onChange({
                            ...day,
                            enabled: checked === true,
                        })
                    }
                />

                <span className="text-sm font-medium">
                    {day.label}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <Input
                    type="time"
                    value={day.startTime}
                    disabled={!day.enabled}
                    onChange={(e) =>
                        onChange({
                            ...day,
                            startTime: e.target.value,
                        })
                    }
                    className="w-[110px]"
                />

                <span className="text-sm text-muted-foreground">
                    to
                </span>

                <Input
                    type="time"
                    value={day.endTime}
                    disabled={!day.enabled}
                    onChange={(e) =>
                        onChange({
                            ...day,
                            endTime: e.target.value,
                        })
                    }
                    className="w-[110px]"
                />
            </div>
        </div>
    );
}