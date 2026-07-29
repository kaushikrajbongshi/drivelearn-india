"use client";

import Link from "next/link";
import { Mail, Phone, Users } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import InstructorStatusBadge from "./InstructorStatusBadge";
import type { Instructor } from "@/features/instructors/types/instructor";

interface InstructorMobileCardProps {
    instructor: Instructor;
}

export default function InstructorMobileCard({
    instructor,
}: InstructorMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                        <Avatar className="size-12">
                            <AvatarImage
                                src={instructor.avatar}
                                alt={instructor.name}
                            />

                            <AvatarFallback>
                                {instructor.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .join("")
                                    .slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>

                        <div>
                            <h3 className="font-semibold">
                                {instructor.name}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {instructor.schoolName}
                            </p>
                        </div>
                    </div>

                    <InstructorStatusBadge
                        status={instructor.status}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Mail className="size-4 text-muted-foreground" />

                        <span>{instructor.email}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Phone className="size-4 text-muted-foreground" />

                        <span>{instructor.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users className="size-4 text-muted-foreground" />

                        <span>
                            {instructor.totalLearners} Learners
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground">
                        {instructor.experience} Years Experience
                    </span>

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/admin/instructors/${instructor.id}`}
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