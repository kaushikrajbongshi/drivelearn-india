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
    BookOpen,
    Activity,
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
import LearnerStatusBadge from "@/features/learners/components/LearnerStatusBadge";

import { learners } from "@/features/learners/data/learners";

interface LearnerDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function LearnerDetailsPage({
    params,
}: LearnerDetailsPageProps) {
    const { id } = await params;

    const learner = learners.find(
        (item) => item.id === id
    );

    if (!learner) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/learners" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={learner.name}
                description="Learner Details"
            />

            <LearnerStatusBadge
                status={learner.status}
            />

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">

                    {/* Personal */}
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
                                value={learner.name}
                            />

                            <InfoItem
                                icon={<Mail className="size-4" />}
                                label="Email"
                                value={learner.email}
                            />

                            <InfoItem
                                icon={<Phone className="size-4" />}
                                label="Phone"
                                value={learner.phone}
                            />

                            <InfoItem
                                icon={<User className="size-4" />}
                                label="Gender"
                                value={learner.gender}
                            />
                        </CardContent>
                    </Card>

                    {/* Course */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Course Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<BookOpen className="size-4" />}
                                label="Course"
                                value={learner.course}
                            />

                            <InfoItem
                                icon={<School className="size-4" />}
                                label="School"
                                value={learner.schoolName}
                            />

                            <InfoItem
                                icon={<User className="size-4" />}
                                label="Instructor"
                                value={learner.instructorName}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Learner License"
                                value={learner.learnerLicenseNumber}
                            />
                        </CardContent>
                    </Card>

                    {/* Progress */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Training Progress
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<GraduationCap className="size-4" />}
                                label="Theory Progress"
                                value={`${learner.theoryProgress}%`}
                            />

                            <InfoItem
                                icon={<Activity className="size-4" />}
                                label="Practical Progress"
                                value={`${learner.practicalProgress}%`}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Joined"
                                value={learner.joinedAt}
                            />

                            <InfoItem
                                icon={<MapPin className="size-4" />}
                                label="Location"
                                value={`${learner.city}, ${learner.state}`}
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
                                    href={`/admin/learners/${learner.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Learner
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