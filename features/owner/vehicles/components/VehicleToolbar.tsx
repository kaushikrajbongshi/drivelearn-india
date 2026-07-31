"use client";

import AddVehicleDialog from "./AddVehicleDialog";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface VehicleToolbarProps {
    search: string;
    status: string;
    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function VehicleToolbar({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: VehicleToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
                <Input
                    placeholder="Search vehicles..."
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    className="sm:max-w-sm"
                />
                <Select
                    value={status}
                    onValueChange={(value) =>
                        onStatusChange(value ?? "all")
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

                        <SelectItem value="Maintenance">
                            Maintenance
                        </SelectItem>

                        <SelectItem value="Inactive">
                            Inactive
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddVehicleDialog />
        </div>
    );
}