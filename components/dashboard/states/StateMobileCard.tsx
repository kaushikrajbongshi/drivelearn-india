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

import StateStatusBadge from "./StateStatusBadge";

import type { State } from "@/features/admin/states/types/state";

interface StateMobileCardProps {
    state: State;
}

export default function StateMobileCard({
    state,
}: StateMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {state.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {state.code}
                        </p>
                    </div>

                    <StateStatusBadge
                        status={state.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <MapPinned className="size-4 text-muted-foreground" />

                        <span>
                            {state.totalCities} Cities
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Building2 className="size-4 text-muted-foreground" />

                        <span>
                            {state.totalSchools} Schools
                        </span>
                    </div>
                </div>

                <div className="flex justify-end border-t pt-4">
                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/states/${state.id}`}
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