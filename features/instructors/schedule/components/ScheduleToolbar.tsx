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

interface ScheduleToolbarProps {
    search: string;
    status: string;
    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function ScheduleToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: ScheduleToolbarProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search */}
            <div className="relative w-full md:max-w-sm">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    placeholder="Search students..."
                    className="pl-9"
                />
            </div>

            {/* Status */}
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

                    <SelectItem value="upcoming">
                        Upcoming
                    </SelectItem>

                    <SelectItem value="completed">
                        Completed
                    </SelectItem>

                    <SelectItem value="cancelled">
                        Cancelled
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}