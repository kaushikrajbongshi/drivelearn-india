import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import CourseStatusBadge from "./CourseStatusBadge";

import type { Course } from "../types/course";

interface CourseMobileCardProps {
    course: Course;
}

export default function CourseMobileCard({
    course,
}: CourseMobileCardProps) {
    return (
        <Card>
            <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                    <div>
                        <Link
                            href={`/owner/courses/${course.id}`}
                            className="font-semibold hover:underline"
                        >
                            {course.name}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            {course.code}
                        </p>
                    </div>

                    <CourseStatusBadge
                        status={course.status}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">
                            Duration
                        </p>

                        <p>{course.duration}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Fee
                        </p>

                        <p>
                            ₹{course.fee.toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Lessons
                        </p>

                        <p>{course.lessonCount}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Vehicle
                        </p>

                        <p>{course.vehicleType}</p>
                    </div>

                    <div className="col-span-2">
                        <p className="text-muted-foreground">
                            Description
                        </p>

                        <p>{course.description}</p>
                    </div>
                </div>

                <Button
                    className="w-full"
                    nativeButton={false}
                    render={
                        <Link
                            href={`/owner/courses/${course.id}`}
                        />
                    }
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
}