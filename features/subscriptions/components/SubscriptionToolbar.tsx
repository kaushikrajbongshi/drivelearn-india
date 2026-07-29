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

import AddSubscriptionDialog from "./AddSubscriptionDialog";

interface SubscriptionToolbarProps {
    search: string;
    plan: string;
    status: string;

    onSearchChange: (value: string) => void;
    onPlanChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

export default function SubscriptionToolbar({
    search,
    plan,
    status,
    onSearchChange,
    onPlanChange,
    onStatusChange,
}: SubscriptionToolbarProps) {
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
                        placeholder="Search subscriptions..."
                        className="pl-9"
                    />
                </div>

                {/* Plan */}
                <Select
                    value={plan}
                    onValueChange={(value) =>
                        onPlanChange(value ?? "all")
                    }
                >
                    <SelectTrigger className="w-full md:w-44">
                        <SelectValue placeholder="Plan" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            All Plans
                        </SelectItem>

                        <SelectItem value="free">
                            Free
                        </SelectItem>

                        <SelectItem value="basic">
                            Basic
                        </SelectItem>

                        <SelectItem value="premium">
                            Premium
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

                        <SelectItem value="expired">
                            Expired
                        </SelectItem>

                        <SelectItem value="cancelled">
                            Cancelled
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <AddSubscriptionDialog />
        </div>
    );
}