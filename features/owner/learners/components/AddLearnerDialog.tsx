"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

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

import LearnerForm from "./LearnerForm";

export default function AddLearnerDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateLearner() {
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
                        <UserPlus className="mr-2 size-4" />
                        Add Learner
                    </Button>
                }
            />

            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        Add Learner
                    </DialogTitle>

                    <DialogDescription>
                        Register a new learner for your driving school.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateLearner();
                    }}
                >
                    <LearnerForm />

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
                            Create Learner
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}