"use client";

import Link from "next/link";
import {
    Eye,
    MoreHorizontal,
    Pencil,
    Power,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { City } from "@/features/admin/cities/types/city";

interface CityActionsProps {
    city: City;
}

export default function CityActions({
    city,
}: CityActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                    />
                }
            >
                <MoreHorizontal className="size-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/cities/${city.id}`}
                        />
                    }
                >
                    <Eye className="mr-2 size-4" />
                    View City
                </DropdownMenuItem>

                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/cities/${city.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit City
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Power className="mr-2 size-4" />

                    {city.status === "active"
                        ? "Deactivate"
                        : "Activate"}
                </DropdownMenuItem>

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete City
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}