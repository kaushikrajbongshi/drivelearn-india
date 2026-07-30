import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    CalendarDays,
    Mail,
    Pencil,
    Phone,
    UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import InfoItem from "@/components/common/InfoItem";

import {
    LearnerStatusBadge,
    PaymentStatusBadge,
} from "@/features/owner/learners/components/LearnerStatusBadge";

import { learners } from "@/features/owner/learners/data/learners";

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
        (item) => item.id === Number(id)
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
                render={
                    <Link href="/owner/learners" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={learner.name}
                description="Learner Details"
            />

            <div className="flex flex-wrap gap-2">
                <LearnerStatusBadge
                    status={learner.status}
                />

                <PaymentStatusBadge
                    status={learner.paymentStatus}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Learner Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={<UserRound className="size-4" />}
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
                                icon={<BookOpen className="size-4" />}
                                label="Course"
                                value={learner.course}
                            />

                            <InfoItem
                                icon={<UserRound className="size-4" />}
                                label="Instructor"
                                value={learner.instructor}
                            />

                            <InfoItem
                                icon={<CalendarDays className="size-4" />}
                                label="Joined"
                                value={learner.joinedAt}
                            />

                            <InfoItem
                                icon={<BookOpen className="size-4" />}
                                label="Progress"
                                value={`${learner.progress}%`}
                            />

                            <InfoItem
                                icon={<BookOpen className="size-4" />}
                                label="Attendance"
                                value={`${learner.attendance}%`}
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

                    <CardContent>
                        <Button
                            className="w-full justify-start"
                            nativeButton={false}
                            render={
                                <Link
                                    href={`/owner/learners/${learner.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Learner
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}