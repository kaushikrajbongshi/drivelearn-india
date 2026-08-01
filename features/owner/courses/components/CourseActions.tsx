"use client";

import Link from "next/link";
import { useState } from "react";

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

import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";

import type { Course } from "../types/course";

interface CourseActionsProps {
    course: Course;
}

export default function CourseActions({
    course,
}: CourseActionsProps) {
    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    return (
        <>
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
                                href={`/owner/courses/${course.id}`}
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
                                href={`/owner/courses/${course.id}/edit`}
                            />
                        }
                    >
                        <Pencil className="mr-2 size-4" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <Power className="mr-2 size-4" />

                        {course.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        onClick={() => setOpenDeleteDialog(true)}
                        className="text-destructive focus:text-destructive"
                    >
                        <Trash2 className="mr-2 size-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DeleteConfirmationDialog
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                title="Delete Course"
                description="Are you sure you want to delete this course? This action cannot be undone."
                onConfirm={() => {
                    console.log("Delete Course");
                }}
            />
        </>
    );
}


