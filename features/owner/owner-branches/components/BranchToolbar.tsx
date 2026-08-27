"use client";

import { Search, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface BranchToolbarProps {
    search: string;
    status: string;
    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onAddBranch: () => void;
}

export default function BranchToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
    onAddBranch,
}: BranchToolbarProps) {
    return (
        <div className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold mb-3">
                    My Branches
                </h2>
                
                <Button
                    size="sm"
                    onClick={onAddBranch}
                >
                    <Plus className="mr-2 size-4" />
                    Add Branch
                </Button>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative w-full sm:max-w-sm">
                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search branches..."
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
                    <SelectTrigger className="w-full sm:w-40">
                        <SelectValue placeholder="All Status" />
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
        </div>
    );
}