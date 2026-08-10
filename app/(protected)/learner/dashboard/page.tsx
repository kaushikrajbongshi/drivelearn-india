"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";


import AnnouncementsSection from "@/features/learners/dashboard/components/AnnouncementsSection";
import CompleteSetupSection from "@/features/learners/dashboard/components/CompleteSetupSection";
import DashboardFooter from "@/features/learners/dashboard/components/DashboardFooter";
import InstructorSection from "@/features/learners/dashboard/components/InstructorSection";
import ProgressSection from "@/features/learners/dashboard/components/ProgressSection";
import TodaysLessonCard from "@/features/learners/dashboard/components/TodaysLessonCard";
import UpcomingLessonSection from "@/features/learners/dashboard/components/UpcomingLessonSection";
import VehicleSection from "@/features/learners/dashboard/components/VehicleSection";
import WelcomeHeader from "@/features/learners/dashboard/components/WelcomeHeader";

export default function LearnerDashboardPage() {
  // Temporary value for UI testing.
  // Later this will come from the learner onboarding/profile state.
  const onboardingIncomplete = true;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-white dark:bg-neutral-950">
        {/* Sidebar */}


        {/* Main Area */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <DashboardHeader />

          {/* Dashboard Content */}
          <main className="flex-1">
            <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mx-auto max-w-5xl">
                {/* Welcome */}
                <WelcomeHeader />

                {/* Optional onboarding setup */}
                {onboardingIncomplete && (
                  <div className="mt-10">
                    <CompleteSetupSection />
                  </div>
                )}

                {/* Today's lesson */}
                <div className="mt-10">
                  <TodaysLessonCard />
                </div>

                {/* Progress */}
                <div className="mt-10">
                  <ProgressSection />
                </div>

                {/* Upcoming lesson */}
                <div className="mt-10">
                  <UpcomingLessonSection />
                </div>

                {/* Instructor */}
                <div className="mt-10">
                  <InstructorSection />
                </div>

                {/* Vehicle */}
                <div className="mt-10">
                  <VehicleSection />
                </div>

                {/* Announcements */}
                <div className="mt-10">
                  <AnnouncementsSection />
                </div>

                {/* Footer */}
                <div className="mt-10">
                  <DashboardFooter />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}