"use client";

import { Button } from "@/components/ui/button";
import Logo from "../navbar/Logo";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function LearnerNavbar() {
    const { theme, setTheme } = useTheme();
    return (
        <header className="sticky top-0 z-50 border-b  dark:bg-[#202020] backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Logo />
                {/* Theme Toggle */}
                <Button
                    variant= "ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="relative"
                >
                    <Sun className="size-5 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute size-5 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
                </Button>
            </div>
        </header>
    );
}