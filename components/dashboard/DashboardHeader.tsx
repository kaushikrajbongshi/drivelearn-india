"use client";

import SearchBar from "./SearchBar";
import NotificationNav from "./NotificationNav";
import DashboardBreadcrumb from "./DashboardBreadcrumb";

import ThemeToggle from "@/components/theme-toggle";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import UserNav from "./UserNav";

export default function DashboardHeader() {
    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur">

            <div className="flex w-full items-center gap-4 px-6">

                {/* Sidebar */}
                <SidebarTrigger />

                <Separator
                    orientation="vertical"
                    className="h-5"
                />

                {/* Breadcrumb */}
                <DashboardBreadcrumb />

                {/* Right */}
                <div className="ml-auto flex items-center gap-3">

                    <SearchBar />

                    <ThemeToggle />

                    <NotificationNav />

                    <UserNav />

                </div>

            </div>

        </header>
    );
}