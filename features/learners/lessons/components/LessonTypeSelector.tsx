"use client";

import { CarFront, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface LessonTypeSelectorProps {
    selectedType: "manual" | "automatic" | null;
    onChange: (type: "manual" | "automatic") => void;
    onContinue: () => void;
}

const lessonTypes = [
    {
        id: "manual" as const,
        title: "Manual Transmission",
        description: "Learn to drive a manual vehicle",
    },
    {
        id: "automatic" as const,
        title: "Automatic Transmission",
        description: "Learn to drive an automatic vehicle",
    },
];

export default function LessonTypeSelector({
    selectedType,
    onChange,
    onContinue,
}: LessonTypeSelectorProps) {
    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Step Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                </div>

                <h2 className="text-sm font-semibold text-card-foreground">
                    Lesson Type
                </h2>
            </div>

            <div className="p-5">
                {/* Heading */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground">
                        Select Lesson Type
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Choose the type of lesson you want to take
                    </p>
                </div>

                {/* Options */}
                <div className="mt-5 space-y-3">
                    {lessonTypes.map((type) => {
                        const isSelected = selectedType === type.id;

                        return (
                            <button
                                key={type.id}
                                type="button"
                                onClick={() => onChange(type.id)}
                                className={`
                  flex w-full items-center gap-3 rounded-xl
                  border p-3.5 text-left
                  transition-all duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  ${isSelected
                                        ? "border-primary bg-primary/5"
                                        : "border-border bg-card hover:bg-muted"
                                    }
                `}
                            >
                                {/* Icon */}
                                <div
                                    className={`
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-lg
                    ${isSelected
                                            ? "bg-primary/10 text-primary"
                                            : "bg-muted text-muted-foreground"
                                        }
                  `}
                                >
                                    <CarFront className="h-5 w-5" />
                                </div>

                                {/* Text */}
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-foreground">
                                        {type.title}
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                                        {type.description}
                                    </p>
                                </div>

                                {/* Radio */}
                                <div
                                    className={`
                    flex h-5 w-5 shrink-0 items-center justify-center
                    rounded-full border
                    ${isSelected
                                            ? "border-primary bg-primary"
                                            : "border-border"
                                        }
                  `}
                                >
                                    {isSelected && (
                                        <Check className="h-3 w-3 text-primary-foreground" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Continue */}
                <Button
                    type="button"
                    disabled={!selectedType}
                    onClick={onContinue}
                    className="mt-6 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                    Continue
                </Button>
            </div>
        </section>
    );
}