"use client";

import Link from "next/link";
import {
    Eye,
    MoreHorizontal,
    Pencil,
    Power,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Learner } from "@/features/owner/learners/types/learner";

interface LearnerActionsProps {
    learner: Learner;
}

export default function LearnerActions({
    learner,
}: LearnerActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                    />
                }
            >
                <MoreHorizontal className="size-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/learners/${learner.id}`}
                        />
                    }
                >
                    <Eye className="mr-2 size-4" />
                    View
                </DropdownMenuItem>

                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/learners/${learner.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Power className="mr-2 size-4" />

                    {learner.status === "Active"
                        ? "Deactivate"
                        : "Activate"}
                </DropdownMenuItem>

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}