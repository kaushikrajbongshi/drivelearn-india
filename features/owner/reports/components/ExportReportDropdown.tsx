"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ExportReportDropdown() {
    const handleExport = (
        type: "pdf" | "excel" | "csv"
    ) => {
        console.log(`Export ${type}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button>
                        <Download className="mr-2 size-4" />
                        Export Report
                    </Button>
                }
            />

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() =>
                        handleExport("pdf")
                    }
                >
                    Export as PDF
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() =>
                        handleExport("excel")
                    }
                >
                    Export as Excel
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() =>
                        handleExport("csv")
                    }
                >
                    Export as CSV
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}