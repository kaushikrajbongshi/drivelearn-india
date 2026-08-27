import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
    Building2,
    CalendarDays,
    Car,
    Clock,
    Mail,
    MapPin,
    Pencil,
    Phone,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";

import BranchStatusBadge from "@/features/owner/owner-branches/components/BranchStatusBadge";
import { branches } from "@/features/owner/owner-branches/data/branches";

interface BranchDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BranchDetailsPage({
    params,
}: BranchDetailsPageProps) {
    const { id } = await params;

    const branch = branches.find(
        (item) => item.id === id
    );

    if (!branch) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Button
                nativeButton={false}
                variant="ghost"
                className="w-fit"
                render={
                    <Link href="/owner/branches" />
                }
            >
                <ArrowLeft className="mr-2 size-4" />
                Back
            </Button>

            <DashboardPageHeader
                title={branch.name}
                description="Branch Details"
            />

            <div className="flex flex-wrap gap-2">
                <BranchStatusBadge
                    status={branch.status}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                {/* Main Information */}
                <div className="space-y-6 xl:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Branch Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={
                                    <Building2 className="size-4" />
                                }
                                label="Branch Name"
                                value={branch.name}
                            />

                            <InfoItem
                                icon={
                                    <Building2 className="size-4" />
                                }
                                label="Branch Code"
                                value={branch.code}
                            />

                            <InfoItem
                                icon={
                                    <Phone className="size-4" />
                                }
                                label="Phone"
                                value={branch.phone}
                            />

                            <InfoItem
                                icon={
                                    <Mail className="size-4" />
                                }
                                label="Email"
                                value={branch.email}
                            />

                            <InfoItem
                                icon={
                                    <Clock className="size-4" />
                                }
                                label="Working Hours"
                                value={branch.workingHours}
                            />

                            <InfoItem
                                icon={
                                    <CalendarDays className="size-4" />
                                }
                                label="Created At"
                                value={branch.createdAt}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Location
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <InfoItem
                                icon={
                                    <MapPin className="size-4" />
                                }
                                label="Address"
                                value={branch.address}
                            />

                            <InfoItem
                                icon={
                                    <MapPin className="size-4" />
                                }
                                label="City"
                                value={branch.city}
                            />

                            <InfoItem
                                icon={
                                    <MapPin className="size-4" />
                                }
                                label="State"
                                value={branch.state}
                            />

                            <InfoItem
                                icon={
                                    <MapPin className="size-4" />
                                }
                                label="Pincode"
                                value={branch.pincode}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Branch Overview
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-4 sm:grid-cols-3">
                            <StatItem
                                icon={
                                    <Users className="size-4" />
                                }
                                label="Instructors"
                                value={branch.instructorCount}
                            />

                            <StatItem
                                icon={
                                    <Users className="size-4" />
                                }
                                label="Learners"
                                value={branch.learnerCount}
                            />

                            <StatItem
                                icon={
                                    <Car className="size-4" />
                                }
                                label="Vehicles"
                                value={branch.vehicleCount}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
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
                                    href={`/owner/branches/${branch.id}/edit`}
                                />
                            }
                        >
                            <Pencil className="mr-2 size-4" />
                            Edit Branch
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
            <div className="mt-0.5 shrink-0 text-muted-foreground">
                {icon}
            </div>

            <div className="min-w-0">
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

interface StatItemProps {
    icon: React.ReactNode;
    label: string;
    value: number;
}

function StatItem({
    icon,
    label,
    value,
}: StatItemProps) {
    return (
        <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
                {icon}

                <span className="text-sm">
                    {label}
                </span>
            </div>

            <p className="mt-2 text-2xl font-semibold">
                {value}
            </p>
        </div>
    );
}