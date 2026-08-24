"use client";

import Link from "next/link";

import {
    BookOpen,
    TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import StudentStatusBadge from "./StudentStatusBadge";

import type { Student } from "../types/student";

interface StudentMobileCardProps {
    student: Student;
}

export default function StudentMobileCard({
    student,
}: StudentMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {student.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {student.id}
                        </p>
                    </div>

                    <StudentStatusBadge
                        status={student.status}
                    />
                </div>

                {/* Student Information */}
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <BookOpen className="size-4 text-muted-foreground" />

                        <span>
                            {student.course}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <TrendingUp className="size-4 text-muted-foreground" />

                        <span>
                            {student.progress}% Progress
                        </span>
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                            Course Progress
                        </span>

                        <span className="font-medium">
                            {student.progress}%
                        </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full rounded-full bg-primary"
                            style={{
                                width: `${student.progress}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-muted-foreground">
                        {student.course}
                    </span>

                    <Button
                        size="sm"
                        nativeButton={false}
                        render={
                            <Link
                                href={`/instructor/students/${student.id}`}
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