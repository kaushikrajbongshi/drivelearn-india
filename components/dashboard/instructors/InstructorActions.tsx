"use client";

import Link from "next/link";
import {
    Eye,
    MoreHorizontal,
    Pencil,
    Trash2,
    UserX,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Instructor } from "@/features/admin/instructors/types/instructor";

interface InstructorActionsProps {
    instructor: Instructor;
}

export default function InstructorActions({
    instructor,
}: InstructorActionsProps) {
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
                            href={`/admin/instructors/${instructor.id}`}
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
                            href={`/admin/instructors/${instructor.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <UserX className="mr-2 size-4" />
                    Suspend
                </DropdownMenuItem>

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}