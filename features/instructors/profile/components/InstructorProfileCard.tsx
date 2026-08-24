


"use client";

import {
    BriefcaseBusiness,
    CalendarDays,
    Car,
    FileText,
    IdCard,
    Mail,
    MapPin,
    Phone,
    User,
    Users,
} from "lucide-react";
import type { InstructorProfile } from "../types/instructor-profile";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface InstructorProfileCardProps {
    profile: InstructorProfile;
}

export default function InstructorProfile({
    profile,
}: InstructorProfileCardProps) {
    return (
        <div className="space-y-6">
            {/* Main Profile */}
            <Card>
                <CardContent className="p-6">
                    <div className="grid gap-6 lg:grid-cols-[auto_1fr_1fr]">
                        {/* Profile */}
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="relative size-28 overflow-hidden rounded-full bg-muted">
                                <Image
                                    src={profile.profileImage}
                                    alt={profile.fullName}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <Badge
                                variant="outline"
                                className="mt-3 md:ml-7 border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
                            >
                                {profile.status === "active"
                                    ? "Active"
                                    : "Inactive"}
                            </Badge>
                        </div>

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    {profile.fullName}
                                </h2>
                            </div>

                            <div className="grid gap-3 text-sm">
                                <ProfileInfo
                                    icon={<Mail />}
                                    value={profile.email}
                                />

                                <ProfileInfo
                                    icon={<Phone />}
                                    value={profile.phone}
                                />

                                <ProfileInfo
                                    icon={<CalendarDays />}
                                    value={profile.dateOfBirth}
                                />

                                <ProfileInfo
                                    icon={<Users />}
                                    value={profile.gender}
                                />

                                <ProfileInfo
                                    icon={<MapPin />}
                                    value={profile.address}
                                />
                            </div>
                        </div>

                        {/* Account / School Information */}
                        <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            <ProfileInfo
                                icon={<IdCard />}
                                label="Instructor ID"
                                value={profile.id}
                            />

                            <ProfileInfo
                                icon={<Users />}
                                label="Driving School"
                                value={profile.drivingSchool}
                            />

                            <ProfileInfo
                                icon={<CalendarDays />}
                                label="Joined Date"
                                value={profile.joinedDate}
                            />

                            <ProfileInfo
                                icon={<CalendarDays />}
                                label="Last Updated"
                                value={profile.updatedAt}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Information Cards */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Professional Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <BriefcaseBusiness className="size-4 text-muted-foreground" />
                            Professional Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <DetailRow
                            label="License Number"
                            value={profile.licenseNumber}
                        />

                        <DetailRow
                            label="License Expiry Date"
                            value={profile.licenseExpiry}
                        />

                        <DetailRow
                            label="Years of Experience"
                            value={`${profile.yearsOfExperience} Years`}
                        />

                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                Specialization / Vehicle Types
                            </p>

                            <div className="flex flex-wrap gap-5">
                                {profile.vehicleTypes.map((vehicle) => (
                                    <Badge
                                        key={vehicle}
                                        variant="destructive"
                                    >
                                        <Car className="mr-1 size-3.5" />
                                        {vehicle}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact / Location */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <MapPin className="size-4 text-muted-foreground" />
                            Contact / Location
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <DetailRow
                            label="City"
                            value={profile.city}
                        />

                        <DetailRow
                            label="State"
                            value={profile.state}
                        />

                        <DetailRow
                            label="Pincode"
                            value={profile.pincode}
                        />
                    </CardContent>
                </Card>

                {/* Account Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <User className="size-4 text-muted-foreground" />
                            Account Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <DetailRow
                            label="Account Status"
                            value={
                                profile.status === "active"
                                    ? "Active"
                                    : "Inactive"
                            }
                            badge
                        />

                        <DetailRow
                            label="Joined Date"
                            value={profile.joinedDate}
                        />

                        <DetailRow
                            label="Last Updated"
                            value={profile.updatedAt}
                        />
                    </CardContent>
                </Card>

                {/* Documents */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <FileText className="size-4 text-muted-foreground" />
                            Documents
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid grid-cols-3 gap-3">
                            {profile.documents.map((document) => (
                                <DocumentItem
                                    key={document.name}
                                    name={document.name}
                                    status={document.status}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

/* ------------------------------------------------ */
/* Helpers                                          */
/* ------------------------------------------------ */

interface ProfileInfoProps {
    icon: React.ReactNode;
    label?: string;
    value: string;
}

function ProfileInfo({
    icon,
    label,
    value,
}: ProfileInfoProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-muted-foreground [&_svg]:size-4">
                {icon}
            </div>

            <div className="min-w-0">
                {label && (
                    <p className="text-xs text-muted-foreground">
                        {label}
                    </p>
                )}

                <p className="truncate text-sm font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}

interface DetailRowProps {
    label: string;
    value: string;
    badge?: boolean;
}

function DetailRow({
    label,
    value,
    badge = false,
}: DetailRowProps) {
    return (
        <div className="grid grid-cols-2 items-center gap-4 text-sm">
            <p className="text-muted-foreground">
                {label}
            </p>

            {badge ? (
                <div>
                    <Badge
                        variant="outline"
                        className="border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
                    >
                        {value}
                    </Badge>
                </div>
            ) : (
                <p className="font-medium">
                    {value}
                </p>
            )}
        </div>
    );
}

interface DocumentItemProps {
    name: string;
    status: "verified" | "pending";
}

function DocumentItem({
    name,
    status,
}: DocumentItemProps) {
    return (
        <div className="rounded-lg border p-3">
            <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-muted">
                <FileText className="size-8 text-muted-foreground" />
            </div>

            <p className="mt-2 text-center text-xs font-medium">
                {name}
            </p>

            <div className="mt-1 flex items-center justify-center">
                <Badge
                    variant="outline"
                    className={
                        status === "verified"
                            ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
                            : "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-300"
                    }
                >
                    {status === "verified"
                        ? "Verified"
                        : "Pending"}
                </Badge>
            </div>
        </div>
    );
}