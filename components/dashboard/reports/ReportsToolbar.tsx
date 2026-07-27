"use client";

import {
    CalendarDays,
    Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ReportsToolbar() {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-3">
                <Select defaultValue="30">
                    <SelectTrigger className="w-48">
                        <CalendarDays className="mr-2 size-4" />

                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="7">
                            Last 7 Days
                        </SelectItem>

                        <SelectItem value="30">
                            Last 30 Days
                        </SelectItem>

                        <SelectItem value="90">
                            Last 90 Days
                        </SelectItem>

                        <SelectItem value="365">
                            Last 12 Months
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button>
                <Download className="mr-2 size-4" />
                Export Report
            </Button>
        </div>
    );
}