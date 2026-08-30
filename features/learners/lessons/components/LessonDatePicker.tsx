"use client";

import {
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    CircleCheck,
    CircleX,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface LessonDatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date) => void;
    onContinue: () => void;
    onBack?: () => void;
}

const days = [
    { date: 19, day: "Mon", available: true },
    { date: 20, day: "Tue", available: true },
    { date: 21, day: "Wed", available: true },
    { date: 22, day: "Thu", available: false },
    { date: 23, day: "Fri", available: true },
    { date: 24, day: "Sat", available: false },
    { date: 25, day: "Sun", available: false },
];

export default function LessonDatePicker({
    selectedDate,
    onChange,
    onContinue,
    onBack,
}: LessonDatePickerProps) {
    const month = "May";
    const year = 2025;

    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Step Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                </div>

                <h2 className="text-sm font-semibold text-card-foreground">
                    Select Date
                </h2>
            </div>

            <div className="p-5">
                {/* Heading */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground">
                        Select Date
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Choose an available date for your lesson
                    </p>
                </div>

                {/* Calendar */}
                <div className="mt-5 rounded-xl border border-border p-4">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between">
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-primary" />

                            <p className="text-sm font-semibold text-foreground">
                                {month} {year}
                            </p>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Days */}
                    <div className="mt-5 grid grid-cols-7 gap-1">
                        {days.map((day) => {
                            const date = new Date(year, 4, day.date);

                            const isSelected =
                                selectedDate?.toDateString() ===
                                date.toDateString();

                            const isAvailable = day.available;

                            return (
                                <button
                                    key={day.date}
                                    type="button"
                                    disabled={!isAvailable}
                                    onClick={() => {
                                        if (isAvailable) {
                                            onChange(date);
                                        }
                                    }}
                                    className={`
                    flex flex-col items-center gap-1
                    rounded-lg px-1 py-2.5
                    text-xs
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ring
                    ${
                        isSelected
                            ? "bg-primary text-primary-foreground"
                            : isAvailable
                              ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                              : "cursor-not-allowed text-muted-foreground/30"
                    }
                  `}
                                >
                                    <span className="text-[10px] font-medium">
                                        {day.day}
                                    </span>

                                    <span className="text-sm font-semibold">
                                        {day.date}
                                    </span>

                                    {/* Availability indicator */}
                                    <span
                                        className={`
                      h-1.5 w-1.5 rounded-full
                      ${
                          isSelected
                              ? "bg-primary-foreground"
                              : isAvailable
                                ? "bg-primary"
                                : "bg-muted-foreground/20"
                      }
                    `}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Availability Legend */}
                    <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                        <div className="flex items-center gap-1.5">
                            <CircleCheck className="h-3.5 w-3.5 text-primary" />

                            <span className="text-[10px] font-medium text-muted-foreground">
                                Available
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <CircleX className="h-3.5 w-3.5 text-muted-foreground/50" />

                            <span className="text-[10px] font-medium text-muted-foreground">
                                Not available
                            </span>
                        </div>
                    </div>
                </div>

                {/* Selected Date */}
                {selectedDate && (
                    <div className="mt-4 rounded-lg bg-primary/5 px-4 py-3">
                        <p className="text-xs text-muted-foreground">
                            Selected date
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-primary">
                            {selectedDate.toLocaleDateString("en-IN", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                    {onBack && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onBack}
                            className="h-11 flex-1 rounded-lg"
                        >
                            Back
                        </Button>
                    )}

                    <Button
                        type="button"
                        disabled={!selectedDate}
                        onClick={onContinue}
                        className="h-11 flex-1 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </section>
    );
}