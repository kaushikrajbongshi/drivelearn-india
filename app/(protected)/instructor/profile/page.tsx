import Link from "next/link";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import InstructorProfileCard from "@/features/instructors/profile/components/InstructorProfileCard";
import { instructorProfile } from "@/features/instructors/profile/data/instructor-profile";

export default function InstructorProfilePage() {
    return (
        <div className="space-y-6">
            <DashboardPageHeader
                title="My Profile"
                description="View and manage your personal and professional information."
            />

            <div className="flex justify-end">
                <Button
                    nativeButton={false}
                    render={
                        <Link href="/instructor/profile/edit" />
                    }
                >
                    <Pencil className="mr-2 size-4" />
                    Edit Profile
                </Button>
            </div>

            <InstructorProfileCard
                profile={instructorProfile}
            />
        </div>
    );
}