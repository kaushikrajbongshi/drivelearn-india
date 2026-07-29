"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import InstructorForm from "./InstructorForm";
import InstructorAddressSection from "./InstructorAddressSection";
import InstructorProfessionalSection from "./InstructorProfessionalSection";
import InstructorPhotoUpload from "./InstructorPhotoUpload";
import type { Instructor } from "@/features/instructors/types/instructor";

interface EditInstructorFormProps {
    instructor: Instructor;
}

export default function EditInstructorForm({
    instructor,
}: EditInstructorFormProps) {
    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod
        // API
        // Toast
    }

    return (
        <form
            className="space-y-8" 
            onSubmit={handleSubmit}
        >
            <InstructorForm
                defaultValues={instructor}
            />

            <InstructorAddressSection
                defaultValues={instructor}
            />

            <InstructorProfessionalSection
                defaultValues={instructor}
            />

            <InstructorPhotoUpload
                avatar={instructor.avatar}
            />

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/instructors/${instructor.id}`}
                        />
                    }
                >
                    Cancel
                </Button>

                <Button type="submit">
                    Save Changes
                </Button>
            </div>
        </form>
    );
}