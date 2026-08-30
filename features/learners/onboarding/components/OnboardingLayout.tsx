
"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";

import ThemeToggle from "@/components/theme-toggle";
import MobileStepHeader from "./Mobilestepheader";
import Sidebar from "./Sidebar";


import { getSidebarSteps, onboardingSteps } from "../data/onboardingSteps";

interface OnboardingLayoutProps {
  children?: ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentStep = useMemo(() => {
    const index = onboardingSteps.findIndex((s) => s.path === pathname);
    return index === -1 ? 0 : index;
  }, [pathname]);

  const current = onboardingSteps[currentStep];
  const steps = getSidebarSteps(currentStep);

  const canGoBack = currentStep > 0;
  const isOptional = current?.optional ?? false;

  function previousStep() {
    if (!canGoBack) return;
    router.push(onboardingSteps[currentStep - 1].path);
  }

  function skipStep() {
    if (!isOptional || currentStep >= onboardingSteps.length - 1) return;
    router.push(onboardingSteps[currentStep + 1].path);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-[#f7f7f7] p-0 dark:bg-black lg:p-[2%]">
      <div className="relative flex h-full w-full overflow-hidden bg-white shadow-2xl dark:bg-[#1f1f1f] lg:rounded-3xl lg:border lg:border-black/5 lg:dark:border-white/10">

        {/* Theme Toggle */}
        <div className="absolute right-5 top-5 z-30 hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden h-full w-[280px] shrink-0 flex-col border-r border-black/5 bg-white dark:border-white/10 dark:bg-[#202020] lg:flex">
          <Sidebar currentStep={currentStep} />
        </aside>

        {/* Main Content */}
        <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#2a2a2a]">

          {/* Mobile Header */}
          <div className="lg:hidden">
            <MobileStepHeader
              steps={steps}
              currentIndex={currentStep}
            />
          </div>

          {/* Page Content */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="flex min-h-full flex-col pt-14">
              {children}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}