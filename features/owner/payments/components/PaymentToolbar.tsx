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

interface PaymentToolbarProps {
    search: string;
    status: string;
    onSearchChange: (
        value: string
    ) => void;
    onStatusChange: (
        value: string | null
    ) => void;
}

export default function PaymentToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: PaymentToolbarProps) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    placeholder="Search payments..."
                    value={search}
                    onChange={(e) =>
                        onSearchChange(
                            e.target.value
                        )
                    }
                    className="pl-9"
                />
            </div>

            <Select
                value={status}
                onValueChange={
                    onStatusChange
                }
            >
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">
                        All Status
                    </SelectItem>

                    <SelectItem value="Paid">
                        Paid
                    </SelectItem>

                    <SelectItem value="Pending">
                        Pending
                    </SelectItem>

                    <SelectItem value="Failed">
                        Failed
                    </SelectItem>

                    <SelectItem value="Refunded">
                        Refunded
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}