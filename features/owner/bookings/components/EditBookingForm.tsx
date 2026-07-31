"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import BookingForm from "./BookingForm";

import type { Booking } from "../types/booking";

interface EditBookingFormProps {
    booking: Booking;
}

export default function EditBookingForm({
    booking,
}: EditBookingFormProps) {
    const router = useRouter();

    const handleSubmit = (
        values: Partial<Booking>
    ) => {
        console.log(values);

        router.push(
            `/owner/bookings/${booking.id}`
        );
    };

    return (
        <Card>
            <BookingForm
                defaultValues={booking}
                onSubmit={handleSubmit}
                submitLabel="Save Changes"
            />
        </Card>
    );
}