"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import AddBookingDialog from "./AddBookingDialog";

interface BookingToolbarProps {
    search: string;
    status: string;

    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function BookingToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: BookingToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 md:flex-row">
                <div className="relative w-full md:max-w-sm">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search bookings..."
                        className="pl-9"
                    />
                </div>

                <Select
                    value={status}
                    onValueChange={(value) =>
                        onStatusChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Status
                        </SelectItem>

                        <SelectItem value="Scheduled">
                            Scheduled
                        </SelectItem>

                        <SelectItem value="Ongoing">
                            Ongoing
                        </SelectItem>

                        <SelectItem value="Completed">
                            Completed
                        </SelectItem>

                        <SelectItem value="Cancelled">
                            Cancelled
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddBookingDialog />
        </div>
    );
}