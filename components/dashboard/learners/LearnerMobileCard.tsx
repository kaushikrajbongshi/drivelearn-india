"use client";

import Link from "next/link";
import { Mail, Phone, GraduationCap } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import LearnerStatusBadge from "./LearnerStatusBadge";

import type { Learner } from "@/features/admin/learners/types/learner";

interface LearnerMobileCardProps {
    learner: Learner;
}

export default function LearnerMobileCard({
    learner,
}: LearnerMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                        <Avatar className="size-12">
                            <AvatarImage
                                src={learner.avatar}
                                alt={learner.name}
                            />

                            <AvatarFallback>
                                {learner.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .join("")
                                    .slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>

                        <div>
                            <h3 className="font-semibold">
                                {learner.name}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {learner.schoolName}
                            </p>
                        </div>
                    </div>

                    <LearnerStatusBadge
                        status={learner.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Mail className="size-4 text-muted-foreground" />

                        <span>{learner.email}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Phone className="size-4 text-muted-foreground" />

                        <span>{learner.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <GraduationCap className="size-4 text-muted-foreground" />

                        <span>{learner.course}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground">
                        {learner.instructorName}
                    </span>

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/learners/${learner.id}`}
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