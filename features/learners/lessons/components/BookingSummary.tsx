"use client";

import {
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface BookingSummaryProps {
  lessonType: string;
  trainingType: string;
  date: string;
  time: string;
  instructor: string;
  autoAssign?: boolean;
  onConfirm: () => void;
  onBack?: () => void;
  loading?: boolean;
}

export default function BookingSummary({
  lessonType,
  trainingType,
  date,
  time,
  instructor,
  autoAssign = false,
  onConfirm,
  onBack,
  loading = false,
}: BookingSummaryProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Step Header */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          6
        </div>

        <h2 className="text-sm font-semibold text-card-foreground">
          Review & Confirm
        </h2>
      </div>

      <div className="p-5">
        {/* Heading */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Review your lesson
          </h3>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Make sure everything looks correct before confirming
            your booking.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-5 divide-y divide-border rounded-xl border border-border">
          <SummaryRow
            icon={<CarFront />}
            label="Lesson Type"
            value={lessonType}
          />

          <SummaryRow
            icon={<Check />}
            label="Training"
            value={trainingType}
          />

          <SummaryRow
            icon={<CalendarDays />}
            label="Date"
            value={date}
          />

          <SummaryRow
            icon={<Clock3 />}
            label="Time"
            value={time}
          />

          <SummaryRow
            icon={<UserRound />}
            label="Instructor"
            value={autoAssign ? "Auto Assigned" : instructor}
          />
        </div>
              <p className="mt-1 text-xs leading-5 text-muted-foreground text-primary">
                Once confirmed, your lesson will be added to your
                upcoming lessons.
              </p>


        {/* Actions */}
        <div className="mt-6 flex gap-3">
          {onBack && (
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={onBack}
              className="h-11 flex-1 rounded-lg"
            >
              Back
            </Button>
          )}

          <Button
            type="button"
            disabled={loading}
            onClick={onConfirm}
            className="h-11 flex-1 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {loading ? "Confirming..." : "Confirm Booking"}
          </Button>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-muted-foreground">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}