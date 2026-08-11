"use client";

import { getDashboardData } from "../data/mockData";
import DashboardHeader from "./DashboardHeader";
import TodayLessonCard from "./TodayLessonCard";
import UpcomingLessonCard from "./UpcomingLessonCard";
import ProgressCard from "./ProgressCard";
import InstructorCard from "./InstructorCard";
import VehicleCard from "./VehicleCard";
import AnnouncementsCard from "./AnnouncementsCard";

export default function DashboardContent() {
  // TODO: replace with getDashboardData() API call
  const data = getDashboardData();

  return (
    <div className="mx-auto max-w-7xl space-y-3 px-1 motion-reduce:[&_*]:transition-none motion-reduce:[&_*]:animate-none sm:px-8 lg:px-10">
      <DashboardHeader learnerName={data.learnerName} />

      <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        <TodayLessonCard lesson={data.todayLesson} />
        <UpcomingLessonCard lesson={data.upcomingLesson} />
      </div>

      <div
        className="
    relative
    overflow-hidden
    rounded-3xl  gap-3
    border
    border-neutral-200
    bg-gradient-to-br
    from-white
    via-neutral-50
    to-emerald-50/60
    shadow-sm

    dark:border-white/[0.08]
    dark:from-[#050706]
    dark:via-[#080c0a]
    dark:to-[#062017]
  "
      >
        {/* =====================================================
      SHARED BACKGROUND
      Makes all three cards feel like ONE dashboard surface
  ====================================================== */}

        {/* Top-right green atmosphere */}
        <div
          className="
      pointer-events-none
      absolute
      -right-32
      -top-32
      h-[420px]
      w-[420px]
      rounded-full
      bg-emerald-200/30
      blur-[110px]

      dark:bg-emerald-400/10
    "
        />

        {/* Right-side green gradient */}
        <div
          className="
      pointer-events-none
      absolute
      right-0
      top-0
      h-full
      w-[65%]
      bg-gradient-to-l
      from-emerald-100/40
      via-transparent
      to-transparent

      dark:from-emerald-500/[0.08]
    "
        />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-stretch">

          {/* ================= COLUMN 1: Progress ================= */}

          <div className="relative w-full sm:w-1/3">
            <ProgressCard progress={data.progress} />
          </div>


          {/* ================= SEPARATOR 1 ================= */}

          <div
            className="
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-emerald-200/70
        to-transparent

        dark:via-emerald-500/20

        sm:h-auto
        sm:w-px
        sm:bg-gradient-to-b
      "
            aria-hidden="true"
          />


          {/* ================= COLUMN 2: Instructor ================= */}

          <div className="relative w-full sm:w-1/3">
            <InstructorCard instructor={data.instructor} />
          </div>


          {/* ================= SEPARATOR 2 ================= */}

          <div
            className="
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-neutral-200/80
        to-transparent

        dark:via-white/[0.08]

        sm:h-auto
        sm:w-px
        sm:bg-gradient-to-b
      "
            aria-hidden="true"
          />


          {/* ================= COLUMN 3: Vehicle ================= */}

          <div className="relative w-full sm:w-1/3">
            <VehicleCard vehicle={data.vehicle} />
          </div>

        </div>
      </div>

      <div className="rounded-3xl bg-emerald-50/60 px-6 py-6 dark:bg-emerald-500/[0.05] sm:px-8 sm:py-7">
        <AnnouncementsCard announcements={data.announcements} />
      </div>
    </div>
  );
}