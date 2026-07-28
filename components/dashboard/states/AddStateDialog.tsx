"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";

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

import StateForm from "./StateForm";

export default function AddStateDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateState() {
        // TODO:
        // React Hook Form
        // Zod Validation
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
                        <MapPinned className="mr-2 size-4" />
                        Add State
                    </Button>
                }
            />

            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>
                        Add State
                    </DialogTitle>

                    <DialogDescription>
                        Create a new state for the platform.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateState();
                    }}
                >
                    <StateForm />

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
                            Create State
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}