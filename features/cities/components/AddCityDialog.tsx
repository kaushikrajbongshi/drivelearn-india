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

import CityForm from "./CityForm";

export default function AddCityDialog() {
    const [open, setOpen] = useState(false);

    function handleCreateCity() {
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
                        Add City
                    </Button>
                }
            />

            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>
                        Add City
                    </DialogTitle>

                    <DialogDescription>
                        Create a new city for the platform.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateCity();
                    }}
                >
                    <CityForm />

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
                            Create City
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}