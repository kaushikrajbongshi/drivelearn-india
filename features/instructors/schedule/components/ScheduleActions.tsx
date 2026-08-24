"use client";

import Link from "next/link";
import {
    Eye,
    MoreHorizontal,
    Pencil,
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

import type { Schedule } from "../types/schedule";

interface ScheduleActionsProps {
    schedule: Schedule;
}

export default function ScheduleActions({
    schedule,
}: ScheduleActionsProps) {
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
                            href={`/instructor/schedule/${schedule.id}`}
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
                            href={`/instructor/schedule/${schedule.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}