"use client";

import { LifeBuoy } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SidebarFooter() {
    return (
        <div className="mt-auto px-6 pb-6">
            <div className="space-y-2">
                {/* Help */}
                <Button
                    variant="ghost"
                    className="h-auto w-full justify-start gap-3 rounded-xl px-3 py-0"
                >
                    <LifeBuoy className="h-5 w-5 text-primary" />

                    <div className="text-left">
                        <p className="text-sm font-medium">
                            Need help?
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Contact our support team
                        </p>
                    </div>
                </Button>
            </div>
        </div>
    );
}