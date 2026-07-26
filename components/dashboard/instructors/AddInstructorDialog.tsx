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

import InstructorForm from "./InstructorForm";
export default function AddInstructorDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateInstructor() {
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
                        <UserPlus className="mr-2 size-4" />
                        Add Instructor
                    </Button>
                }
            />

            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        Add Instructor
                    </DialogTitle>

                    <DialogDescription>
                        Enter the basic information to create a
                        new instructor. Additional details can
                        be configured later.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateInstructor();
                    }}
                >
                    <InstructorForm />

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
                            Create Instructor
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}