import Link from "next/link";
import {
    ArrowLeft,
    Building2,
    Mail,
    MapPin,
    Phone,
    Users,
    GraduationCap,
    CalendarDays,
    Activity,
    Pencil,
    ShieldCheck,
    ShieldBan,
    Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import SchoolStatusBadge from "@/features/schools/components/SchoolStatusBadge";
import SchoolSubscriptionBadge from "@/features/schools/components/SchoolSubscriptionBadge";
import SchoolVerificationBadge from "@/features/schools/components/SchoolVerificationBadge";
import { schools } from "@/features/schools/data/schools";

interface SchoolDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SchoolDetailsPage({
    params,
}: SchoolDetailsPageProps) {
    const { id } = await params;

    const school = schools.find((item) => item.id === id);

    if (!school) {
        return (
            <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
                <Building2 className="size-12 text-muted-foreground" />

                <div className="space-y-1 text-center">
                    <h2 className="text-xl font-semibold">
                        School not found
                    </h2>

                    <p className="text-muted-foreground">
                        The requested school does not exist.
                    </p>
                </div>

                <Link
                    href="/admin/schools"
                    className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium hover:bg-accent"
                >
                    <ArrowLeft className="mr-2 size-4" />
                    Back
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={<Link href="/admin/schools" />}
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={school.name}
                description="Driving School Details"
            />

            <div className="flex flex-wrap gap-2">
                <SchoolVerificationBadge
                    verification={school.verification}
                />

                <SchoolSubscriptionBadge
                    subscription={school.subscription}
                />

                <SchoolStatusBadge
                    status={school.status}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                School Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<Building2 className="size-4" />}
                                label="School Name"
                                value={school.name}
                            />

                            <InfoItem
                                icon={<Users className="size-4" />}
                                label="Owner"
                                value={school.ownerName}
                            />

                            <InfoItem
                                icon={<Mail className="size-4" />}
                                label="Email"
                                value={school.email}
                            />

                            <InfoItem
                                icon={<Phone className="size-4" />}
                                label="Phone"
                                value={school.phone}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Address
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<MapPin className="size-4" />}
                                label="State"
                                value={school.state}
                            />

                            <InfoItem
                                icon={<MapPin className="size-4" />}
                                label="City"
                                value={school.city}
                            />

                            <div className="md:col-span-2">
                                <p className="mb-1 text-sm text-muted-foreground">
                                    Address
                                </p>

                                <p>{school.address}</p>
                            </div>
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
                                icon={<Users className="size-4" />}
                                label="Instructors"
                                value={school.totalInstructors.toString()}
                            />

                            <InfoItem
                                icon={<GraduationCap className="size-4" />}
                                label="Learners"
                                value={school.totalLearners.toString()}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Joined"
                                value={school.joinedAt}
                            />

                            <InfoItem
                                icon={<Activity className="size-4" />}
                                label="Last Active"
                                value={school.lastActive}
                            />
                        </CardContent>
                    </Card>
                </div>

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
                                    href={`/admin/schools/${school.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit School
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <ShieldCheck className="mr-2 size-4" />
                            Verify School
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <ShieldBan className="mr-2 size-4" />
                            Suspend School
                        </Button>

                        <Button
                            variant="destructive"
                            className="w-full justify-start"
                        >
                            <Trash2 className="mr-2 size-4" />
                            Delete School
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