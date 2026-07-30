"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import InstructorForm from "./InstructorForm";

import type { Instructor } from "../types/instructor";

export default function AddInstructorDialog() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (values: Partial<Instructor>) => {
        console.log(values);

        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger
                render={
                    <Button>
                        <Plus className="mr-2 size-4" />
                        Add Instructor
                    </Button>
                }
            />

            <DialogContent className="max-w-3xl p-0">
                <Card className="border-0 shadow-none">
                    <DialogHeader className="px-6 pt-6">
                        <DialogTitle>
                            Add Instructor
                        </DialogTitle>
                    </DialogHeader>

                    <InstructorForm
                        onSubmit={handleSubmit}
                        submitLabel="Create Instructor"
                    />
                </Card>
            </DialogContent>
        </Dialog>
    );
}