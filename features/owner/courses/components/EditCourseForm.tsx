"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import CourseForm from "./CourseForm";

import type { Course } from "../types/course";

interface EditCourseFormProps {
    course: Course;
}

export default function EditCourseForm({
    course,
}: EditCourseFormProps) {
    const router = useRouter();

    const handleSubmit = (
        values: Partial<Course>
    ) => {
        console.log(values);

        router.push(
            `/owner/courses/${course.id}`
        );
    };

    return (
        <Card>
            <CourseForm
                defaultValues={course}
                onSubmit={handleSubmit}
                submitLabel="Save Changes"
            />
        </Card>
    );
}