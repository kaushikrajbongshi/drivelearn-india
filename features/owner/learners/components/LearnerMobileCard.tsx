"use client";

import Link from "next/link";
import {
    BookOpen,
    GraduationCap,
    Percent,
    UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import {
    LearnerStatusBadge,
    PaymentStatusBadge,
} from "./LearnerStatusBadge";

import type { Learner } from "@/features/owner/learners/types/learner";

interface LearnerMobileCardProps {
    learner: Learner;
}

export default function LearnerMobileCard({
    learner,
}: LearnerMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="font-semibold">
                            {learner.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {learner.email}
                        </p>
                    </div>

                    <LearnerStatusBadge
                        status={learner.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <BookOpen className="size-4 text-muted-foreground" />
                        <span>{learner.course}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <UserRound className="size-4 text-muted-foreground" />
                        <span>{learner.instructor}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <GraduationCap className="size-4 text-muted-foreground" />
                        <span>
                            Progress: {learner.progress}%
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Percent className="size-4 text-muted-foreground" />
                        <span>
                            Attendance: {learner.attendance}%
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <PaymentStatusBadge
                        status={learner.paymentStatus}
                    />

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/owner/learners/${learner.id}`}
                            />
                        }
                    >
                        View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}