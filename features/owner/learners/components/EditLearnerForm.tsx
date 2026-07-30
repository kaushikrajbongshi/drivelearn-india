"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import LearnerForm from "./LearnerForm";

import type { Learner } from "@/features/owner/learners/types/learner";

interface EditLearnerFormProps {
    learner: Learner;
}

export default function EditLearnerForm({
    learner,
}: EditLearnerFormProps) {
    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod Validation
        // API
        // Toast
    }

    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit}
        >
            <LearnerForm
                defaultValues={learner}
            />

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/learners/${learner.id}`}
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