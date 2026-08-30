"use client";

import {
    Check,
    UserRound,
    UserRoundCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Instructor {
    id: string;
    name: string;
    experience: string;
    rating: number;
    image?: string;
}

interface InstructorSelectorProps {
    instructors: Instructor[];
    selectedInstructor: string | null;
    autoAssign: boolean;
    onInstructorChange: (id: string) => void;
    onAutoAssignChange: (value: boolean) => void;
    onContinue: () => void;
    onBack?: () => void;
}

export default function InstructorSelector({
    instructors,
    selectedInstructor,
    autoAssign,
    onInstructorChange,
    onAutoAssignChange,
    onContinue,
    onBack,
}: InstructorSelectorProps) {
    const canContinue = autoAssign || selectedInstructor !== null;

    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Step Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    5
                </div>

                <h2 className="text-sm font-semibold text-card-foreground">
                    Select Instructor
                </h2>
            </div>

            <div className="p-5">
                {/* Heading */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground">
                        Choose your instructor
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Select an instructor or let us automatically assign one
                        based on availability.
                    </p>
                </div>

                {/* Auto Assign */}
                <button
                    type="button"
                    onClick={() => onAutoAssignChange(!autoAssign)}
                    className={`
            mt-5 flex w-full items-center gap-3 rounded-xl
            border p-4 text-left
            transition-all duration-200
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            ${autoAssign
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-muted"
                        }
          `}
                >
                    <div
                        className={`
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-lg
              ${autoAssign
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }
            `}
                    >
                        <UserRoundCheck className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                            Auto Assign
                        </p>

                        <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                            We'll assign the best available instructor for your lesson.
                        </p>
                    </div>

                    <SelectionIndicator selected={autoAssign} />
                </button>

                {/* Instructor List */}
                {!autoAssign && (
                    <div className="mt-5 space-y-3">
                        <p className="text-xs font-medium text-muted-foreground">
                            Available instructors
                        </p>

                        {instructors.map((instructor) => {
                            const isSelected =
                                selectedInstructor === instructor.id;

                            return (
                                <button
                                    key={instructor.id}
                                    type="button"
                                    onClick={() =>
                                        onInstructorChange(instructor.id)
                                    }
                                    className={`
                    flex w-full items-center gap-3 rounded-xl
                    border p-3.5 text-left
                    transition-all duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ring
                    ${isSelected
                                            ? "border-primary bg-primary/5"
                                            : "border-border hover:bg-muted"
                                        }
                  `}
                                >
                                    {/* Avatar */}
                                    <div
                                        className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      overflow-hidden
                      rounded-full
                      bg-muted
                      text-muted-foreground
                    "
                                    >
                                        <UserRound className="h-5 w-5" />
                                    </div>

                                    {/* Details */}
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-foreground">
                                            {instructor.name}
                                        </p>

                                        <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                                            <span>{instructor.experience}</span>

                                            <span aria-hidden="true">•</span>

                                            <span>
                                                ★ {instructor.rating.toFixed(1)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Selection */}
                                    <SelectionIndicator selected={isSelected} />
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Auto Assign Information */}
                {autoAssign && (
                    <div className="mt-4 rounded-lg bg-primary/5 px-4 py-3">
                        <p className="text-xs font-medium text-primary">
                            Instructor will be assigned automatically
                        </p>

                        <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                            The instructor details will be available after your
                            booking is confirmed.
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
                        disabled={!canContinue}
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

function SelectionIndicator({
    selected,
}: {
    selected: boolean;
}) {
    return (
        <div
            className={`
        flex h-5 w-5 shrink-0 items-center justify-center
        rounded-full border
        ${selected
                    ? "border-primary bg-primary"
                    : "border-border"
                }
      `}
        >
            {selected && (
                <Check className="h-3 w-3 text-primary-foreground" />
            )}
        </div>
    );
}