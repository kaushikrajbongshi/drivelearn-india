"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import type { School } from "@/features/schools/types/school";

import SchoolActions from "./SchoolActions";
import SchoolStatusBadge from "./SchoolStatusBadge";
import SchoolSubscriptionBadge from "./SchoolSubscriptionBadge";
import SchoolVerificationBadge from "./SchoolVerificationBadge";

interface SchoolMobileCardProps {
    school: School;
}

export default function SchoolMobileCard({
    school,
}: SchoolMobileCardProps) {
    return (
        <div className="rounded-xl border p-4">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="size-11">
                        <AvatarImage
                            src={school.logo}
                            alt={school.name}
                        />

                        <AvatarFallback>
                            {school.name
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                        <p className="truncate font-semibold">
                            {school.name}
                        </p>

                        <p className="truncate text-sm text-muted-foreground">
                            {school.email}
                        </p>
                    </div>
                </div>

                <SchoolActions schoolId={school.id} />
            </div>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
                <SchoolVerificationBadge
                    verification={school.verification}
                />

                <SchoolStatusBadge
                    status={school.status}
                />

                <SchoolSubscriptionBadge
                    subscription={school.subscription}
                />
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="text-muted-foreground">
                        Owner
                    </p>

                    <p className="font-medium">
                        {school.ownerName}
                    </p>
                </div>

                <div>
                    <p className="text-muted-foreground">
                        Location
                    </p>

                    <p className="font-medium">
                        {school.city}, {school.state}
                    </p>
                </div>

                <div>
                    <p className="text-muted-foreground">
                        Instructors
                    </p>

                    <p className="font-medium">
                        {school.totalInstructors}
                    </p>
                </div>

                <div>
                    <p className="text-muted-foreground">
                        Learners
                    </p>

                    <p className="font-medium">
                        {school.totalLearners}
                    </p>
                </div>

                <div className="col-span-2">
                    <p className="text-muted-foreground">
                        Joined
                    </p>

                    <p className="font-medium">
                        {school.joinedAt}
                    </p>
                </div>
            </div>
        </div>
    );
}