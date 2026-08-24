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

interface StudentToolbarProps {
    search: string;
    course: string;
    status: string;
    onSearchChange: (value: string) => void;
    onCourseChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function StudentToolbar({
    search,
    course,
    status,
    onSearchChange,
    onCourseChange,
    onStatusChange,
}: StudentToolbarProps) {
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
                        placeholder="Search students..."
                        className="pl-9"
                    />
                </div>

                {/* Course */}
                <Select
                    value={course}
                    onValueChange={(value) =>
                        onCourseChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="Course" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Courses
                        </SelectItem>

                        <SelectItem value="LMV - Car">
                            LMV - Car
                        </SelectItem>

                        <SelectItem value="2-Wheeler">
                            2-Wheeler
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

                        <SelectItem value="active">
                            Active
                        </SelectItem>

                        <SelectItem value="completed">
                            Completed
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