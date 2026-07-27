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

interface SupportToolbarProps {
    search: string;
    priority: string;
    status: string;

    onSearchChange: (value: string) => void;
    onPriorityChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function SupportToolbar({
    search,
    priority,
    status,
    onSearchChange,
    onPriorityChange,
    onStatusChange,
}: SupportToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-3 md:flex-row">
                {/* Search */}
                <div className="relative w-full md:max-w-sm">
                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search tickets..."
                        className="pl-9"
                    />
                </div>

                {/* Priority */}
                <Select
                    value={priority}
                    onValueChange={(value) =>
                        onPriorityChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="Priority" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Priorities
                        </SelectItem>

                        <SelectItem value="low">
                            Low
                        </SelectItem>

                        <SelectItem value="medium">
                            Medium
                        </SelectItem>

                        <SelectItem value="high">
                            High
                        </SelectItem>
                    </SelectContent>
                </Select>

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

                        <SelectItem value="open">
                            Open
                        </SelectItem>

                        <SelectItem value="in-progress">
                            In Progress
                        </SelectItem>

                        <SelectItem value="resolved">
                            Resolved
                        </SelectItem>

                        <SelectItem value="closed">
                            Closed
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}