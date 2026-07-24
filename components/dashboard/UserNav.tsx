"use client";

import Link from "next/link";
import {
    ChevronsUpDown,
    LogOut,
    Settings,
    User,
} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

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

export default function UserNav() {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        className="h-11 gap-2 rounded-xl px-2"
                    />
                }
            >
                <Avatar className="size-8">
                    <AvatarImage src="/avatar.png" alt="Kaushik Rajbongshi" />
                    <AvatarFallback>KR</AvatarFallback>
                </Avatar>

                <div className="hidden text-left md:block">
                    <p className="text-sm font-semibold">
                        Kaushik Rajbongshi
                    </p>

                    <p className="text-xs text-muted-foreground">
                        Learner
                    </p>
                </div>

                <ChevronsUpDown className="hidden size-4 opacity-60 md:block" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64 rounded-2xl"
            >

                <DropdownMenuGroup>

                    <DropdownMenuLabel>

                        <div className="flex items-center gap-3">

                            <Avatar className="size-10">
                                <AvatarImage src="/avatar.png" alt="Kaushik Rajbongshi" />
                                <AvatarFallback>KR</AvatarFallback>
                            </Avatar>

                            <div>
                                <p className="font-semibold">
                                    Kaushik Rajbongshi
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    kaushik@example.com
                                </p>
                            </div>

                        </div>

                    </DropdownMenuLabel>

                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>

                    <Link href="/profile">
                        <DropdownMenuItem>
                            <User className="mr-2 size-4" />
                            Profile
                        </DropdownMenuItem>
                    </Link>

                    <Link href="/settings">
                        <DropdownMenuItem>
                            <Settings className="mr-2 size-4" />
                            Settings
                        </DropdownMenuItem>
                    </Link>

                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 size-4" />
                    Logout
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}