"use client";

import type { LucideIcon } from "lucide-react";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  icon: Icon = SearchX,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 py-12">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-5 rounded-full bg-muted p-4">
          <Icon className="size-10 text-muted-foreground" />
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        {actionLabel && onAction && (
          <Button
            className="mt-6"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}