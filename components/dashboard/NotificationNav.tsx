"use client";

import { Bell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NotificationNav() {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative rounded-xl"
                    />
                }
            >
                <Bell className="size-5" />

                <Badge className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full px-1 text-[10px]">
                    3
                </Badge>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-80 rounded-2xl"
            >

                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        Notifications
                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                    <p className="font-medium">
                        New booking request
                    </p>

                    <span className="text-xs text-muted-foreground">
                        2 minutes ago
                    </span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                    <p className="font-medium">
                        Payment received
                    </p>

                    <span className="text-xs text-muted-foreground">
                        15 minutes ago
                    </span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                    <p className="font-medium">
                        Profile updated
                    </p>

                    <span className="text-xs text-muted-foreground">
                        Yesterday
                    </span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="justify-center font-medium">
                    View all notifications
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}