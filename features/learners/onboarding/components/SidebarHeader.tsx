"use client";

import Logo from "@/components/layout/navbar/Logo";


interface SidebarHeaderProps {
    completedSteps: number;
    totalSteps: number;
}

export default function SidebarHeader({

}: SidebarHeaderProps) {

    return (
        <div className="border-b px-6 py-6">
            <Logo />
        </div>
    );
}