"use client";

import {
    Building2,
    Mail,
    MapPin,
    Pencil,
    Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface SchoolOverviewProps {
    school: {
        name: string;
        code: string;
        city: string;
        state: string;
        phone: string;
        email: string;
    };
    onEdit?: () => void;
}

export default function SchoolOverview({
    school,
    onEdit,
}: SchoolOverviewProps) {
    return (
        <Card>
            <CardContent className="p-5">
                <div className="space-y-4">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        {/* School Icon */}
                        <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Building2 className="size-9 text-primary" />
                        </div>

                        {/* School Information */}
                        <div className="min-w-0 flex-1 space-y-2">
                            <h3 className="text-lg font-semibold">
                                {school.name}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="size-4 shrink-0" />
                                <span>
                                    {school.city}, {school.state}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="size-4 shrink-0" />
                                <span>{school.phone}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="size-4 shrink-0" />
                                <span>{school.email}</span>
                            </div>
                        </div>

                        {/* Edit */}
                        <Button
                            variant="outline"
                            className="shrink-0"
                            onClick={onEdit}
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit School Details
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}