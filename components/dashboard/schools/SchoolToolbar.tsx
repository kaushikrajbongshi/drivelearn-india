"use client";

import { Building2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import AddSchoolDialog from "./AddSchoolDialog";

interface SchoolToolbarProps {
    search: string;
    state: string;
    verification: string;
    status: string;

    onSearchChange: (value: string) => void;
    onStateChange: (value: string) => void;
    onVerificationChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function SchoolToolbar({
    search,
    state,
    verification,
    status,
    onSearchChange,
    onStateChange,
    onVerificationChange,
    onStatusChange,
}: SchoolToolbarProps) {
    return (
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative md:col-span-2 xl:col-span-1">
                    <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search schools..."
                        className="pl-9"
                    />
                </div>

                {/* State */}
                <Select
                    value={state}
                    onValueChange={(value) => onStateChange(value ?? "all")}
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="State" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">All States</SelectItem>
                        <SelectItem value="Assam">Assam</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Punjab">Punjab</SelectItem>
                        <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="Uttar Pradesh">
                            Uttar Pradesh
                        </SelectItem>
                        <SelectItem value="West Bengal">
                            West Bengal
                        </SelectItem>
                    </SelectContent>
                </Select>

                {/* Verification */}
                <Select
                    value={verification}
                    onValueChange={(value) =>
                        onVerificationChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="Verification" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Verification
                        </SelectItem>

                        <SelectItem value="verified">
                            Verified
                        </SelectItem>

                        <SelectItem value="pending">
                            Pending
                        </SelectItem>

                        <SelectItem value="rejected">
                            Rejected
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

                        <SelectItem value="inactive">
                            Inactive
                        </SelectItem>

                        <SelectItem value="suspended">
                            Suspended
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddSchoolDialog />
        </div>
    );
}