import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
    BookOpen,
    CalendarDays,
    Mail,
    Phone,
    TrendingUp,
    User,
    Pencil,
    UserX,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import StudentStatusBadge from "@/features/instructors/students/components/StudentStatusBadge";

import { students } from "@/features/instructors/students/data/students";

interface StudentDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function StudentDetailsPage({
    params,
}: StudentDetailsPageProps) {
    const { id } = await params;

    const student = students.find(
        (item) => item.id === id
    );

    if (!student) {
        notFound();
    }

    return (
        <div className="space-y-6">
            {/* Back */}
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/instructor/students" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            {/* Header */}
            <DashboardPageHeader
                title={student.name}
                description={`Student Details • ${student.id}`}
            />

            {/* Status */}
            <div className="flex flex-wrap gap-2">
                <StudentStatusBadge
                    status={student.status}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="space-y-6 xl:col-span-2">
                    {/* Student Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Student Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={
                                    <User className="size-4" />
                                }
                                label="Name"
                                value={student.name}
                            />

                            <InfoItem
                                icon={
                                    <Mail className="size-4" />
                                }
                                label="Email"
                                value={student.email}
                            />

                            <InfoItem
                                icon={
                                    <Phone className="size-4" />
                                }
                                label="Phone"
                                value={student.phone}
                            />

                            <InfoItem
                                icon={
                                    <BookOpen className="size-4" />
                                }
                                label="Course"
                                value={student.course}
                            />
                        </CardContent>
                    </Card>

                    {/* Course Progress */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Course Progress
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="text-muted-foreground">
                                        <TrendingUp className="size-4" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Overall Progress
                                        </p>

                                        <p className="font-medium">
                                            {student.progress}% completed
                                        </p>
                                    </div>
                                </div>

                                <span className="text-2xl font-semibold">
                                    {student.progress}%
                                </span>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-muted">
                                <div
                                    className="h-full rounded-full bg-primary transition-all"
                                    style={{
                                        width: `${student.progress}%`,
                                    }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Course Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Course Details
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={
                                    <BookOpen className="size-4" />
                                }
                                label="Enrolled Course"
                                value={student.course}
                            />

                            <InfoItem
                                icon={
                                    <TrendingUp className="size-4" />
                                }
                                label="Current Progress"
                                value={`${student.progress}%`}
                            />

                            <InfoItem
                                icon={
                                    <CalendarDays className="size-4" />
                                }
                                label="Training Status"
                                value={student.status}
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
                                    href={`/instructor/students/${student.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Student
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <UserX className="mr-2 size-4" />
                            Remove Student
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

                <p className="font-medium capitalize">
                    {value}
                </p>
            </div>
        </div>
    );
}