"use client";

import { OnboardingProvider, useOnboarding } from "./OnboardingContext";
import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function StepControls() {
    const { currentStep, goNext, skipStep } = useOnboarding();

    // Final step → show "Go to Dashboard"
    if (currentStep === "done") {
        return (
            <div className="mt-10">
                <Button
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200/50"
                    onClick={() => {
                        // replace with your router push
                        window.location.href = "/dashboard";
                    }}
                >
                    Continue to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        );
    }

    const canSkip = ["school", "package", "payment"].includes(currentStep);

    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            {canSkip && (
                <Button
                    variant="outline"
                    onClick={skipStep}
                    className="border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                    Skip for now
                </Button>
            )}
            <Button
                onClick={goNext}
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200/40"
            >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
}

export function OnboardingLayout({ children }: { children: React.ReactNode }) {
    return (
        <OnboardingProvider>
            <div className="flex min-h-screen bg-gray-50">
                {/* Left Sidebar */}
                <div className="hidden lg:block">
                    <Sidebar />
                </div>

                {/* Right Content */}
                <main className="flex-1 overflow-y-auto">
                    <div className="mx-auto max-w-2xl px-6 py-10">
                        {children}

                        {/* Temporary controls so you can test the step flow */}
                        <StepControls />
                    </div>
                </main>
            </div>
        </OnboardingProvider>
    );
}