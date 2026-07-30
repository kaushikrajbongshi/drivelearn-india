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

import AddLearnerDialog from "./AddLearnerDialog";

interface LearnerToolbarProps {
    search: string;
    status: string;
    paymentStatus: string;

    onSearchChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onPaymentStatusChange: (value: string) => void;
}

export default function LearnerToolbar({
    search,
    status,
    paymentStatus,
    onSearchChange,
    onStatusChange,
    onPaymentStatusChange,
}: LearnerToolbarProps) {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 lg:flex-row">
                <div className="relative w-full lg:max-w-sm">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search learners..."
                        className="pl-9"
                    />
                </div>

                <Select
                    value={status}
                    onValueChange={(value) =>
                        onStatusChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full lg:w-44">
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

                        <SelectItem value="Completed">
                            Completed
                        </SelectItem>
                    </SelectContent>
                </Select>

                <Select
                    value={paymentStatus}
                    onValueChange={(value) =>
                        onPaymentStatusChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full lg:w-48">
                        <SelectValue placeholder="Payment" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Payments
                        </SelectItem>

                        <SelectItem value="Paid">
                            Paid
                        </SelectItem>

                        <SelectItem value="Pending">
                            Pending
                        </SelectItem>

                        <SelectItem value="Overdue">
                            Overdue
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddLearnerDialog />
        </div>
    );
}