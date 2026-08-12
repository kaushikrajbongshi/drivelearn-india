"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/learner/DashboardHeader";


import WelcomeSection from "@/features/learners/dashboard/components/WelcomeSection";
import CompleteSetupSection from "@/features/learners/dashboard/components/CompleteSetupSection";
import NextLessonSection from "@/features/learners/dashboard/components/NextLessonSection";
import LicenseRouteSection from "@/features/learners/dashboard/components/LicenseRouteSection";
import TrainingProgressSection from "@/features/learners/dashboard/components/TrainingProgressSection";
import InstructorSection from "@/features/learners/dashboard/components/InstructorSection";
import PackageSection from "@/features/learners/dashboard/components/PackageSection";
import QuickActionsSection from "@/features/learners/dashboard/components/QuickActionsSection";
import RateLessonSection from "@/features/learners/dashboard/components/RateLessonSection";
import DashboardSupport from "@/features/learners/dashboard/components/DashboardSupport";

export default function LearnerDashboardPage() {
  const onboardingIncomplete = false;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full min-w-0 overflow-x-hidden bg-white dark:bg-neutral-950">
        {/* Sidebar */}


        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
          <DashboardHeader />

          <main className="min-w-0 flex-1 overflow-x-hidden">
            <div className="mx-auto w-full max-w-7xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-5xl min-w-0 space-y-8">
                {/* Welcome */}
                <WelcomeSection />

                {/* Optional onboarding */}
                {onboardingIncomplete && <CompleteSetupSection />}

                {/* Next lesson */}
                <NextLessonSection />

                {/* License route */}
                <LicenseRouteSection />

                {/* Training progress */}
                <TrainingProgressSection />

                {/* Instructor + Package */}
                <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="min-w-0">
                    <InstructorSection />
                  </div>

                  <div className="min-w-0">
                    <PackageSection />
                  </div>
                </div>

                {/* Quick Actions + Recent Lesson */}
                <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="min-w-0">
                    <QuickActionsSection />
                  </div>

                  <div className="min-w-0">
                    <RateLessonSection />
                  </div>
                </div>

                {/* Support */}
                <DashboardSupport />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}