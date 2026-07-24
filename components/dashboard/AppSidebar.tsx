"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/features/dashboard/types/nav";

import Logo from "@/components/layout/navbar/Logo";
import { sidebarIcons } from "@/features/dashboard/config/sidebar-icons";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
    items: NavItem[];
}

export default function AppSidebar({
    items,
}: AppSidebarProps) {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon">

            {/* Header */}
            <SidebarHeader className="border-b">
                <Logo />
            </SidebarHeader>

            {/* Navigation */}
            <SidebarContent>

                <SidebarGroup>

                    <SidebarGroupContent>

                        <SidebarMenu>

                            {items.map((item) => {
                                const Icon = sidebarIcons[item.icon];
                                const isActive = pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>

                                        <SidebarMenuButton
                                            isActive={isActive}
                                            tooltip={item.title}
                                            render={<Link href={item.url} />}
                                        >
                                            <Icon className="size-4" />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>

                                    </SidebarMenuItem>
                                );
                            })}

                        </SidebarMenu>

                    </SidebarGroupContent>

                </SidebarGroup>

            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="border-t p-4 text-xs text-muted-foreground">
                DriveLearn India
            </SidebarFooter>

        </Sidebar>
    );
}