import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, BadgeCheck, BookOpen, CalendarDays, Mail, Phone, Star, User, UserRoundCog } from "lucide-react";

import InfoItem from "@/components/common/InfoItem";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import InstructorStatusBadge from "@/features/owner/instructors/components/InstructorStatusBadge";
import { instructors } from "@/features/owner/instructors/data/instructors";

interface InstructorDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function InstructorDetailsPage({
    params,
}: InstructorDetailsPageProps) {
    const { id } = await params;

    const instructor = instructors.find(
        (item) => item.id === Number(id)
    );

    if (!instructor) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/owner/instructors" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back to Instructors
            </Button>

            <DashboardPageHeader
                title={instructor.name}
                description="Instructor details and profile information."
            />

            <div className="flex flex-wrap items-center gap-3">
                <InstructorStatusBadge
                    status={instructor.status}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>
                            Instructor Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="grid gap-6 sm:grid-cols-2">
                        <InfoItem
                            icon={<User className="size-4" />}
                            label="Full Name"
                            value={instructor.name}
                        />

                        <InfoItem
                            icon={<Mail className="size-4" />}
                            label="Email"
                            value={instructor.email}
                        />

                        <InfoItem
                            icon={<Phone className="size-4" />}
                            label="Phone"
                            value={instructor.phone}
                        />

                        <InfoItem
                            icon={<BadgeCheck className="size-4" />}
                            label="License Number"
                            value={instructor.licenseNumber}
                        />

                        <InfoItem
                            icon={<BookOpen className="size-4" />}
                            label="Experience"
                            value={`${instructor.experience} Years`}
                        />

                        <InfoItem
                            icon={<UserRoundCog className="size-4" />}
                            label="Specialization"
                            value={instructor.specialization}
                        />

                        <InfoItem
                            icon={<User className="size-4" />}
                            label="Assigned Learners"
                            value={String(instructor.assignedLearners)}
                        />

                        <InfoItem
                            icon={<CalendarDays className="size-4" />}
                            label="Joined On"
                            value={instructor.joinedAt}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Button
                            className="w-full"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/owner/instructors/${instructor.id}/edit`}
                                />
                            }
                        >
                            Edit Instructor
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full"
                        >
                            Assign Learners
                        </Button>

                        <div className="flex items-center justify-center gap-2 rounded-lg border p-4">
                            <Star className="size-5 fill-yellow-400 text-yellow-400" />

                            <span className="text-lg font-semibold">
                                {instructor.rating.toFixed(1)}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}