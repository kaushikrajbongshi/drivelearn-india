"use client";

import {
    BookOpenCheck,
    CarFront,
    CircleParking,
    Gauge,
    LockKeyhole,
    Signpost,
    TrafficCone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface LessonTrainingSelectorProps {
    selectedTraining: string | null;
    onChange: (training: string) => void;
    onContinue: () => void;
}

type TrainingStatus = "available" | "completed" | "locked";

interface TrainingOption {
    id: string;
    title: string;
    description: string;
    icon: typeof BookOpenCheck;
    status: TrainingStatus;
}

const trainingOptions: TrainingOption[] = [
    {
        id: "written-test",
        title: "Written Test",
        description: "Road rules, signs and traffic knowledge",
        icon: BookOpenCheck,
        status: "completed",
    },
    {
        id: "basic-driving",
        title: "Basic Driving",
        description: "Learn essential driving controls and handling",
        icon: CarFront,
        status: "available",
    },
    {
        id: "traffic-signals",
        title: "Traffic Signals",
        description: "Learn signals, signs and road rules",
        icon: TrafficCone,
        status: "locked",
    },
    {
        id: "highway-driving",
        title: "Highway Driving",
        description: "Practice confident and safe highway driving",
        icon: Gauge,
        status: "locked",
    },
    {
        id: "parking",
        title: "Parking",
        description: "Practice parking and vehicle positioning",
        icon: CircleParking,
        status: "locked",
    },
    {
        id: "road-awareness",
        title: "Road Awareness",
        description: "Build awareness for real-world road situations",
        icon: Signpost,
        status: "locked",
    },
];

export default function LessonTrainingSelector({
    selectedTraining,
    onChange,
    onContinue,
}: LessonTrainingSelectorProps) {
    const hasSelection = Boolean(selectedTraining);

    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Step Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                </div>

                <h2 className="text-sm font-semibold text-card-foreground">
                    Select Training
                </h2>
            </div>

            <div className="p-5">
                {/* Heading */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground">
                        What would you like to practice?
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Complete each training step to unlock the next one.
                    </p>
                </div>

                {/* Training Options */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {trainingOptions.map((option) => {
                        const Icon = option.icon;

                        const isSelected =
                            selectedTraining === option.id;

                        const isCompleted =
                            option.status === "completed";

                        const isLocked =
                            option.status === "locked";

                        const isDisabled =
                            isCompleted || isLocked;

                        return (
                            <button
                                key={option.id}
                                type="button"
                                disabled={isDisabled}
                                onClick={() => {
                                    if (!isDisabled) {
                                        onChange(option.id);
                                    }
                                }}
                                className={`
                  group relative flex min-h-[86px] items-center gap-3
                  overflow-hidden rounded-xl border p-3.5 text-left
                  transition-all duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  ${
                      isSelected
                          ? "border-primary bg-primary/5"
                          : isCompleted
                            ? "border-border bg-muted/30"
                            : isLocked
                              ? "border-border bg-muted/20"
                              : "border-border bg-card hover:bg-muted"
                  }
                  ${
                      isDisabled
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                  }
                `}
                            >
                                {/* Completed Watermark */}
                                {isCompleted && (
                                    <span
                                        className="
                      pointer-events-none
                      absolute
                      right-2
                      top-1/2
                      -translate-y-1/2
                      rotate-[-12deg]
                      select-none
                      text-2xl
                      font-black
                      tracking-widest
                      text-muted-foreground/10
                      sm:text-3xl
                    "
                                    >
                                        COMPLETED
                                    </span>
                                )}

                                {/* Locked Overlay */}
                                {isLocked && (
                                    <div
                                        className="
                      pointer-events-none
                      absolute inset-0
                      bg-muted/10
                    "
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className={`
                    relative z-10
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-lg
                    ${
                        isSelected
                            ? "bg-primary/10 text-primary"
                            : isCompleted
                              ? "bg-muted text-muted-foreground"
                              : isLocked
                                ? "bg-muted text-muted-foreground/60"
                                : "bg-muted text-muted-foreground"
                    }
                  `}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <p
                                            className={`
                        truncate text-sm font-medium
                        ${
                            isLocked
                                ? "text-muted-foreground"
                                : "text-foreground"
                        }
                      `}
                                        >
                                            {option.title}
                                        </p>

                                        {isCompleted && (
                                            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                                                Completed
                                            </span>
                                        )}

                                        {isLocked && (
                                            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                                                Locked
                                            </span>
                                        )}
                                    </div>

                                    <p
                                        className={`
                      mt-0.5 text-[11px] leading-4
                      ${
                          isLocked
                              ? "text-muted-foreground/60"
                              : "text-muted-foreground"
                      }
                    `}
                                    >
                                        {isLocked
                                            ? "Complete the previous training to unlock"
                                            : option.description}
                                    </p>
                                </div>

                                {/* Right Indicator */}
                                <div className="relative z-10 shrink-0">
                                    {isLocked ? (
                                        <div
                                            className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        bg-muted
                        text-muted-foreground
                      "
                                        >
                                            <LockKeyhole className="h-4 w-4" />
                                        </div>
                                    ) : (
                                        <div
                                            className={`
                        h-5 w-5 rounded-full border
                        ${
                            isSelected
                                ? "border-primary bg-primary"
                                : "border-border"
                        }
                      `}
                                        >
                                            {isSelected && (
                                                <div className="m-1.5 h-2 w-2 rounded-full bg-primary-foreground" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        Available
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                        Completed
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LockKeyhole className="h-3 w-3" />
                        Locked
                    </div>
                </div>

                {/* Continue */}
                <Button
                    type="button"
                    disabled={!hasSelection}
                    onClick={onContinue}
                    className="
            mt-6
            h-11
            w-full
            rounded-lg
            bg-primary
            text-sm
            font-semibold
            text-primary-foreground
            hover:bg-primary/90
          "
                >
                    Continue
                </Button>
            </div>
        </section>
    );
}