"use client";

import { useState } from "react";

import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import CourseForm from "./CourseForm";

import type { Course } from "../types/course";

export default function AddCourseDialog() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (
        values: Partial<Course>
    ) => {
        console.log(values);

        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger
                render={
                    <Button>
                        <BookOpen className="mr-2 size-4" />
                        Add Course
                    </Button>
                }
            />

            <DialogContent className="max-w-3xl p-0">
                <Card className="border-0 shadow-none">
                    <DialogHeader className="px-6 pt-6">
                        <DialogTitle>
                            Add Course
                        </DialogTitle>
                    </DialogHeader>

                    <CourseForm
                        onSubmit={handleSubmit}
                        submitLabel="Create Course"
                    />
                </Card>
            </DialogContent>
        </Dialog>
    );
}