"use client";

import Link from "next/link";
import {
    Eye,
    MoreHorizontal,
    Pencil,
    Trash2,
    Ban,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Subscription } from "@/features/admin/subscriptions/types/subscription";

interface SubscriptionActionsProps {
    subscription: Subscription;
}

export default function SubscriptionActions({
    subscription,
}: SubscriptionActionsProps) {
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
                            href={`/admin/subscriptions/${subscription.id}`}
                        />
                    }
                >
                    <Eye className="mr-2 size-4" />
                    View
                </DropdownMenuItem>

                <DropdownMenuItem
                    nativeButton={false}
                    render={
                        <Link
                            href={`/admin/subscriptions/${subscription.id}/edit`}
                        />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Ban className="mr-2 size-4" />
                    Cancel Subscription
                </DropdownMenuItem>

                <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash2 className="mr-2 size-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}