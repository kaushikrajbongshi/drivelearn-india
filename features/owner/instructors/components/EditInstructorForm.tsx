"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import InstructorForm from "./InstructorForm";

import type { Instructor } from "../types/instructor";

interface EditInstructorFormProps {
    instructor: Instructor;
}

export default function EditInstructorForm({
    instructor,
}: EditInstructorFormProps) {
    const router = useRouter();

    const handleSubmit = (
        values: Partial<Instructor>
    ) => {
        console.log(values);

        router.push(
            `/owner/instructors/${instructor.id}`
        );
    };

    return (
        <Card>
            <InstructorForm
                defaultValues={instructor}
                onSubmit={handleSubmit}
                submitLabel="Save Changes"
            />
        </Card>
    );
}