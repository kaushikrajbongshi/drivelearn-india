"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import AddStateDialog from "./AddStateDialog";

interface StateToolbarProps {
    search: string;
    status: string;

    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function StateToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: StateToolbarProps) {
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
                        placeholder="Search states..."
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

                        <SelectItem value="active">
                            Active
                        </SelectItem>

                        <SelectItem value="inactive">
                            Inactive
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddStateDialog />
        </div>
    );
}