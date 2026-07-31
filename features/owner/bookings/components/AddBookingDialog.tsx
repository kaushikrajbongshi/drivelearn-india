"use client";

import { useState } from "react";

import { CalendarPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import BookingForm from "./BookingForm";

import type { Booking } from "../types/booking";

export default function AddBookingDialog() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (
        values: Partial<Booking>
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
                        <CalendarPlus className="mr-2 size-4" />
                        Add Booking
                    </Button>
                }
            />

            <DialogContent className="max-w-3xl p-0">
                <Card className="border-0 shadow-none">
                    <DialogHeader className="px-6 pt-6">
                        <DialogTitle>
                            Add Booking
                        </DialogTitle>
                    </DialogHeader>

                    <BookingForm
                        onSubmit={handleSubmit}
                        submitLabel="Create Booking"
                    />
                </Card>
            </DialogContent>
        </Dialog>
    );
}