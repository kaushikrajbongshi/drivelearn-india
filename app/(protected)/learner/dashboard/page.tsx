"use client";

import CompleteSetupSection from "@/features/learners/dashboard/components/CompleteSetupSection";
import DashboardSupport from "@/features/learners/dashboard/components/DashboardSupport";
import InstructorSection from "@/features/learners/dashboard/components/InstructorSection";
import LicenseRouteSection from "@/features/learners/dashboard/components/LicenseRouteSection";
import NextLessonSection from "@/features/learners/dashboard/components/NextLessonSection";
import PackageSection from "@/features/learners/dashboard/components/PackageSection";
import QuickActionsSection from "@/features/learners/dashboard/components/QuickActionsSection";
import RateLessonSection from "@/features/learners/dashboard/components/RateLessonSection";
import TrainingProgressSection from "@/features/learners/dashboard/components/TrainingProgressSection";
import WelcomeSection from "@/features/learners/dashboard/components/WelcomeSection";
import FirstLessonBanner from "@/features/learners/lessons/components/FirstLessonBanner";

export default function LearnerDashboardPage() {
  /*
   * Temporary frontend states.
   * These will come from the learner/enrollment API later.
   */
  const onboardingIncomplete = false;
  const hasEnrollment = true;
  const hasScheduledLesson = false;

  return (
    <div className=" w-full min-w-0 overflow-x-hidden bg-background">
      <main className="min-w-0 overflow-x-hidden">
        <div className="mx-auto w-full max-w-7xl min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-5xl min-w-0 space-y-8">
            {/* Welcome */}
            <WelcomeSection />

            {/* ============================================================
                INCOMPLETE ONBOARDING
               ============================================================ */}
            {onboardingIncomplete ? (
              <CompleteSetupSection />
            ) : !hasEnrollment ? (
              /* ==========================================================
                 NO ENROLLMENT
                 ========================================================== */
              <FirstLessonBanner
                mode="browse"
              />

            ) : !hasScheduledLesson ? (
              /* ==========================================================
                 ENROLLED BUT FIRST LESSON NOT SCHEDULED
                 ========================================================== */
              <FirstLessonBanner
                mode="schedule"
              />
            ) : (
              /* ==========================================================
                 FULL LEARNER DASHBOARD
                 ========================================================== */
              <>
                {/* Next lesson */}
                <NextLessonSection />

                {/* Route to license */}
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

                {/* Quick actions + Recent lesson */}
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
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}