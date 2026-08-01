"use client";

import type { LucideIcon } from "lucide-react";
import {
    AlertTriangle,
    RotateCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ErrorStateProps {
    title?: string;
    description?: string;
    icon?: LucideIcon;
    actionLabel?: string;
    onAction?: () => void;
}

export default function ErrorState({
    title = "Something went wrong",
    description = "We couldn't load the requested data. Please try again.",
    icon: Icon = AlertTriangle,
    actionLabel = "Try Again",
    onAction,
}: ErrorStateProps) {
    return (
        <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-dashed bg-destructive/5 px-6 py-12">
            <div className="flex max-w-md flex-col items-center text-center">
                <div className="mb-5 rounded-full bg-destructive/10 p-4">
                    <Icon className="size-10 text-destructive" />
                </div>

                <h3 className="text-xl font-semibold">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                </p>

                {onAction && (
                    <Button
                        className="mt-6"
                        onClick={onAction}
                    >
                        <RotateCw className="mr-2 size-4" />
                        {actionLabel}
                    </Button>
                )}
            </div>
        </div>
    );
}