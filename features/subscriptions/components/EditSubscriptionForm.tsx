"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import SubscriptionForm from "./SubscriptionForm";

import type { Subscription } from "@/features/subscriptions/types/subscription";

interface EditSubscriptionFormProps {
    subscription: Subscription;
}

export default function EditSubscriptionForm({
    subscription,
}: EditSubscriptionFormProps) {
    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod Validation
        // API Call
        // Toast
    }

    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit}
        >
            <SubscriptionForm
                defaultValues={subscription}
            />

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/subscriptions/${subscription.id}`}
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