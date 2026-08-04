"use client";

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { SidebarStep } from "../types/onboarding";

interface SidebarStepsProps {
    steps: SidebarStep[];
}

export default function SidebarSteps({
    steps,
}: SidebarStepsProps) {
    return (
        <div className="flex flex-col">
            {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                    <div
                        key={step.id}
                        className="relative flex gap-4 pb-8 last:pb-0"
                    >
                        {/* Vertical Line */}
                        {!isLast && (
                            <div className="absolute left-5 top-10 h-full w-px bg-border">
                                <div
                                    className={cn(
                                        "w-full origin-top bg-primary transition-all duration-500 ease-in-out",
                                        step.status === "completed"
                                            ? "h-full"
                                            : "h-0"
                                    )}
                                />
                            </div>
                        )}

                        {/* Step Circle */}
                        <div className="relative z-10 flex h-10 w-10 items-center justify-center">
                            <div
                                className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",

                                    step.status === "completed" &&
                                    "border-primary bg-primary text-primary-foreground scale-100",

                                    step.status === "current" &&
                                    "border-primary bg-background text-primary ring-4 ring-primary/15 scale-110",

                                    step.status === "upcoming" &&
                                    "border-muted-foreground/30 bg-background text-muted-foreground"
                                )}
                            >
                                {step.status === "completed" ? (
                                    <Check className="h-5 w-5 animate-in zoom-in duration-300" />
                                ) : (
                                    <span className="text-sm font-semibold">
                                        {step.id}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                            <div className="flex items-center gap-2">
                                <h3
                                    className={cn(
                                        "text-sm font-semibold transition-colors",

                                        step.status === "current" &&
                                        "text-foreground",

                                        step.status === "completed" &&
                                        "text-foreground",

                                        step.status === "upcoming" &&
                                        "text-muted-foreground"
                                    )}
                                >
                                    {step.title}
                                </h3>

                                {step.optional && (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-full"
                                    >
                                        Optional
                                    </Badge>
                                )}
                            </div>

                            <p
                                className={cn(
                                    "mt-1 text-sm leading-relaxed",

                                    step.status === "upcoming"
                                        ? "text-muted-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {step.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}