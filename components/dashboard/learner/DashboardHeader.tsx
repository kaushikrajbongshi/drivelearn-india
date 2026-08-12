"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    Bell,
    CalendarCheck,
    GraduationCap,
    LayoutDashboard,
    LogOut,
    Menu,
    Moon,
    Settings,
    Sun,
    User,
} from "lucide-react";

import Logo from "@/components/layout/navbar/Logo";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { learnerNav } from "@/features/dashboard/config/learner-nav";


const iconMap = {
    "layout-dashboard": LayoutDashboard,
    "graduation-cap": GraduationCap,
    "calendar-check": CalendarCheck,
    user: User,
    bell: Bell,
    settings: Settings,
};

export default function DashboardHeader() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/90 backdrop-blur-xl dark:border-white/[0.08] dark:bg-neutral-950/90">
            <div className="flex h-16 w-full items-center justify-between px-5 sm:px-7 lg:px-8">
                {/* Logo */}
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="h-10 w-10 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
                    >
                        {!mounted ? (
                            <span className="h-[18px] w-[18px]" />
                        ) : isDark ? (
                            <Sun className="h-[18px] w-[18px]" />
                        ) : (
                            <Moon className="h-[18px] w-[18px]" />
                        )}
                    </Button>

                    {/* Navigation Drawer */}
                    <Sheet>
                        <SheetTrigger
                            render={
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Open navigation"
                                    className="h-10 w-10 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
                                />
                            }
                        >
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-[300px] border-l border-neutral-200 bg-white p-0 dark:border-white/10 dark:bg-neutral-950 sm:w-[360px]"
                        >
                            {/* Drawer Header */}


                            {/* Navigation */}
                            <nav className="px-4 py-6">
                                <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 dark:text-zinc-600">
                                    Menu
                                </p>

                                <div className="space-y-1">
                                    {learnerNav.map((item) => {
                                        const Icon =
                                            iconMap[item.icon as keyof typeof iconMap];

                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
                                            >
                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:border-white/10 dark:text-zinc-500 dark:group-hover:border-emerald-400/30 dark:group-hover:text-emerald-400">
                                                    {Icon && <Icon className="h-4 w-4" />}
                                                </span>

                                                <span className="flex-1">
                                                    {item.title}
                                                </span>

                                                {item.badge && (
                                                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1.5 text-[10px] font-semibold text-white dark:bg-emerald-500">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </nav>


                            {/* Bottom */}
                            <div className="absolute inset-x-0 bottom-0 border-t border-neutral-200/70 p-5 dark:border-white/[0.08]">
                                <div className="flex flex-col gap-4">

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="group w-full justify-start rounded-xl px-3 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300"
                                    >
                                        <LogOut className="mr-3 h-4 w-4" />
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}