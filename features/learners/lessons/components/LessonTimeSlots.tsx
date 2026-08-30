"use client";

import { CircleCheck, CircleX, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface LessonTimeSlotsProps {
  selectedTime: string | null;
  onChange: (time: string) => void;
  onContinue: () => void;
  onBack?: () => void;
}

const timeSlots = [
  { time: "07:00 AM", available: true },
  { time: "08:00 AM", available: true },
  { time: "09:00 AM", available: false },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "04:00 PM", available: true },
  { time: "05:00 PM", available: false },
  { time: "06:00 PM", available: true },
];

export default function LessonTimeSlots({
  selectedTime,
  onChange,
  onContinue,
  onBack,
}: LessonTimeSlotsProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Step Header */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          4
        </div>

        <h2 className="text-sm font-semibold text-card-foreground">
          Select Time
        </h2>
      </div>

      <div className="p-5">
        {/* Heading */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Select Time
          </h3>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Choose an available time slot for your lesson
          </p>
        </div>

        {/* Time Slots */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {timeSlots.map((slot) => {
            const isSelected = selectedTime === slot.time;
            const isAvailable = slot.available;

            return (
              <button
                key={slot.time}
                type="button"
                disabled={!isAvailable}
                onClick={() => {
                  if (isAvailable) {
                    onChange(slot.time);
                  }
                }}
                className={`
                  flex h-11 items-center justify-center gap-2
                  rounded-lg border
                  text-xs font-medium
                  transition-all duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  ${
                    isSelected
                      ? "border-primary bg-primary/5 text-primary"
                      : isAvailable
                        ? "border-border text-foreground hover:bg-muted"
                        : "cursor-not-allowed border-border bg-muted/30 text-muted-foreground/40"
                  }
                `}
              >
                <Clock3
                  className={`
                    h-3.5 w-3.5
                    ${
                      isSelected
                        ? "text-primary"
                        : isAvailable
                          ? "text-muted-foreground"
                          : "text-muted-foreground/40"
                    }
                  `}
                />

                {slot.time}

                {!isAvailable && (
                  <span className="text-[9px] uppercase tracking-wide">
                    Full
                  </span>
                )}
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

        {/* Selected Time */}
        {selectedTime && (
          <div className="mt-4 rounded-lg bg-primary/5 px-4 py-3">
            <p className="text-xs text-muted-foreground">
              Selected time
            </p>

            <p className="mt-0.5 text-sm font-semibold text-primary">
              {selectedTime}
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
            disabled={!selectedTime}
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