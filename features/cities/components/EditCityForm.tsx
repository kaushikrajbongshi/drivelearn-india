"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import CityForm from "./CityForm";

import type { City } from "@/features/cities/types/city";

interface EditCityFormProps {
    city: City;
}

export default function EditCityForm({
    city,
}: EditCityFormProps) {
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
            <CityForm
                defaultValues={city}
            />

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/cities/${city.id}`}
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