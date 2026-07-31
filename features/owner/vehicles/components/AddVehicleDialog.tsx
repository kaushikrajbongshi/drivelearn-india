"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import VehicleForm from "./VehicleForm";

import type { Vehicle } from "../types/vehicle";

export default function AddVehicleDialog() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (
        values: Partial<Vehicle>
    ) => {
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
                        Add Vehicle
                    </Button>
                }
            />

            <DialogContent className="max-w-3xl p-0">
                <Card className="border-0 shadow-none">
                    <DialogHeader className="px-6 pt-6">
                        <DialogTitle>
                            Add Vehicle
                        </DialogTitle>
                    </DialogHeader>

                    <VehicleForm
                        onSubmit={handleSubmit}
                        submitLabel="Create Vehicle"
                    />
                </Card>
            </DialogContent>
        </Dialog>
    );
}