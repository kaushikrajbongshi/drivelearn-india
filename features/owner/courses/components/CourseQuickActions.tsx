"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Pencil,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";

import type { Course } from "../types/course";

interface CourseQuickActionsProps {
    course: Course;
}

export default function CourseQuickActions({
    course,
}: CourseQuickActionsProps) {
    const [openDeleteDialog, setOpenDeleteDialog] =
        useState(false);

    const handleDelete = () => {
        console.log(
            "Delete Course:",
            course.id
        );

        // TODO:
        // await deleteCourse(course.id);
    };

    return (
        <>
            <div className="space-y-3">
                <Button
                    className="w-full justify-center"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/courses/${course.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit Course
                </Button>

                <Button
                    variant="destructive"
                    className="w-full justify-center"
                    onClick={() => setOpenDeleteDialog(true)}
                >
                    <Trash2 className="mr-2 size-4" />
                    Delete Course
                </Button>
            </div>

            <DeleteConfirmationDialog
                open={openDeleteDialog}
                onOpenChange={setOpenDeleteDialog}
                title="Delete Course"
                description="Are you sure you want to delete this course? This action cannot be undone."
                onConfirm={handleDelete}
            />
        </>
    );
}