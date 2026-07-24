import type { ReactNode } from "react";

import AuthNavbar from "@/components/layout/auth/AuthNavbar";


export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex h-dvh flex-col ">
            <AuthNavbar />

            <main className="flex-1 flex items-center justify-center px-4 mt-4">
                {children}
            </main>
        </div>
    );
}