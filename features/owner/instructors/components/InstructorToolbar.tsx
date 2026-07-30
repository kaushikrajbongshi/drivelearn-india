"use client";

import AddInstructorDialog from "./AddInstructorDialog";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface InstructorToolbarProps {
    search: string;
    status: string;
    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function InstructorToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: InstructorToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
                <Input
                    placeholder="Search instructors..."
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    className="sm:max-w-sm"
                />

                <Select
                    value={status}
                    onValueChange={(value) =>
                        value && onStatusChange(value)
                    }
                >
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Status
                        </SelectItem>

                        <SelectItem value="Active">
                            Active
                        </SelectItem>

                        <SelectItem value="Inactive">
                            Inactive
                        </SelectItem>

                        <SelectItem value="On Leave">
                            On Leave
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddInstructorDialog />
        </div>
    );
}