"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    dashboardIcons,
    type DashboardIcon,
} from "@/config/dashboard-icons";

import {
    todaysLessons,
    type InstructorLesson,
} from "../data/todays-lessons";

interface TodaysLessonsProps {
    lessons?: InstructorLesson[];
}

const statusIcons: Record<
    InstructorLesson["status"],
    DashboardIcon
> = {
    Completed: "checkCircle",
    Pending: "calendar",
};

export default function TodaysLessons({
    lessons = todaysLessons,
}: TodaysLessonsProps) {
    const MoreIcon = dashboardIcons.more;

    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Today&apos;s Lessons</CardTitle>

                <Button variant="ghost" size="icon">
                    <MoreIcon className="size-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-4">
                {lessons.map((lesson) => {
                    const StatusIcon =
                        dashboardIcons[statusIcons[lesson.status]];

                    return (
                        <div
                            key={lesson.id}
                            className="flex flex-col gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex min-w-0 items-center gap-3">
                                <Avatar className="size-10 shrink-0">
                                    <AvatarImage
                                        // src={lesson.avatar}
                                        alt={lesson.studentName}
                                    />

                                    <AvatarFallback>
                                        {lesson.studentName
                                            .split(" ")
                                            .map((word) => word[0])
                                            .join("")
                                            .slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="min-w-0">
                                    <p className="truncate font-medium">
                                        {lesson.studentName}
                                    </p>

                                    <p className="truncate text-sm text-muted-foreground">
                                        {lesson.time} · {lesson.course}
                                    </p>

                                    <p className="truncate text-sm text-muted-foreground">
                                        {lesson.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                <Badge variant="outline" className="gap-1">
                                    <StatusIcon className="size-3.5" />
                                    {lesson.status}
                                </Badge>

                                {lesson.status === "Pending" && (
                                    <Button
                                        type="button"
                                        size="sm"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Start Lesson
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}