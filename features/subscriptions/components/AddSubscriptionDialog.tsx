"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import SubscriptionForm from "./SubscriptionForm";

export default function AddSubscriptionDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateSubscription() {
        // TODO:
        // React Hook Form
        // Zod
        // API
        // Toast

        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger
                render={
                    <Button>
                        <CreditCard className="mr-2 size-4" />
                        Add Subscription
                    </Button>
                }
            />

            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        Add Subscription
                    </DialogTitle>

                    <DialogDescription>
                        Create a new subscription plan for a
                        driving school.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateSubscription();
                    }}
                >
                    <SubscriptionForm />

                    <DialogFooter>
                        <DialogClose
                            render={
                                <Button
                                    type="button"
                                    variant="outline"
                                />
                            }
                        >
                            Cancel
                        </DialogClose>

                        <Button type="submit">
                            Create Subscription
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}