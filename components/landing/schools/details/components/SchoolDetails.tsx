"use client";

import { useState } from "react";
import type { DrivingSchool } from "../../types/school";

import SchoolDetailsStats from "./SchoolDetailsStats";
import SchoolDetailsTabs from "./SchoolDetailsTabs";
import SchoolCourses from "./SchoolCourses";
import SchoolInstructors from "./SchoolInstructors";
import SchoolVehicles from "./SchoolVehicles";
import SchoolReviews from "./SchoolReviews";
import SchoolGallery from "./SchoolGallery";
import SchoolAboutHero from "./SchoolAboutHero";

interface SchoolDetailsProps {
    school: DrivingSchool;
}

export default function SchoolDetails({ school }: SchoolDetailsProps) {
    const [activeTab, setActiveTab] = useState("courses");

    return (
        <main className="mx-auto border mt-3 mb-3 rounded-lg max-w-5xl px-4 py-6 sm:px-6 sm:py-8">

                <SchoolAboutHero school={school} />

                {/* Stats bar */}



            {/* Tabs */}
            <SchoolDetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === "courses" && <SchoolCourses school={school} />}
                {activeTab === "instructors" && <SchoolInstructors school={school} />}
                {activeTab === "vehicles" && <SchoolVehicles school={school} />}
                {activeTab === "reviews" && <SchoolReviews school={school} />}
                {activeTab === "gallery" && <SchoolGallery school={school} />}
            </div>
        </main>
    );
}