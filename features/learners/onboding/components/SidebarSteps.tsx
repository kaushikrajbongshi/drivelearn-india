"use client";

import {
    Check,
    User,
    Building2,
    Package,
    CreditCard,
    Flag,
    SkipForward,
    Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useOnboarding } from "./OnboardingContext";
import type { Step } from "../types/types";

const steps: Step[] = [
    {
        id: "email",
        title: "Email Verified",
        description: "Your email has been verified",
        icon: <Check className="h-4 w-4" />,
    },
    {
        id: "phone",
        title: "Phone Verified",
        description: "Your phone has been verified",
        icon: <Phone className="h-4 w-4" />,
    },
    {
        id: "profile",
        title: "Complete Profile",
        description: "Tell us about yourself",
        icon: <User className="h-4 w-4" />,
    },
    {
        id: "school",
        title: "Choose Driving School",
        description: "Select your preferred school",
        icon: <Building2 className="h-4 w-4" />,
        skippable: true,
    },
    {
        id: "package",
        title: "Select Course Package",
        description: "Choose the right package",
        icon: <Package className="h-4 w-4" />,
        skippable: true,
    },
    {
        id: "payment",
        title: "Payment",
        description: "Secure payment",
        icon: <CreditCard className="h-4 w-4" />,
        skippable: true,
    },
    {
        id: "done",
        title: "You're All Set!",
        description: "Start your learning journey",
        icon: <Flag className="h-4 w-4" />,
    },
];

export function SidebarSteps() {
    const { isStepCompleted, isStepSkipped, isCurrentStep } = useOnboarding();

    return (
        <nav className="mt-10">
            <ul className="space-y-0">
                {steps.map((step, index) => {
                    const completed = isStepCompleted(step.id);
                    const skipped = isStepSkipped(step.id);
                    const current = isCurrentStep(step.id);
                    const isPast = completed || skipped;
                    const isLast = index === steps.length - 1;

                    return (
                        <li key={step.id} className="relative">
                            {!isLast && (
                                <div
                                    className={cn(
                                        "absolute left-[17px] top-9 w-0.5",
                                        "h-[calc(100%_-_0.5rem)]",
                                        completed
                                            ? "bg-emerald-400"
                                            : skipped
                                                ? "bg-amber-300"
                                                : "bg-gray-200"
                                    )}
                                />
                            )}

                            <div
                                className={cn(
                                    "relative flex items-start gap-3.5 py-3.5 transition-all duration-300",
                                    current && " rounded-xl px-2 -mx-2"
                                )}
                            >
                                {/* Icon circle */}
                                <div
                                    className={cn(
                                        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                                        completed &&
                                        "border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-200/50",
                                        skipped &&
                                        "border-amber-400 bg-amber-50 text-amber-600",
                                        current &&
                                        !isPast &&
                                        "border-emerald-500 bg-white text-emerald-600 shadow-md shadow-emerald-100 scale-105",
                                        !isPast &&
                                        !current &&
                                        "border-gray-200 bg-white text-gray-400"
                                    )}
                                >
                                    {completed ? (
                                        <Check
                                            className="h-4 w-4 animate-in zoom-in-50 duration-300"
                                            strokeWidth={2.5}
                                        />
                                    ) : skipped ? (
                                        <SkipForward
                                            className="h-3.5 w-3.5 animate-in zoom-in-50 duration-300"
                                            strokeWidth={2.5}
                                        />
                                    ) : (
                                        step.icon
                                    )}
                                </div>

                                {/* Text */}
                                <div className="min-w-0 pt-1">
                                    <p
                                        className={cn(
                                            "text-[13.5px] font-medium tracking-tight",
                                            current
                                                ? "text-emerald-700"
                                                : completed
                                                    ? "text-gray-800"
                                                    : skipped
                                                        ? "text-amber-700"
                                                        : "text-gray-500"
                                        )}
                                    >
                                        {step.title}
                                        {skipped && (
                                            <span className="ml-1.5 text-[11px] font-normal text-amber-500">
                                                (skipped)
                                            </span>
                                        )}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-500 leading-snug">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}