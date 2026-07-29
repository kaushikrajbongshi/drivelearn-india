import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    CalendarDays,
    GraduationCap,
    Mail,
    Phone,
    School,
    User,
    BadgeCheck,
    Clock3,
    MapPin,
    Pencil,
    UserX,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import InstructorStatusBadge from "@/features/instructors/components/InstructorStatusBadge";

import { instructors } from "@/features/instructors/data/instructors";

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
        (item) => item.id === id
    );

    if (!instructor) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/instructors" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={instructor.name}
                description="Instructor Details"
            />

            <InstructorStatusBadge
                status={instructor.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Personal Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
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
                                icon={<User className="size-4" />}
                                label="Gender"
                                value={instructor.gender}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Professional Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<School className="size-4" />}
                                label="Assigned School"
                                value={instructor.schoolName}
                            />

                            <InfoItem
                                icon={<BadgeCheck className="size-4" />}
                                label="License"
                                value={instructor.licenseNumber}
                            />

                            <InfoItem
                                icon={<Clock3 className="size-4" />}
                                label="Experience"
                                value={`${instructor.experience} Years`}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="License Expiry"
                                value={instructor.licenseExpiry}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Statistics
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<GraduationCap className="size-4" />}
                                label="Learners"
                                value={String(instructor.totalLearners)}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Joined"
                                value={instructor.joinedAt}
                            />

                            <InfoItem
                                icon={<Clock3 className="size-4" />}
                                label="Last Active"
                                value={instructor.lastActive}
                            />

                            <InfoItem
                                icon={<MapPin className="size-4" />}
                                label="City"
                                value={`${instructor.city}, ${instructor.state}`}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>
                            Quick Actions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Button
                            nativeButton={false}
                            className="w-full justify-start"
                            render={
                                <Link
                                    href={`/admin/instructors/${instructor.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Instructor
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <UserX className="mr-2 size-4" />
                            Suspend
                        </Button>

                        <Button
                            variant="destructive"
                            className="w-full justify-start"
                        >
                            <Trash2 className="mr-2 size-4" />
                            Delete
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoItem({
    icon,
    label,
    value,
}: InfoItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 text-muted-foreground">
                {icon}
            </div>

            <div>
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}