"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import StateForm from "./StateForm";

import type { State } from "@/features/states/types/state";

interface EditStateFormProps {
    state: State;
}

export default function EditStateForm({
    state,
}: EditStateFormProps) {
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
            <StateForm
                defaultValues={state}
            />

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/states/${state.id}`}
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