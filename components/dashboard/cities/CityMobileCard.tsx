"use client";

import Link from "next/link";
import {
    Building2,
    MapPinned,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import CityStatusBadge from "./CityStatusBadge";

import type { City } from "@/features/admin/cities/types/city";

interface CityMobileCardProps {
    city: City;
}

export default function CityMobileCard({
    city,
}: CityMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {city.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {city.stateName}
                        </p>
                    </div>

                    <CityStatusBadge
                        status={city.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <MapPinned className="size-4 text-muted-foreground" />

                        <span>{city.stateName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Building2 className="size-4 text-muted-foreground" />

                        <span>
                            {city.totalSchools} Schools
                        </span>
                    </div>
                </div>

                <div className="flex justify-end border-t pt-4">
                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/cities/${city.id}`}
                            />
                        }
                    >
                        View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}