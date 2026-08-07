"use client";

import Logo from "../navbar/Logo";
import ThemeToggle from "@/components/theme-toggle";

export default function AuthNavbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Logo />
                {/* Theme Toggle */}
                <ThemeToggle />

            </div>
        </header>
    );
}