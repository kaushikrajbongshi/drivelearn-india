import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

// import InstructorProfileForm
import { instructorProfile } from "@/features/instructors/profile/data/instructor-profile";
import InstructorProfileForm from "@/features/instructors/profile/components/InstructorProfileForm";

export default function InstructorProfileEditPage() {
    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/instructor/profile" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title="Edit Profile"
                description="Update your instructor profile information."
            />

            <Card>
                <CardHeader>
                    <CardTitle>
                        Profile Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <InstructorProfileForm
                        profile={instructorProfile}
                    />
                </CardContent>
            </Card>
        </div>
    );
}