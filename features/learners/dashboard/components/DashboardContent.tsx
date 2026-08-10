"use client";

import { getDashboardData } from "../data/mockDashboard";
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
        <div className="flex flex-col gap-6 p-6 lg:p-8">
            <DashboardHeader learnerName={data.learnerName} />

            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                <TodayLessonCard lesson={data.todayLesson} />
                <UpcomingLessonCard lesson={data.upcomingLesson} />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <ProgressCard progress={data.progress} />
                <InstructorCard instructor={data.instructor} />
                <VehicleCard vehicle={data.vehicle} />
            </div>

            <AnnouncementsCard announcements={data.announcements} />
        </div>
    );
}