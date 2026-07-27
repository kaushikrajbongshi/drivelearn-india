"use client";

import { Search, UserPlus } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import AddLearnerDialog from "./AddLearnerDialog";

interface LearnerToolbarProps {
    search: string;
    school: string;
    status: string;

    onSearchChange: (value: string) => void;
    onSchoolChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function LearnerToolbar({
    search,
    school,
    status,
    onSearchChange,
    onSchoolChange,
    onStatusChange,
}: LearnerToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 md:flex-row">
                {/* Search */}
                <div className="relative w-full md:max-w-sm">
                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search learners..."
                        className="pl-9"
                    />
                </div>

                {/* School Filter */}
                <Select
                    value={school}
                    onValueChange={(value) =>
                        onSchoolChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="School" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Schools
                        </SelectItem>

                        <SelectItem value="SCH-1001">
                            Driving School 1
                        </SelectItem>

                        <SelectItem value="SCH-1002">
                            Driving School 2
                        </SelectItem>

                        <SelectItem value="SCH-1003">
                            Driving School 3
                        </SelectItem>

                        <SelectItem value="SCH-1004">
                            Driving School 4
                        </SelectItem>

                        <SelectItem value="SCH-1005">
                            Driving School 5
                        </SelectItem>
                    </SelectContent>
                </Select>

                {/* Status Filter */}
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

                        <SelectItem value="pending">
                            Pending
                        </SelectItem>

                        <SelectItem value="completed">
                            Completed
                        </SelectItem>

                        <SelectItem value="suspended">
                            Suspended
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddLearnerDialog />
        </div>
    );
}