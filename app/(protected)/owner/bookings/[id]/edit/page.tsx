import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import EditBookingForm from "@/features/owner/bookings/components/EditBookingForm";

import { bookings } from "@/features/owner/bookings/data/bookings";

interface EditBookingPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditBookingPage({
    params,
}: EditBookingPageProps) {
    const { id } = await params;

    const booking = bookings.find(
        (item) => item.id === Number(id)
    );

    if (!booking) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link
                        href={`/owner/bookings/${booking.id}`}
                    />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Booking"
                description={`Update booking information for ${booking.learnerName}.`}
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Booking Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <EditBookingForm
                        booking={booking}
                    />
                </CardContent>
            </Card>
        </div>
    );
}