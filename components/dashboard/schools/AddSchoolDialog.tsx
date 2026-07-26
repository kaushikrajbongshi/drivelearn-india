"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

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

import SchoolForm from "./SchoolForm";

export default function AddSchoolDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateSchool() {
        // TODO:
        // React Hook Form
        // Zod Validation
        // API Call
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
                        <Building2 className="mr-2 size-4" />
                        Add School
                    </Button>
                }
            />

            <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        Add Driving School
                    </DialogTitle>

                    <DialogDescription>
                        Fill in the information below to register a
                        new driving school.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateSchool();
                    }}
                >
                    <SchoolForm />

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
                            Create School
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}